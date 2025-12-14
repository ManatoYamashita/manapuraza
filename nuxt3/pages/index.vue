<template>
  <div id="main">
    <!-- 中央ロゴ（プログレッシブローディング） -->
    <a href="/" aria-label="ホームページ" class="home-logo">
      <img
        :fetchpriority="logoQuality === 'high' ? 'high' : 'low'"
        :src="currentLogoSrc"
        alt="ホームページに戻る"
        draggable="false"
        id="center-logo"
        :class="['route-home', logoTransitionClass]"
        :style="combinedStyleObject"
        @load="onLogoLoad"
      />
    </a>

    <!-- ホームページ専用メニュー項目（中央ロゴの下） -->
    <ClientOnly>
      <transition name="home-menu-fade">
        <nav class="home-nav-links">
          <NuxtLink to="/about" class="home-nav-link">{{ $t('navbar.menu.about') }}</NuxtLink>
          <NuxtLink to="/creatives" class="home-nav-link">{{ $t('navbar.menu.creatives') }}</NuxtLink>
          <NuxtLink to="/contact" class="home-nav-link">{{ $t('navbar.menu.contact') }}</NuxtLink>

          <!-- 言語切り替えドロップダウン -->
          <div class="home-lang-dropdown" ref="dropdownRef">
            <button
              class="home-lang-dropdown-toggle"
              @click="toggleDropdown"
              :aria-expanded="isDropdownOpen"
              :aria-label="$t('navbar.selectLanguage')"
            >
              <fa :icon="['fas','globe']" class="globe-icon" />
              <span class="current-lang-label">{{ currentLanguageLabel }}</span>
              <fa
                :icon="['fas','chevron-down']"
                class="chevron-icon"
                :class="{ 'rotated': isDropdownOpen }"
              />
            </button>

            <transition name="dropdown-slide">
              <ul class="home-lang-dropdown-menu" v-show="isDropdownOpen">
                <li v-for="lang in languages" :key="lang.code">
                  <button
                    @click="selectLanguage(lang.code)"
                    :class="{ 'active': locale === lang.code }"
                    class="home-lang-option-btn"
                  >
                    <fa
                      :icon="['fas','check']"
                      class="check-icon"
                      v-show="locale === lang.code"
                    />
                    <span>{{ lang.label }}</span>
                  </button>
                </li>
              </ul>
            </transition>
          </div>
        </nav>
      </transition>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// 言語切り替えドロップダウン管理
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const languages = [
  { code: 'ja' as const, label: '日本語' },
  { code: 'en' as const, label: 'English' }
];

const currentLanguageLabel = computed(() => {
  const current = languages.find(lang => lang.code === locale.value);
  return current ? current.label : '日本語';
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (langCode: 'ja' | 'en') => {
  if (locale.value !== langCode) {
    locale.value = langCode;
  }
  isDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};

// プログレッシブローディング用のロゴ管理
const logoQuality = ref<'low' | 'high'>('low');
const isLogoTransitioning = ref(false);
const logoLoadAttempted = ref(false);

// ロゴソースの計算プロパティ（Nuxt 3: public/配下のファイル）
const currentLogoSrc = computed(() => {
  return logoQuality.value === 'low'
    ? '/logo-low.webp'
    : '/logo.webp';
});

// ロゴ遷移用クラス
const logoTransitionClass = computed(() => {
  return isLogoTransitioning.value ? 'logo-transitioning' : '';
});

// ロゴのスタイルオブジェクト（常にホームページなので常に表示）
const styleObject = computed(() => {
  return {
    opacity: '1',
    transition: 'all .4s ease-in-out',
  };
});

// ロゴのスタイルオブジェクト（遷移効果を含む）
const combinedStyleObject = computed(() => {
  const baseStyle = styleObject.value;
  const transitionStyle = isLogoTransitioning.value ? {
    opacity: '0.7',
    transform: 'scale(1.02)',
  } : {};

  return {
    ...baseStyle,
    ...transitionStyle,
    transition: `${baseStyle.transition || 'all .4s ease-in-out'}, opacity .3s ease-in-out, transform .3s ease-in-out`,
  };
});

// 高画質版ロゴの遅延読み込み
const loadHighQualityLogo = () => {
  if (logoLoadAttempted.value) return;

  logoLoadAttempted.value = true;
  const highQualityImg = new Image();

  highQualityImg.onload = () => {
    // 遅延してスムーズな遷移を実現
    setTimeout(() => {
      isLogoTransitioning.value = true;
      setTimeout(() => {
        logoQuality.value = 'high';
        setTimeout(() => {
          isLogoTransitioning.value = false;
        }, 300);
      }, 100);
    }, 200);
  };

  highQualityImg.onerror = () => {
    console.warn('High quality logo failed to load');
  };

  highQualityImg.src = '/logo.webp';
};

// ロゴ読み込み完了ハンドラー
const onLogoLoad = () => {
  // 初期の低画質ロゴが読み込まれた後、高画質版を遅延読み込み
  if (logoQuality.value === 'low' && !logoLoadAttempted.value) {
    const schedule = window.requestIdleCallback || ((cb: IdleRequestCallback) => setTimeout(cb, 100));
    schedule(() => {
      loadHighQualityLogo();
    });
  }
};

onMounted(() => {
  // LCP改善: 高品質版ロゴのプリロードヒントを追加
  if (process.client) {
    const addLogoPreload = () => {
      const logoPreloadLink = document.createElement('link');
      logoPreloadLink.rel = 'preload';
      logoPreloadLink.href = '/logo.webp';
      logoPreloadLink.as = 'image';
      logoPreloadLink.type = 'image/webp';
      logoPreloadLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(logoPreloadLink);
    };

    // プリロードを即座に実行（LCP最適化）
    addLogoPreload();

    // 言語切り替えドロップダウンのイベントリスナー
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
  }
});

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
  }
});

