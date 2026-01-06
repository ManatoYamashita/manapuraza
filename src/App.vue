<template>
  <div id="main">
    <!-- ナビゲーション視覚フィードバック用プログレスバー -->
    <div id="navigation-progress" class="progress-bar">
      <div class="progress-fill"></div>
    </div>

    <!-- Menu.vueをヘッダーとして統合 -->
    <header id="navbar">
      <Menu />
    </header>

    <a href="https://manapuraza.com" aria-current="page" class="home-logo">
      <img 
        :fetchpriority="logoQuality === 'high' ? 'high' : 'low'" 
        :src="currentLogoSrc" 
        alt="ホームページに戻る" 
        draggable="false" 
        id="center-logo" 
        :class="[className, logoTransitionClass]" 
        :style="combinedStyleObject" 
        @load="onLogoLoad"
      />
    </a>
    
    <!-- ホームページ専用メニュー項目（中央ロゴの下） -->
    <transition name="home-menu-fade">
      <nav class="home-nav-links" v-show="isHomePage">
        <RouterLink to="/about" class="home-nav-link">{{ $t('navbar.menu.about') }}</RouterLink>
        <RouterLink to="/creatives" class="home-nav-link">{{ $t('navbar.menu.creatives') }}</RouterLink>
        <RouterLink to="/contact" class="home-nav-link">{{ $t('navbar.menu.contact') }}</RouterLink>

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
  
    <div class="app glass" :class="{'hidden': isHomePage}" :style="appStyles">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <Suspense>
          <template #default>
            <transition name="slide" mode="out-in">
              <component :is="Component" id="scrollable-aria" />
            </transition>
          </template>
          <template #fallback>
            <div class="loading-placeholder">Loading...</div>
          </template>
        </Suspense>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { watch, onMounted, onUnmounted, computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import Menu from '@/components/Menu.vue';
  import type { Locale } from '@/types';

  const route = useRoute();
  const router = useRouter();
  const { locale } = useI18n<{ message: string }, Locale>();
  const isHomePage = ref<boolean>(true);

  // 言語切り替えドロップダウン管理
  const isDropdownOpen = ref<boolean>(false);
  const dropdownRef = ref<HTMLElement | null>(null);

  interface Language {
    code: Locale;
    label: string;
  }

  const languages: Language[] = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' }
  ];

  const currentLanguageLabel = computed<string>(() => {
    const current = languages.find(lang => lang.code === locale.value);
    return current ? current.label : '日本語';
  });

  const toggleDropdown = (): void => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  const selectLanguage = (langCode: Locale): void => {
    if (locale.value !== langCode) {
      locale.value = langCode;
    }
    isDropdownOpen.value = false;
  };

  const handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Node;
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
      isDropdownOpen.value = false;
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && isDropdownOpen.value) {
      isDropdownOpen.value = false;
    }
  };

  // プログレッシブローディング用のロゴ管理
  type LogoQuality = 'low' | 'high';
  const logoQuality = ref<LogoQuality>('low');
  const isLogoTransitioning = ref<boolean>(false);
  const logoLoadAttempted = ref<boolean>(false);

  // ロゴソースの計算プロパティ
  const currentLogoSrc = computed<string>(() => {
    return logoQuality.value === 'low'
      ? new URL('@/assets/logo-low.webp', import.meta.url).href
      : new URL('@/assets/logo.webp', import.meta.url).href;
  });

  // ロゴ遷移用クラス
  const logoTransitionClass = computed<string>(() => {
    return isLogoTransitioning.value ? 'logo-transitioning' : '';
  });

  const checkRouterReady = async (): Promise<void> => {
    await router.isReady();
    updateHomePageState();
  };

  interface StyleObject extends Partial<Record<string, string>> {
    top?: string;
    opacity?: string;
    pointerEvents?: 'auto' | 'none' | 'all';
    filter?: string;
    transition?: string;
    transform?: string;
  }

  // リアクティブなスタイル計算（直接DOM操作を排除）
  const appStyles = computed<StyleObject>(() => {
    if (isHomePage.value) {
      return {
        top: '20vh',
        opacity: '0',
        pointerEvents: 'none'
      };
    } else {
      return {
        top: '0',
        opacity: '1',
        pointerEvents: 'all'
      };
    }
  });

  const updateHomePageState = (): void => {
    isHomePage.value = route.name === 'home';
    // 直接DOM操作を削除 - リアクティブスタイルが自動更新
  };

  watch(route, () => {
    updateHomePageState();
  });

  // 高画質版ロゴの遅延読み込み
  const loadHighQualityLogo = (): void => {
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
    };

    highQualityImg.src = new URL('@/assets/logo.webp', import.meta.url).href;
  };

  // ロゴ読み込み完了ハンドラー
  const onLogoLoad = (): void => {
    // 初期の低画質ロゴが読み込まれた後、高画質版を遅延読み込み
    if (logoQuality.value === 'low' && !logoLoadAttempted.value) {
      const schedule = window.requestIdleCallback || ((cb: IdleRequestCallback) => setTimeout(cb, 100));
      schedule(() => {
        loadHighQualityLogo();
      });
    }
  };

  onMounted(() => {
    checkRouterReady();

    // LCP改善: 高品質版ロゴのプリロードヒントを追加
    const addLogoPreload = (): void => {
      const logoPreloadLink = document.createElement('link');
      logoPreloadLink.rel = 'preload';
      logoPreloadLink.href = new URL('@/assets/logo.webp', import.meta.url).href;
      logoPreloadLink.as = 'image';
      logoPreloadLink.type = 'image/webp';
      logoPreloadLink.fetchPriority = 'high';
      document.head.appendChild(logoPreloadLink);
    };

    // プリロードを即座に実行（LCP最適化）
    addLogoPreload();

    // 言語切り替えドロップダウンのイベントリスナー
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
  });

  const path = computed<string>(() => route.path);

  const className = computed<string>(() => {
    if (path.value === '/') {
      return 'route-home';
    } else {
      return 'route-other';
    }
  });

  const styleObject = computed<StyleObject>(() => {
    if (path.value === '/') {
      return {
        opacity: '1',
        transition: 'all .4s ease-in-out',
      };
    } else {
      return {
        opacity: '0',
        filter: 'blur(2rem)',
        transition: 'all .4s ease-in-out',
      };
    }
  });

  // ロゴのスタイルオブジェクト（遷移効果を含む）
  const combinedStyleObject = computed<StyleObject>(() => {
    const baseStyle = styleObject.value;
    const transitionStyle: StyleObject = isLogoTransitioning.value ? {
      opacity: '0.7',
      transform: baseStyle.transform ? `${baseStyle.transform} scale(1.02)` : 'scale(1.02)',
    } : {};

    return {
      ...baseStyle,
      ...transitionStyle,
      transition: `${baseStyle.transition || 'all .4s ease-in-out'}, opacity .3s ease-in-out, transform .3s ease-in-out`,
    };
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
  #sp-nav {
    display: none;
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
  .hidden {
    visibility: hidden;
    opacity: 0 !important;
  }
  .app {
    min-width: 85vw;
    /* height: 80vh; */
    max-width: 1280px;
    max-height: 75vh;
    /* padding: 2rem 2rem 0 2rem; */
    padding: 1.4rem;
    margin: 1rem auto;
    border-radius: 10px;
    transition: .5s ease-in-out;
    /* scroll-behavior: auto; */
    overflow-y: auto; /* スクロール可能に変更 */
  }
  .glass {
    /* 背景を少し強めてコントラストを確保 */
    background-color: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.4); /* ボーダー */
    border-right-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
    backdrop-filter: blur(20px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14), 0 1px 4px rgba(0, 0, 0, 0.06); /* 柔らかい二段影 */
    color: #111; /* ガラス上のテキストは濃色で可読性を担保 */
  }
  #scrollable-aria {
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    z-index: 1;
    pointer-events: all;
  }
  ::-webkit-scrollbar {
    overflow: scroll;
  }
  .slide-enter {
    transform: translateX(-2%);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateX(2%);
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .slide-leave-active {
    animation: slide-out .4s cubic-bezier(0.4, 0, 1, 1);
  }

  @keyframes slide-in {
    0% {
      transform: translateX(2%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-2%);
      opacity: 0;
    }
  }
  
  /* ナビゲーション視覚フィードバックシステム */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: transparent;
    z-index: 9999;
    display: none;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #f0d300, #ff984f, #f0d300);
    background-size: 200% 100%;
    animation: gradient-wave 1.5s ease-in-out infinite;
    border-radius: 0 2px 2px 0;
    box-shadow: 0 0 10px rgba(240, 211, 0, 0.6);
    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @keyframes gradient-wave {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: -200% 50%;
    }
  }

  /* ナビゲーション中のローディング状態 */
  :global(.navigation-loading) {
    cursor: wait !important;
  }

  :global(.navigation-loading *) {
    cursor: wait !important;
  }

  /* ナビゲーションリンクのローディングフィードバック */
  :global(.navigation-loading .rlink) {
    opacity: 0.7;
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }

  /* ローディングプレースホルダー */
  .loading-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2rem;
    color: rgba(17, 17, 17, 0.7);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  /* SpNav 強制有効化（親要素のpointer-events制限を上書き） */
  #sp-nav, #sp-nav * {
    pointer-events: auto !important;
  }

  /* SP表示 */
  @media (max-width: 540px) {
    #main {
      display: block;
      /* overflow: hidden; */
      pointer-events: none;
    }
    #center-logo {
      top: 40%;
      width: 60%;
    }
    .app {
      /* width: 90vw; */
      height: 70vh;
      padding: 1rem 0;
      margin: 1rem auto;
    }
    #sp-nav {
      display: block;
      position: fixed;
      right: 50%;
      bottom: 2.5rem;
      pointer-events: all !important;
      z-index: 20;
    }
    
    /* SP用プログレスバー */
    .progress-bar {
      height: 4px;
    }
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
      top: 56%;
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

  /* Mobile: 540px以下 - コンパクトな縦並びレイアウト */
  @media screen and (max-width: 540px) {
    .home-nav-links {
      display: flex;
      flex-direction: column; /* 縦並び */
      gap: 1rem;
      top: 58%; /* ロゴの下に配置 */
      align-items: center;
      padding: 0 1rem;
      max-width: 90vw;
    }

    .home-nav-link {
      font-size: 1.1rem; /* やや小さめ */
      padding: 0.4rem 0.8rem;
    }

    /* 縦線を削除（縦並びのため不要） */
    .home-nav-link::after {
      content: none;
    }

    /* 言語ボタンをコンパクトに */
    .home-lang-dropdown {
      margin-left: 0;
      width: auto;
    }

    .home-lang-dropdown-toggle {
      padding: 0.4rem 1rem;
      font-size: 0.9rem;
    }

    .home-lang-dropdown .globe-icon {
      font-size: 1rem;
    }

    .home-lang-dropdown .current-lang-label {
      font-size: 0.9rem;
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
