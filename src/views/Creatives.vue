<template>
  <div class="creatives">
    <CreativesHero @filter-change="handleFilterChange" />

    <main>
      <div id="main-contents">

        <!-- Animation Section -->
        <section v-if="activeFilter === 'all' || activeFilter === 'animation'" id="animation">
          <h2>Animation</h2>
          <p>{{ $t('creatives.animation.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in animationCreatives"
              :key="creative.id"
              :mode="'Animation'"
              :category="'animation'"
              :id="creative.id"
              :title="creative.title"
              :description="creative.description"
              :thumbnail="creative.thumbnail"
              :index="index"
              :tags="creative.tags"
              :youtubeUrl="creative.detail?.youtube?.desktop || null"
            />
          </ul>
        </section>

        <!-- Development Section -->
        <section v-if="activeFilter === 'all' || activeFilter === 'development'" id="development">
          <h2>Development</h2>
          <p>{{ $t('creatives.dev.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in randomizedDevelopment"
              :key="creative.id"
              :category="'development'"
              :id="creative.id"
              :title="creative.title"
              :description="creative.description"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Development'"
              :tags="creative.tags"
            />
          </ul>
        </section>

        <!-- Illustration Section -->
        <section v-if="activeFilter === 'all' || activeFilter === 'illustration'" id="illustration">
          <h2>Illustration</h2>
          <p>{{ $t('creatives.illustration.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in illustrationCreatives"
              :key="creative.id"
              :category="'illustration'"
              :id="creative.id"
              :title="creative.title"
              :description="creative.description"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Illustration'"
              :tags="creative.tags"
            />
          </ul>
        </section>

        <!-- Video Section -->
        <section v-if="activeFilter === 'all' || activeFilter === 'video'" id="video">
          <h2>Video</h2>
          <p>{{ $t('creatives.video.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in videoCreatives"
              :key="creative.id"
              :category="'video'"
              :id="creative.id"
              :title="creative.title"
              :description="creative.description"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Video'"
              :tags="creative.tags"
            />
          </ul>
        </section>

        <!-- Design Section -->
        <section v-if="activeFilter === 'all' || activeFilter === 'design'" id="design">
          <h2>Design</h2>
          <p>{{ $t('creatives.design.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in designCreatives"
              :key="creative.id"
              :category="'design'"
              :id="creative.id"
              :title="creative.title"
              :description="creative.description"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Graphic'"
              :tags="creative.tags"
            />
          </ul>
        </section>
      </div>

      <a href="https://でじこんちゃん.net" aria-label="でじこんちゃんのサイトへ">
        <div id="image-content">
          <img
            id="dc-chan"
            fetchpriority="low"
            loading="lazy"
            src="@/assets/dcchan.webp"
            alt="dc-chan"
          />
        </div>
      </a>
    </main>
  </div>
</template>

<script setup lang="ts">
import CreativeItem from '@/components/CreativeItem.vue';
import CreativesHero from '@/components/CreativesHero.vue';
import { useCreativesAPI } from '@/composables/useCreativesAPI';
import { computed, ref, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import type { Locale, CreativeCategory, CMSCreative } from '@/types';

const { locale } = useI18n<{ message: string }, Locale>();

// microCMS API統合
const { fetchCreatives, getCreativesByCategory } = useCreativesAPI();

// 各カテゴリの作品を取得
const animationCreatives = computed(() =>
  getCreativesByCategory('animation', locale.value as 'ja' | 'en').value
);
const developmentCreatives = computed(() =>
  getCreativesByCategory('development', locale.value as 'ja' | 'en').value
);
const illustrationCreatives = computed(() =>
  getCreativesByCategory('illustration', locale.value as 'ja' | 'en').value
);
const videoCreatives = computed(() =>
  getCreativesByCategory('video', locale.value as 'ja' | 'en').value
);
const designCreatives = computed(() =>
  getCreativesByCategory('design', locale.value as 'ja' | 'en').value
);

// データ取得
onMounted(async () => {
  try {
    await fetchCreatives();
  } catch (err) {
    console.error('Failed to fetch creatives:', err);
  }
});

// フィルター状態管理
const activeFilter = ref<'all' | CreativeCategory>('all');

// フィルター変更ハンドラー
const handleFilterChange = (category: 'all' | CreativeCategory): void => {
  activeFilter.value = category;

  // DOM更新完了後にスクロール実行
  nextTick(() => {
    if (category === 'all') {
      // 'All'の場合はページトップにスクロール
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // 特定カテゴリーの場合は該当セクションにスクロール
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'  // セクションの上端を表示エリアの上端に配置
        });
      }
    }
  });
};

  // SEOメタタグ設定
  useHead({
    title: computed(() => 
      locale.value === 'ja' 
        ? 'Creatives - 作品集 | YAMASHITAMANA.TO'
        : 'Creatives - Portfolio | YAMASHITAMANA.TO'
    ),
    meta: [
      {
        name: 'description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの学生時代の作品集。世田谷区公式アニメ「新BOPへようこそ！」の監督作品、Web開発プロジェクト、イラストレーション、動画制作など大学時代のクリエイティブ作品を紹介。'
            : 'Portfolio of Manato Yamashita. Director of Setagaya Ward official anime, web development projects, illustrations, video production and creative works from university.'
        )
      },
      {
        name: 'keywords',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都, 山下マナト, ポートフォリオ, 作品集, 世田谷区アニメ, 新BOPへようこそ, Web開発, イラスト, 動画制作'
            : 'Manato Yamashita, Portfolio, Setagaya Animation, Web Development, Illustration, Video Production'
        )
      },
      {
        property: 'og:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Creatives - 作品集 | YAMASHITAMANA.TO'
            : 'Creatives - Portfolio | YAMASHITAMANA.TO'
        )
      },
      {
        property: 'og:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの作品集。アニメーション監督作品、Web開発、イラスト、動画制作など幅広いクリエイティブ作品を掲載。'
            : 'Portfolio of Manato Yamashita featuring animation direction, web development, illustrations and video production.'
        )
      },
      {
        property: 'og:url',
        content: 'https://yamashitamana.to/creatives'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: 'https://yamashitamana.to/ogp.webp'
      },
      {
        name: 'twitter:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Creatives - 作品集'
            : 'Creatives - Portfolio'
        )
      },
      {
        name: 'twitter:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの作品集。世田谷区公式アニメ監督作品、Web開発、イラスト、動画制作。'
            : 'Portfolio of Manato Yamashita. Animation, web development, illustrations and more.'
        )
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://yamashitamana.to/creatives'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": locale.value === 'ja' ? "作品集" : "Portfolio",
          "url": "https://yamashitamana.to/creatives",
          "description": locale.value === 'ja' 
            ? "山下マナトのクリエイティブ作品集"
            : "Creative portfolio of Manato Yamashita",
          "creator": {
            "@type": "Person",
            "name": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
            "url": "https://yamashitamana.to/about"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "position": 1,
                "name": locale.value === 'ja' 
                  ? "世田谷区オリジナルアニメ「新BOPへようこそ！」"
                  : "Setagaya Ward Original Anime 'Welcome to Shin-BOP!'",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
                "url": "https://tcu-animation.jp"
              },
              {
                "@type": "WebSite",
                "position": 2,
                "name": "Web Development Projects",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita"
              },
              {
                "@type": "VisualArtwork",
                "position": 3,
                "name": locale.value === 'ja' ? "イラストレーション作品" : "Illustration Works",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita"
              }
            ]
          }
        }))
      }
    ]
  });

  // Fisher-Yatesアルゴリズムによる真のランダムシャッフル
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i]!, shuffled[j]!] = [shuffled[j]!, shuffled[i]!];
    }
    return shuffled;
  };

  // ランダムに並び替えられたプログラミング作品のリスト
  const randomizedDevelopment = computed<CMSCreative[]>(() => {
    const items = developmentCreatives.value;
    if (!items || !Array.isArray(items)) {
      return [];
    }
    return shuffleArray(items);
  });