// SEO設定
useHead({
  title: computed(() =>
    locale.value === 'ja'
      ? 'MANAPURAZA.COM - 山下マナト Webポートフォリオ'
      : 'MANAPURAZA.COM - Manato Yamashita Web Portfolio'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        locale.value === 'ja'
          ? '山下真和都（山下マナト）の公式ポートフォリオサイト。世田谷区公式アニメ「新BOPへようこそ！」の監督、Web開発、イラスト制作を行う東京都市大学メディア情報学部メディア情報学科の学生です。'
          : 'Official portfolio website of Manato Yamashita (山下真和都). Director of Setagaya Ward official anime, web developer, and illustrator studying at Tokyo City University Faculty of Media and Information.'
      )
    },
    {
      name: 'keywords',
      content: computed(() =>
        locale.value === 'ja'
          ? '山下真和都, 山下マナト, ポートフォリオ, 世田谷区アニメ, 新BOPへようこそ, Web開発, イラスト'
          : 'Manato Yamashita, Portfolio, Setagaya Animation, Web Development, Illustration'
      )
    },
    {
      property: 'og:title',
      content: computed(() =>
        locale.value === 'ja'
          ? 'MANAPURAZA.COM - 山下マナト Webポートフォリオ'
          : 'MANAPURAZA.COM - Manato Yamashita Web Portfolio'
      )
    },
    {
      property: 'og:description',
      content: computed(() =>
        locale.value === 'ja'
          ? '山下真和都の公式ポートフォリオサイト。アニメーション監督、Web開発、イラスト制作。'
          : 'Official portfolio of Manato Yamashita. Animation director, web developer, illustrator.'
      )
    },
    {
      property: 'og:url',
      content: 'https://manapuraza.com'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: 'https://manapuraza.com/ogp.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: computed(() =>
        locale.value === 'ja'
          ? 'MANAPURAZA.COM - 山下マナト'
          : 'MANAPURAZA.COM - Manato Yamashita'
      )
    },
    {
      name: 'twitter:description',
      content: computed(() =>
        locale.value === 'ja'
          ? 'アニメーション監督、Web開発、イラスト制作を行う学生のポートフォリオ。'
          : 'Student portfolio: Animation director, web developer, illustrator.'
      )
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://manapuraza.com'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
        "url": "https://manapuraza.com",
        "jobTitle": locale.value === 'ja' ? "学生・クリエイター" : "Student & Creator",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": locale.value === 'ja' ? "東京都市大学" : "Tokyo City University"
        },
        "sameAs": [
          "https://github.com/ManatoYamashita"
        ]
      }))
    }
  ]
});
</script>

