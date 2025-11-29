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

<script type="text/javascript" setup>
  import { watch, onMounted, computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Menu from '@/components/Menu.vue';
  
  const route = useRoute();
  const router = useRouter();
  const isHomePage = ref(true);

  // プログレッシブローディング用のロゴ管理
  const logoQuality = ref('low'); // 'low' | 'high'
  const isLogoTransitioning = ref(false);
  const logoLoadAttempted = ref(false);

  // ロゴソースの計算プロパティ
  const currentLogoSrc = computed(() => {
    return logoQuality.value === 'low' 
      ? new URL('@/assets/logo-low.webp', import.meta.url).href
      : new URL('@/assets/logo.webp', import.meta.url).href;
  });

  // ロゴ遷移用クラス
  const logoTransitionClass = computed(() => {
    return isLogoTransitioning.value ? 'logo-transitioning' : '';
  });

  const checkRouterReady = async () => {
    await router.isReady();
    updateHomePageState();
  };

  // リアクティブなスタイル計算（直接DOM操作を排除）
  const appStyles = computed(() => {
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

  const updateHomePageState = () => {
    isHomePage.value = route.name === 'home';
    // 直接DOM操作を削除 - リアクティブスタイルが自動更新
  };

  watch(route, () => {
    updateHomePageState();
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
    };
    
    highQualityImg.src = new URL('@/assets/logo.webp', import.meta.url).href;
  };

  // ロゴ読み込み完了ハンドラー
  const onLogoLoad = () => {
    // 初期の低画質ロゴが読み込まれた後、高画質版を遅延読み込み
    if (logoQuality.value === 'low' && !logoLoadAttempted.value) {
      const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
      schedule(() => {
        loadHighQualityLogo();
      });
    }
  };

  onMounted(() => {
    checkRouterReady();
    
    // LCP改善: 高品質版ロゴのプリロードヒントを追加
    const addLogoPreload = () => {
      const logoPreloadLink = document.createElement('link');
      logoPreloadLink.rel = 'preload';
      logoPreloadLink.href = new URL('@/assets/logo.webp', import.meta.url).href;
      logoPreloadLink.as = 'image';
      logoPreloadLink.type = 'image/webp';
      logoPreloadLink.fetchpriority = 'high';
      document.head.appendChild(logoPreloadLink);
    };
    
    // プリロードを即座に実行（LCP最適化）
    addLogoPreload();
  });

  const path = computed(() => route.path);

  const className = computed(() => {
    if (path.value === '/') {
      return 'route-home';
    } else {
      return 'route-other'; 
    }
  });

  const styleObject = computed(() => {
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
  const combinedStyleObject = computed(() => {
    const baseStyle = styleObject.value;
    const transitionStyle = isLogoTransitioning.value ? {
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
    width: 85vw;
    height: 80vh;
    max-width: 1280px;
    max-height: 80vh;
    padding: 2rem 2rem 0 2rem;
    margin: 1rem auto;
    border-radius: 10px;
    transition: .5s ease-in-out;
    /* scroll-behavior: auto; */
    overflow-y: hidden;
  }
  .glass {
    /* 背景を少し強めてコントラストを確保 */
    background-color: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.4); /* ボーダー */
    border-right-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
    backdrop-filter: blur(20px);
    box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5); /* 薄い影 */
    color: #111; /* ガラス上のテキストは濃色で可読性を担保 */
  }
  #scrollable-aria {
    overflow-y: auto;
    height: 100%;
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
    animation: slide-in .2s cubic-bezier(0,.94,.57,1.02);
  }
  .slide-leave-active {
    animation: slide-out .2s cubic-bezier(0,.94,.57,1.02);
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
      overflow: hidden;
      pointer-events: none;
    }
    #center-logo {
      top: 40%;
      width: 60%;
    }
    .app {
      width: 90vw;
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
  }

  .home-nav-link:hover {
    color: #d7a800;
    text-shadow: #f0d300 0 0px 1rem;
    animation: glow 0.3s ease-in-out infinite alternate;
  }

  /* メニュー項目間の縦線 */
  .home-nav-link:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: -1.5rem;
    color: #666;
    font-weight: normal;
    user-select: none;
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

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    .home-nav-links {
      top: 58%; /* タブレットサイズでは少し下に */
      gap: 2rem;
    }
    
    .home-nav-link {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 540px) {
    .home-nav-links {
      display: none; /* モバイルでは非表示 */
    }
  }
</style>