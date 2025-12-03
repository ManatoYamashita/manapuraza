<template>
  <div class="menu">
    <!-- デスクトップナビゲーション -->
    <nav class="desktop-nav">
      <div class="logo">
        <RouterLink to="/" aria-current="page" aria-label="ホームページに戻る">
          <transition name="slide" mode="out-in">
            <img 
              src="@/assets/logo-low.webp" 
              alt="manapuraza.com logo" 
              loading="lazy" 
              decoding="async"
              width="250"
              height="50"
              class="logo-img" 
              v-show="currentPath !== '/'"
              @error="handleLogoError"
            />
          </transition>
        </RouterLink>
      </div>
      
      <!-- 通常ページ用メニュー項目 -->
      <transition name="menu-fade">
        <div class="nav-links" v-show="currentPath !== '/'">
          <RouterLink to="/about" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">{{ $t('navbar.menu.about') }}</RouterLink>
          <RouterLink to="/creatives" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">{{ $t('navbar.menu.creatives') }}</RouterLink>
          <RouterLink to="/contact" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">{{ $t('navbar.menu.contact') }}</RouterLink>
        </div>
      </transition>

      <div class="lang-switch desktop-lang" :class="{ 'lang-switch-animate': isInitialLoad }">
        <div class="toggle-switch vertical">
          <input class="toggle-input" id="toggle-desktop" type="checkbox" @click="toggleLanguage">
          <label class="toggle-label" for="toggle-desktop"></label>
        </div>
        <span class="current-lang vertical-text">{{ $i18n.locale.value === 'ja' ? '日本語' : 'Eng' }}</span>
      </div>
    </nav>
    

    <!-- モバイルナビゲーション -->
    <nav class="mobile-nav">
      <div class="mobile-header">
        <div class="logo">
          <RouterLink to="/" aria-current="page" aria-label="ホームページに戻る">
            <img 
              src="@/assets/logo-low.webp" 
              alt="manapuraza.com logo" 
              loading="lazy" 
              decoding="async"
              class="logo-img-mobile" 
              v-show="currentPath !== '/'"
              @error="handleLogoError"
            />
          </RouterLink>
        </div>
        
        <div class="lang-switch mobile-lang" :class="{ 'lang-switch-animate': isInitialLoad }">
          <span class="lang-label">{{ $t('navbar.toggle') }}</span>
          <div class="toggle-switch">
            <input class="toggle-input" id="toggle-mobile" type="checkbox" @click="toggleLanguage">
            <label class="toggle-label" for="toggle-mobile"></label>
          </div>
        </div>
      </div>

      <!-- モバイル下部メニュー -->
      <nav class="mobile-bottom-menu" :class="{ 'mobile-menu-animate': isInitialLoad }">
        <ul class="mobile-menu-list">
          <li class="mobile-menu-item">
            <RouterLink to="/about" class="mobile-menu-link">{{ $t('navbar.menu.about') }}</RouterLink>
          </li>
          <li class="mobile-menu-item">
            <RouterLink to="/creatives" class="mobile-menu-link">{{ $t('navbar.menu.creatives') }}</RouterLink>
          </li>
          <li class="mobile-menu-item">
            <RouterLink to="/contact" class="mobile-menu-link">{{ $t('navbar.menu.contact') }}</RouterLink>
          </li>
        </ul>
      </nav>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { RouterLink } from "vue-router";
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Menu',
  components: {
    RouterLink,
  },
  setup() {
    const route = useRoute();
    const { t, locale } = useI18n();
    const currentPath = ref(route.path);
    const isInitialLoad = ref(true);

    onMounted(() => {
      try {
        setTimeout(() => {
          isInitialLoad.value = false;
        }, 2000);
      } catch (error) {
        isInitialLoad.value = false;
      }
    });

    const handleLogoError = (event) => {
      try {
        event.target.style.display = 'none';
        const logoContainer = event.target.parentElement?.parentElement;
        if (logoContainer) {
          logoContainer.innerHTML = '<span class="logo-fallback">manapuraza</span>';
        }
      } catch (error) {
        console.warn('Logo error handling failed');
      }
    };

    const toggleLanguage = () => {
      try {
        if (locale && locale.value) {
          // 修正: 'ja'なら'en'に、それ以外は'ja'に
          locale.value = locale.value === 'ja' ? 'en' : 'ja';
        }
      } catch (error) {
        const toggleLabel = document.querySelector('.toggle-label');
        if (toggleLabel) {
          toggleLabel.style.backgroundColor = '#ff4444';
          setTimeout(() => {
            toggleLabel.style.backgroundColor = '';
          }, 1000);
        }
      }
    };

    return {
      currentPath,
      isInitialLoad,
      handleLogoError,
      toggleLanguage,
      t
    };
  },
  watch: {
    $route(to) {
      try {
        if (to && to.path) {
          this.currentPath = to.path;
        }
      } catch (error) {
        this.currentPath = '/';
      }
    },
  },
  errorCaptured(err, instance, info) {
    return false;
  }
}
</script>

<style lang="css" scoped>
.menu {
  position: relative;
  z-index: 10;
  pointer-events: auto !important;
}

/* デスクトップナビゲーション */
.desktop-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  pointer-events: auto !important;
  gap: 1rem; /* 要素間の最小間隔を確保 */
}

