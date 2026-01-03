<template>
  <div v-if="creative" class="creative-detail">
    <!-- 戻るボタン -->
    <router-link to="/creatives" class="back-link">
      <fa :icon="['fas', 'arrow-left']" />
      {{ $t('creatives.common.backToList') }}
    </router-link>

    <!-- 作品タイトル -->
    <h1 class="creative-title">{{ $t(creative.title) }}</h1>

    <!-- タグ -->
    <div class="creative-tags" v-if="creative.tags && creative.tags.length > 0">
      <span v-for="(tag, index) in creative.tags" :key="index" class="creative-tag">
        {{ tag }}
      </span>
    </div>

    <!-- 2カラムコンテンツ -->
    <div class="content-wrapper">
      <!-- 左カラム: 画像・動画 -->
      <div class="left-column">
        <!-- 作品画像ギャラリー -->
        <div class="image-gallery" v-if="detailData.images && detailData.images.length > 0">
      <img
        v-for="(image, index) in detailData.images"
        :key="index"
        :src="image"
        :alt="$t(creative.title)"
        class="gallery-image"
        loading="lazy"
      />
    </div>

    <!-- Animation 専用: YouTube 動画セクション -->
    <div v-if="hasYoutube" class="youtube-section">
      <h2>{{ $t('creatives.common.video') }}</h2>
      <div class="video-container">
        <iframe
          v-if="!isDesktop && detailData.youtube"
          :src="detailData.youtube.mobile"
          :title="$t(creative.title)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <iframe
          v-else-if="detailData.youtube"
          :src="detailData.youtube.desktop"
          :title="$t(creative.title)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
        </div>
      </div>

      <!-- 右カラム: 説明文・メタ情報 -->
      <div class="right-column">
        <!-- 作品説明文（Markdown対応） -->
        <div class="creative-description" v-html="renderedDescription"></div>

    <!-- 制作年 -->
    <div v-if="detailData.productionYear" class="production-year">
      <strong>{{ $t('creatives.common.productionYear') }}:</strong> {{ detailData.productionYear }}
    </div>

    <!-- クレジット情報 -->
    <div v-if="parsedCredits.length > 0" class="credits-section">
      <h2>{{ $t('creatives.common.credits') }}</h2>
      <dl class="credits-grid">
        <template v-for="(credit, index) in parsedCredits" :key="index">
          <dt v-if="credit.label" class="credit-label">{{ credit.label }}</dt>
          <dd class="credit-value">{{ credit.value }}</dd>
        </template>
      </dl>
        </div>
      </div>
    </div>

    <!-- CTA ボタン -->
    <div class="cta-section">
      <Btn
        v-for="(button, index) in detailData.cta"
        :key="index"
        :href="button.href || creative.url"
        :target="button.target"
        :icon="button.icon"
        :text="$t(button.text)"
        :subText="button.subText ? $t(button.subText) : ''"
        :variant="button.variant"
      />
    </div>
  </div>

  <!-- 作品が見つからない場合 -->
  <div v-else class="not-found">
    <h1>{{ $t('creatives.common.notFound') }}</h1>
    <router-link to="/creatives" class="back-link">
      <fa :icon="['fas', 'arrow-left']" />
      {{ $t('creatives.common.backToList') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, onMounted, onBeforeUnmount, type Ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { useHead } from '@vueuse/head';
  import { marked } from 'marked';
  import { creativesData, detailDefaults } from '@/data/creatives';
  import Btn from '@/components/Btn.vue';
  import type { Locale, Creative, CreativeCategory, CreativeDetail, CtaButton } from '@/types';

  const route = useRoute();
  const { t } = useI18n<{ message: string }, Locale>();

  // URL パラメータから作品データを取得
  const category = computed<string>(() => route.params.category as string);
  const id = computed<string>(() => route.params.id as string);

  const creative = computed<Creative | null>(() => {
    const categoryData = creativesData[category.value as CreativeCategory];
    if (!categoryData) return null;
    return categoryData.find(item => item.id === id.value) || null;
  });

  // Detail データの構造型定義
  interface DetailData {
    images: string[];
    descriptionMarkdown: string;
    youtube: { mobile: string; desktop: string } | null;
    productionYear: string;
    credits: string[];
    cta: CtaButton[];
  }

  // Detail データの取得（fallback 対応）
  const detailData = computed<DetailData>(() => {
    if (!creative.value) return detailDefaults as DetailData;

    const detail: Partial<CreativeDetail> = creative.value.detail || {};

    return {
      images: detail.images && detail.images.length > 0
        ? detail.images
        : [creative.value.thumbnail],
      descriptionMarkdown: detail.descriptionMarkdown || creative.value.description,
      youtube: detail.youtube || null,
      productionYear: detail.productionYear || '',
      credits: detail.credits || [],
      cta: detail.cta && detail.cta.length > 0
        ? detail.cta
        : [{
            href: creative.value.url,
            target: '_blank',
            icon: ['fas', 'arrow-up-right-from-square'],
            text: 'creatives.common.viewProject',
            subText: '',
            variant: 'primary'
          }]
    };
  });

  // YouTube セクションの表示判定
  const hasYoutube = computed<boolean>(() => {
    return detailData.value.youtube !== null;
  });

  // デスクトップ判定
  const isDesktop: Ref<boolean> = ref(false);
  let mediaQueryList: MediaQueryList | null = null;

  const handleMediaQueryChange = (e: MediaQueryListEvent): void => {
    isDesktop.value = e.matches;
  };

  onMounted(async () => {
    try {
      mediaQueryList = window.matchMedia('(min-width: 968px)');
      isDesktop.value = mediaQueryList.matches;
      mediaQueryList.addEventListener('change', handleMediaQueryChange);

      // GSAP アニメーション（Contact.vueパターン踏襲）
      const { gsap } = await import('gsap');

      const tl = gsap.timeline();

      // 1. 戻るボタン（最優先で表示）
      tl.fromTo('.back-link',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );

      // 2. タイトル
      tl.fromTo('.creative-title',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      );

      // 3. タグ
      tl.fromTo('.creative-tags',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.25'
      );

      // 4. 左カラム（画像ギャラリー）
      tl.fromTo('.left-column',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      );

      // 5. 右カラム（説明文・メタ情報）
      tl.fromTo('.right-column > *',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out'
        },
        '-=0.3'
      );

      // 6. CTAセクション（固定位置）
      tl.fromTo('.cta-section',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

    } catch (error) {
      console.error('Animation or media query error:', error);
    }
  });

  onBeforeUnmount(() => {
    if (mediaQueryList) {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    }
  });

  // Markdown レンダリング
  const renderedDescription = computed<string>(() => {
    if (!creative.value) return '';
    const markdownText = t(detailData.value.descriptionMarkdown);
    return marked(markdownText, { breaks: true }) as string;
  });

  // クレジット情報のパース用の型定義
  interface ParsedCredit {
    label: string;
    value: string;
  }

  // クレジット情報のパース
  const parsedCredits = computed<ParsedCredit[]>(() => {
    if (!detailData.value.credits || detailData.value.credits.length === 0) {
      return [];
    }

    return detailData.value.credits
      .map((credit): ParsedCredit | null => {
        const translatedCredit = t(credit);
        if (!translatedCredit) return null;

        const splitIndex = translatedCredit.indexOf(':') !== -1
          ? translatedCredit.indexOf(':')
          : translatedCredit.indexOf('：');

        if (splitIndex === -1) {
          return { label: '', value: String(translatedCredit).trim() };
        }

        const label = translatedCredit.slice(0, splitIndex).trim();
        const value = translatedCredit.slice(splitIndex + 1).trim();
        return { label, value };
      })
      .filter((credit): credit is ParsedCredit => credit !== null);
  });

  // SEO メタタグ設定
  useHead({
    title: computed(() =>
      creative.value
        ? `${t(creative.value.title)} | MANAPURAZA.COM`
        : 'Not Found | MANAPURAZA.COM'
    ),
    meta: [
      {
        name: 'description',
        content: computed(() =>
          creative.value
            ? t(creative.value.description)
            : t('creatives.common.notFound')
        )
      },
      {
        property: 'og:title',
        content: computed(() =>
          creative.value
            ? `${t(creative.value.title)} | MANAPURAZA.COM`
            : 'Not Found | MANAPURAZA.COM'
        )
      },
      {
        property: 'og:description',
        content: computed(() =>
          creative.value
            ? t(creative.value.description)
            : t('creatives.common.notFound')
        )
      },
      {
        property: 'og:url',
        content: computed(() =>
          `https://manapuraza.com/creatives/${category.value}/${id.value}`
        )
      },
      {
        property: 'og:image',
        content: computed(() =>
          creative.value
            ? creative.value.thumbnail
            : 'https://manapuraza.com/ogp.jpg'
        )
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: computed(() =>
          `https://manapuraza.com/creatives/${category.value}/${id.value}`
        )
      }
    ]
  });
</script>

<style scoped>
  .creative-detail {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100%;
    color: var(--color-text, #111);
    display: flex;
    flex-direction: column;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #2c2c2c;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 1.5rem;
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }

  .back-link:hover {
    color: #555;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  .creative-title {
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 0;
    letter-spacing: 0;
    color: var(--color-text, #111);
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
    align-items: start;
  }

  .left-column {
    /* 画像・動画エリア */
  }

  .right-column {
    /* 説明文・メタ情報エリア */
  }

  .image-gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .youtube-section {
    margin-bottom: 2rem;
  }

  .youtube-section h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #222;
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio */
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .creative-description {
    font-size: 1.05rem;
    line-height: 2;
    margin-bottom: 2rem;
    color: var(--color-text, #111);
  }

  .creative-description :deep(h2) {
    font-size: 1.35rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    color: var(--color-text, #111);
  }

  .creative-description :deep(h3) {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1.5rem 0 0.8rem;
    color: #111;
  }

  .creative-description :deep(p) {
    margin-bottom: 1.2rem;
  }

  .creative-description :deep(ul),
  .creative-description :deep(ol) {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  .creative-description :deep(li) {
    margin-bottom: 0.5rem;
  }

  .creative-description :deep(strong) {
    font-weight: 700;
    color: var(--color-text, #111);
  }

  .creative-description :deep(code) {
    background: rgba(240, 211, 0, 0.15);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }

  .production-year {
    font-size: 0.95rem;
    margin-bottom: 2rem;
    color: #555;
    font-weight: 500;
  }

  .credits-section {
    margin-bottom: 2rem;
  }

  .credits-section h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #222;
  }

  .credits-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    column-gap: 1rem;
    row-gap: 0.75rem;
    margin: 0;
  }

  .credit-label {
    font-size: 0.9rem;
    color: #777;
    font-weight: 600;
    text-align: left;
  }

  .credit-value {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }

  .creative-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .creative-tag {
    display: inline-block;
    padding: 0.4rem 0.9rem;
    background: rgba(240, 211, 0, 0.12);
    border: 1px solid rgba(240, 211, 0, 0.3);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #444;
    transition: all 0.2s ease;
  }

  .creative-tag:hover {
    background: rgba(240, 211, 0, 0.2);
    border-color: rgba(240, 211, 0, 0.45);
    transform: translateY(-1px);
  }

  .cta-section {
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .cta-section > * {
    flex: 1;
    min-width: 200px;
  }

  .not-found {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 1rem;
    text-align: center;
  }

  .not-found h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #333;
  }

  @media screen and (max-width: 768px) {
    /* Phase 1: 戻るボタンの固定配置（アイコンのみ、高さをCTAと揃える） */
    .back-link {
      position: fixed;
      top: 1rem;
      left: 1.25rem;
      z-index: 110;  /* CTA (z-index: 100) より上層 */

      /* アイコンのみ表示、高さを CTA と揃える */
      width: 2.75rem;
      height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      font-size: 0; /* テキストを非表示 */

      /* 視認性確保 */
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 50%; /* 円形 */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

      /* ホバー時の微調整 */
      transition: all 0.2s ease;
    }

    .back-link svg {
      font-size: 1.2rem; /* アイコンサイズを明示的に指定 */
      /* Font Awesome arrow-left アイコンの視覚的中央配置 */
      transform: translateX(2px);
    }

    .back-link:hover {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }

    /* Phase 3: コンテンツ上部パディング調整 */
    .creative-detail {
      padding-top: 5rem;  /* 戻るボタン + CTA 領域を十分に確保 */
      padding-bottom: 2rem; /* 下部固定なし → パディング削減 */
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .creative-title {
      font-size: 1.4rem;
      margin-top: 0;      /* マージン削除で上に配置 */
      padding-right: 5rem;   /* 右上の CTA 領域を避ける */
      word-break: break-word;
    }

    .creative-tags {
      margin-bottom: 1.5rem;
    }

    .image-gallery {
      grid-template-columns: 1fr;
    }

    .credits-grid {
      grid-template-columns: 1fr;
    }

    .credit-label {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 480px) {
    /* Phase 4: 超小型端末サイズ縮小 */
    .back-link {
      top: 0.75rem;
      left: 0.75rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%; /* 円形維持 */
    }

    .back-link svg {
      font-size: 1.1rem; /* アイコンサイズを縮小 */
      /* 視覚的中央配置を維持 */
      transform: translateX(2px);
    }

    .cta-section > * {
      padding: 0.6rem 1rem;  /* CTA ボタンサイズ縮小 */
      font-size: 0.9rem;
    }

    .creative-detail {
      padding: 1.5rem 1rem 5rem 1rem;
    }

    .creative-title {
      font-size: 1.25rem;
    }

    .creative-tags {
      margin-bottom: 1rem;
      gap: 0.5rem;
    }

    .creative-tag {
      font-size: 0.7rem;
      padding: 0.3rem 0.7rem;
    }

    .creative-description {
      font-size: 1rem;
      line-height: 1.8;
    }
  }
</style>