</script>

<style scoped>
  .creatives {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
    scroll-behavior: smooth;
  }
  .creatives p {
    font-size: 1rem;
  }
  
  /* 各セクションのスタイル */
  section {
    scroll-margin-top: 2rem;
    margin-bottom: 4rem;
  }

  section h2 {
    font-size: 1.7rem;
    margin: 3rem 0 1.5rem 0; /* 下マージン微増 */
  }


  /* 既存のスタイル */
  #main-contents {
    width: 100%;
  }
  #image-content {
    width: 100%;
    padding: 1rem;
    text-align: right;
  }
  #dc-chan {
    width: 25%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: none;
    pointer-events: none;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #000;
    text-shadow: 0 0 8px rgba(240, 211, 0, 0.7);
    text-decoration: underline;
    text-decoration-color: rgba(240, 211, 0, 0.8);
    text-underline-offset: 0.2em;
  }

  /* Animation, Illustrationセクションの1列表示 */
  #animation ul,
  #illustration ul {
    grid-template-columns: 1fr;
  }

  /* Animationセクションのサイズ縮小（50%程度） */
  #animation ul {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* タブレット表示用 */
  @media screen and (max-width: 768px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }

    /* アニメーションセクションのサイズ調整 */
    #animation ul {
      max-width: 500px;
      grid-template-columns: 1fr;
    }
  }

  /* モバイル表示用 */
  @media screen and (max-width: 480px) {
    ul {
      grid-template-columns: 1fr;
    }

    /* アニメーションセクションは全幅表示 */
    #animation ul {
      max-width: 100%;
    }
  }
</style>
