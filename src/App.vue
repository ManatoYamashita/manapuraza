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

    <a href="https://www.yamashitamana.to" aria-current="page" class="home-logo">
      <img
        fetchpriority="high"
        :src="logoSvg"
        alt="ホームページに戻る"
        width="800"
        height="200"
        draggable="false"
        id="center-logo"
        :class="className"
        :style="styleObject"
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
            <font-awesome-icon :icon="faGlobe" class="globe-icon" />
            <span class="current-lang-label">{{ currentLanguageLabel }}</span>
            <font-awesome-icon
              :icon="faChevronDown"
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
                  <font-awesome-icon
                    :icon="faCheck"
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
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faGlobe, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
  import Menu from '@/components/Menu.vue';
  import type { Locale } from '@/types';
  import logoSvg from '@/assets/logo.svg';

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

  onMounted(() => {
    checkRouterReady();

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
  #sp-nav {
    display: none;
  }
  .route-home {
    opacity: 1;
    transition: all .4s ease-in-out;
    animation-delay: 2.3s;
  }
  .route-other {
    opacity: 0;
    filter: blur(2rem);
    transition: all .4s ease-in-out;
    animation-delay: 2.3s;
  }
  .hidden {
    visibility: hidden;
    opacity: 0 !important;
  }
  .app {
    min-width: 85vw;
    max-width: 1280px;
    max-height: 77vh;
    margin: 0 auto;
    padding: .5rem;
    border-radius: 10px;
    transition: .5s ease-in-out;
    overflow-y: auto; /* スクロール可能に変更 */
    scrollbar-width: thin;
    scrollbar-color: transparent;
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
      pointer-events: none;
    }
    #center-logo {
      top: 40%;
      width: 60%;
    }
    .app {
      margin: 0;
      width: 100%;
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

  /* タッチデバイスではホバー効果を無効化 */
  @media (hover: hover) and (pointer: fine) {
    .home-nav-link:hover {
      color: #d7a800;
      text-shadow: #f0d300 0 0px 1rem;
      animation: glow 0.3s ease-in-out infinite alternate;
    }

    .home-lang-dropdown-toggle:hover {
      background: #f0d300;
      border-color: #d7a800;
      transform: translateY(-2px);
    }

    .home-lang-option-btn:hover {
      background: #f0d300;
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
    transform: translateY(0) scaleY(0.8);
  }

  .dropdown-slide-leave-to {
    opacity: 0;
    transform: translateY(0) scaleY(0.8);
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
    animation: homeMenuFadeIn 0.4s ease-in-out 2.3s forwards;
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

  /* Mobile: 540px以下 - 縦積みレイアウト */
  @media screen and (max-width: 540px) {
    .home-nav-links {
      display: flex;
      flex-direction: column; /* 垂直スタック */
      flex-wrap: nowrap;
      align-items: center; /* 水平中央揃え */
      gap: 0.75rem; /* 項目間の縦間隔 */
      top: 50%; /* ロゴから少し下げる */
      max-width: 90vw; /* 画面幅の90%まで使用 */
      padding: 0 1rem;
      padding-top: max(0.5rem, env(safe-area-inset-top, 0.5rem)); /* Safe Area対応 */
    }

    /* リンクスタイル - タッチフレンドリー */
    .home-nav-link {
      font-size: 1.1rem; /* 可読性確保 */
      padding: 0.5rem 1.2rem; /* タッチターゲット拡大 */
      width: 100%; /* 全幅表示 */
      text-align: center;
      max-width: 280px; /* iPhone SE対応 */
      min-height: 44px; /* iOS推奨タッチサイズ */
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      white-space: nowrap;
    }

    /* 縦線を完全削除 */
    .home-nav-link::after {
      content: none;
      display: none;
    }

    /* 言語ドロップダウンを最下段に配置 */
    .home-lang-dropdown {
      margin-left: 0;
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      max-width: 280px;
    }

    /* 言語トグルボタン */
    .home-lang-dropdown-toggle {
      font-size: 0.95rem;
      padding: 0.5rem 1rem;
      min-height: 44px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* アイコンサイズ調整 */
    .home-lang-dropdown .globe-icon {
      font-size: 1.1rem;
    }

    .home-lang-dropdown .current-lang-label {
      font-size: 0.95rem;
    }

    .home-lang-dropdown .chevron-icon {
      font-size: 0.75rem;
    }

    /* ドロップダウンメニュー中央配置 */
    .home-lang-dropdown-menu {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      min-width: 180px;
      max-width: 90vw; /* 画面外回避 */
    }

    /* ドロップダウンオプションボタン */
    .home-lang-option-btn {
      font-size: 0.95rem;
      padding: 0.75rem 1.2rem;
      min-height: 44px;
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