<style scoped>
  #main {
    position: relative;
    width: 100%;
    height: 100%;
    display: contents;
  }
  .home-logo {
    pointer-events: all;
    z-index: 1;
    overflow-y: hidden;
  }
  #center-logo {
    position: absolute;
    top: 43%;
    left: 50%;
    width: 500px;
    height: auto;
    transform: translate(-50%, -50%);
    transition: all .5s ease-in-out;
  }

  /* プログレッシブローディング遷移効果 */
  .logo-transitioning {
    filter: brightness(1.1) saturate(1.05);
  }
  .route-home {
    opacity: 1;
    transition: all .4s ease-in-out;
    animation-delay: 1s;
  }
  .route-other {
    opacity: 0;
    filter: blur(2rem);
    transition: all .4s ease-in-out;
    animation-delay: 1s;
  }

  /* ホームページ専用メニュー項目（中央ロゴの下） */
  .home-nav-links {
    position: absolute;
    top: 55%; /* 中央ロゴ（43%）の下に配置 */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    flex-wrap: nowrap; /* 明示的にデフォルト設定 */
    gap: 3rem;
    max-width: 90vw; /* 横幅制限 */
    z-index: 15;
    pointer-events: auto;
  }

  .home-nav-link {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .home-nav-link:hover {
    color: #d7a800;
    text-shadow: #f0d300 0 0px 1rem;
    animation: glow 0.3s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: #f0d300 0 0px 1rem;
    }
    to {
      text-shadow: #f0d300 0 0px 1.5rem;
    }
  }

  /* メニュー項目間の縦線（最後のリンクにも適用） */
  .home-nav-link::after {
    content: "|";
    position: absolute;
    right: -1.5rem;
    color: #666;
    font-weight: normal;
    user-select: none;
  }

  /* 言語切り替えドロップダウン（ホームページ専用） */
  .home-lang-dropdown {
    position: relative;
    z-index: 200;
    margin-left: 1.5rem; /* 縦線との間隔 */
  }

  .home-lang-dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid #111; /* 1pxボーダー */
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    color: #111;
    font-size: 1rem;
    white-space: nowrap;
  }

  .home-lang-dropdown-toggle:hover {
    background: #f0d300;
    border-color: #d7a800;
    transform: translateY(-2px);
  }

  .home-lang-dropdown .globe-icon {
    font-size: 1.2rem;
  }

  .home-lang-dropdown .current-lang-label {
    font-size: 1rem;
  }

  .home-lang-dropdown .chevron-icon {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }

  .home-lang-dropdown .chevron-icon.rotated {
    transform: rotate(180deg);
  }

  .home-lang-dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 150px;
    background: #fff;
    border: 1px solid #111; /* 1pxボーダー */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 0;
    z-index: 200;
    list-style: none;
    margin: 0;
  }

  .home-lang-option-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s ease;
    font-size: 1rem;
    color: #111;
  }

  .home-lang-option-btn:hover {
    background: #f0d300;
  }

  .home-lang-option-btn.active {
    font-weight: bold;
    background: #fef9e0;
  }

  .home-lang-dropdown .check-icon {
    font-size: 0.9rem;
    color: #d7a800;
    flex-shrink: 0;
    width: 1rem;
  }

  /* ドロップダウンアニメーション */
  .dropdown-slide-enter-active,
  .dropdown-slide-leave-active {
    transition: all 0.25s ease;
    transform-origin: top center;
  }

  .dropdown-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.8);
  }

  .dropdown-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.8);
  }

  /* ホームメニューフェードアニメーション */
  .home-menu-fade-enter-active,
  .home-menu-fade-leave-active {
    transition: opacity 0.4s ease, filter 0.4s ease;
  }

  .home-menu-fade-enter-from {
    opacity: 0;
  }

  .home-menu-fade-leave-to {
    opacity: 0;
    filter: blur(2rem);
  }

  /* 初期表示時のアニメーション（ロゴと同期） */
  .home-nav-links {
    opacity: 0;
    animation: homeMenuFadeIn 0.4s ease-in-out 1s forwards;
  }

  @keyframes homeMenuFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* レスポンシブ対応 - 3段階ブレークポイント */

  /* Desktop: 769px以上 - ホームメニュー表示（一行レイアウト） */
  @media screen and (min-width: 769px) {
    .home-nav-links {
      display: flex; /* 常に表示、改行しない */
      flex-wrap: nowrap;
      gap: 3rem;
      top: 55%;
    }
  }

  /* Tablet: 541px - 768px - メニューリンク一行 + 言語ボタン中央配置 */
  @media screen and (max-width: 768px) and (min-width: 541px) {
    .home-nav-links {
      top: 58%;
      flex-wrap: wrap; /* 二段表示（言語ボタンのみ） */
      gap: 0.5rem; /* リンク間隔をさらに削減 */
      row-gap: 1.5rem; /* 行間を拡大 */
      max-width: 95vw; /* 最大幅を拡大 */
      justify-content: center; /* センタリング */
    }

    .home-nav-link {
      font-size: 1rem; /* フォントサイズをさらに削減 */
      padding: 0.3rem 0.6rem; /* パディングをさらに削減 */
      flex-shrink: 0; /* 縮小禁止 */
      white-space: nowrap; /* 改行禁止 */
    }

    /* 全ての縦線を削除（一行表示のため） */
    .home-nav-link::after {
      content: none;
    }

    /* 言語ボタンを二段目の中央配置 */
    .home-lang-dropdown {
      margin-left: 0; /* リセット */
      margin-top: 0;
      flex-basis: 100%; /* 強制的に新しい行へ */
      width: 100%;
      display: flex;
      justify-content: center; /* 水平中央配置 */
    }
  }

  /* Mobile: 540px以下 - 完全非表示 */
  @media screen and (max-width: 540px) {
    .home-nav-links {
      display: none;
    }

    #center-logo {
      top: 40%;
      width: 60%;
    }
  }

  /* 言語ドロップダウン中央配置（541-768px） */
  @media screen and (max-width: 768px) and (min-width: 541px) {
    .home-lang-dropdown-menu {
      right: auto;
      left: 50%;
      transform: translateX(-50%); /* ドロップダウンを中央配置 */
    }
  }
</style>