.desktop-nav .logo {
  display: block;
  flex: 0 0 auto; /* 固定サイズ */
  max-width: clamp(180px, 40vw, 300px);
  min-width: 120px; /* 最小サイズ保証 */
  overflow: hidden;
  cursor: alias;
  margin-right: auto; /* ロゴを左側に固定 */
}

.logo-img {
  width: 100%;
  height: auto; /* アスペクト比維持 */
  max-width: 100%;
  object-fit: contain; /* 縦横比維持しながらコンテナに収める */
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto; /* 固定サイズ、縮小しない */
  pointer-events: auto;
  margin-right: 0.5rem; /* 言語切り替えとの間隔を狭く */
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 11;
  pointer-events: auto !important;
}

.nav-link:hover {
  color: #d7a800; /* 濃い黄色（視認性確保） */
  text-shadow: #f0d300 0 0px 1rem;
  animation: glow 0.3s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: #f0d300 0 0px 1rem;
  }
  to {
    text-shadow: #f0d300 0 0px 2rem, #f0d300 0 0px 3rem;
  }
}

/* 初回アニメーション */
.nav-animate {
  opacity: 0;
  transform: translateY(-20px);
  animation: navFadeInUp 0.8s ease-out 1s forwards;
}

.nav-animate:nth-child(2) {
  animation-delay: 1.2s;
}

.nav-animate:nth-child(3) {
  animation-delay: 1.4s;
}

@keyframes navFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 言語切り替え */
.lang-switch {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  gap: 0;
}

.desktop-lang {
  flex: 0 0 auto; /* 固定サイズ、縮小しない */
  flex-direction: row;
  align-items: center;
  gap: 0;
  margin-left: 0; /* ナビリンクとの間隔調整 */
}

.lang-switch-animate {
  opacity: 0;
  transform: translateY(-20px);
  animation: langSwitchFadeInUp 0.8s ease-out 1s forwards;
}

@keyframes langSwitchFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.lang-label {
  font-size: 0.75rem;
  font-weight: 500;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.1em;
  line-height: 1.2;
  white-space: nowrap;
}


.current-lang {
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
}

.toggle-switch.vertical {
  width: 24px;
  height: 40px;
}

.toggle-switch .toggle-input {
  display: none;
}

.toggle-switch .toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  background-color: #BC002D;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-switch.vertical .toggle-label {
  width: 24px;
  height: 40px;
}

.toggle-switch .toggle-label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.toggle-switch.vertical .toggle-label::before {
  top: 2px;
  left: 2px;
}

.toggle-switch .toggle-input:checked + .toggle-label {
  background-color: #f0d300;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
  transform: translateX(16px);
}

.toggle-switch.vertical .toggle-input:checked + .toggle-label::before {
  transform: translateY(16px);
}

/* モバイルナビゲーション */
.mobile-nav {
  display: none;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img-mobile {
  width: 10rem;
}

.mobile-lang {
  transform: scale(1.1);
  flex-direction: row;
  align-items: center;
}

/* モバイル下部メニュー */
.mobile-bottom-menu {
  position: fixed;
  left: 50%;
  bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  width: min(92%, 460px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 18px;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0.35rem;
  z-index: 100;
  overflow: hidden;
}

.mobile-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
}

.mobile-menu-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.mobile-menu-item:last-child {
  border-bottom: none;
}

.mobile-menu-link {
  display: block;
  padding: 1rem 1.25rem;
  text-decoration: none;
  color: #111;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: color 0.25s ease, background 0.25s ease, transform 0.2s ease;
  text-align: center;
}

.mobile-menu-link:hover,
.mobile-menu-link.router-link-active {
  background: rgba(240, 211, 0, 0.16);
  color: #111;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.mobile-menu-link:active {
  background: rgba(240, 211, 0, 0.22);
  transform: translateY(1px);
}

/* フェードインアニメーション（初回表示用） */
.mobile-menu-animate {
  opacity: 0;
  animation: mobileFadeIn 0.5s ease-in-out 1s forwards;
}

@keyframes mobileFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* レスポンシブ対応 - 540px境界 */
@media screen and (max-width: 540px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }
}

@media screen and (min-width: 541px) {
  .mobile-nav {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }
}

/* デスクトップロゴのレスポンシブサイズ調整 */
@media screen and (min-width: 541px) and (max-width: 768px) {
  .desktop-nav .logo {
    max-width: clamp(150px, 35vw, 220px);
  }
}

/* 760px辺りの特別対応（押しつぶし問題解決） */
@media screen and (min-width: 541px) and (max-width: 800px) {
  .desktop-nav {
    gap: 0.5rem; /* より狭い間隔 */
  }
  
  .desktop-nav .logo {
    max-width: clamp(120px, 30vw, 180px);
    min-width: 100px;
  }
}

/* 720px辺りの更なる圧迫対応 */
@media screen and (min-width: 541px) and (max-width: 720px) {
  .desktop-nav {
    gap: 0.25rem; /* さらに狭い間隔 */
  }
  
  .desktop-nav .logo {
    max-width: clamp(100px, 25vw, 160px);
    min-width: 80px; /* 極小でも視認性確保 */
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .desktop-nav .logo {
    max-width: clamp(180px, 38vw, 280px);
  }
}

@media screen and (min-width: 1201px) {
  .desktop-nav .logo {
    max-width: clamp(200px, 42vw, 320px);
  }
}

/* ロゴスライドトランジション */
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  transition-delay: 500ms;
}

.logo-fallback {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4faef2;
}


/* メニューフェードアニメーション（ヘッダー用） */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


</style>
