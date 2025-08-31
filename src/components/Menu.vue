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
      
      <div class="nav-links">
        <RouterLink to="/about" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">About</RouterLink>
        <RouterLink to="/creatives" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">Creatives</RouterLink>
        <RouterLink to="/contact" class="nav-link" :class="{ 'nav-animate': isInitialLoad }">Contact</RouterLink>
      </div>

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

      <div class="mobile-bottom-menu">
        <div class="menu-circle-social">
          <input type="checkbox" class="menu-circle-open" name="menu-circle-open" id="menu-open"/>
          <label class="menu-circle-open-button" :class="{ 'spnav-animate': isInitialLoad }" for="menu-open" aria-label="メニューを開く">
            <svg class="mp icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 1440 1439.999935" preserveAspectRatio="xMidYMid meet" version="1.0">
              <path fill="#fff" d="M 443.851562 436.566406 C 493.277344 455.742188 517.992188 511.808594 498.441406 561.238281 L 342.414062 962.191406 C 323.234375 1011.613281 267.164062 1036.324219 217.742188 1017.15625 C 168.679688 997.964844 143.964844 941.902344 163.144531 892.472656 L 319.179688 491.148438 C 338.359375 442.09375 394.421875 417.382812 443.851562 436.566406 " fill-opacity="1" fill-rule="evenodd"/><path fill="#dddddd" d="M 1066.859375 436.566406 C 1116.289062 455.742188 1141.003906 511.808594 1121.816406 561.238281 L 965.421875 962.191406 C 946.238281 1011.613281 890.171875 1036.324219 841.117188 1017.15625 C 791.683594 997.964844 766.972656 941.902344 786.15625 892.472656 L 942.179688 491.148438 C 961.363281 442.09375 1017.429688 417.382812 1066.859375 436.566406 " fill-opacity="1" fill-rule="evenodd"/><path fill="#ffffff" d="M 443.851562 436.566406 C 394.421875 417.382812 338.359375 442.09375 319.179688 491.148438 L 163.144531 892.472656 C 143.964844 941.902344 168.679688 997.964844 217.742188 1017.15625 C 267.164062 1036.324219 323.234375 1011.613281 342.414062 962.191406 L 498.441406 561.238281 C 517.992188 511.808594 493.277344 455.742188 443.851562 436.566406 Z M 996.03125 436.566406 C 946.613281 455.742188 921.898438 511.808594 941.070312 561.238281 L 1097.105469 962.191406 C 1116.652344 1011.613281 1172.714844 1036.324219 1221.785156 1017.15625 C 1271.203125 997.964844 1295.917969 941.902344 1276.742188 892.472656 L 1120.347656 491.148438 C 1101.160156 442.09375 1045.097656 417.382812 996.03125 436.566406 Z M 755.539062 436.566406 C 804.59375 455.742188 829.304688 511.808594 810.132812 561.238281 L 654.101562 962.191406 C 634.921875 1011.613281 578.851562 1036.324219 529.425781 1017.15625 C 479.996094 997.964844 455.285156 941.902344 474.464844 892.472656 L 630.863281 491.148438 C 650.042969 442.09375 706.109375 417.382812 755.539062 436.566406 " fill-opacity="1" fill-rule="evenodd"/>
            </svg>
          </label>
          
          <router-link to="/about" class="menu-circle-item" aria-label="山下マナトについて" @click="closeMobileMenu">
            <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 35" fill="#ffffff">
              <path d="M30.8945 28.8235C30.8945 30.5784 30.3618 31.9642 29.2925 32.9807C28.2251 33.9973 26.8078 34.5055 25.0367 34.5055H5.86351C4.09244 34.5055 2.67517 33.9973 1.6078 32.9807C0.538472 31.9642 0.00579834 30.5784 0.00579834 28.8235C0.00579834 28.0482 0.031355 27.2914 0.0824627 26.5529C0.13357 25.8142 0.235767 25.0171 0.38909 24.1615C0.542413 23.306 0.737026 22.5125 0.970942 21.7812C1.20486 21.05 1.51936 20.337 1.91446 19.6422C2.30956 18.9475 2.76167 18.3553 3.27471 17.8652C3.78579 17.3754 4.41086 16.984 5.14996 16.6915C5.88906 16.399 6.70482 16.2528 7.59527 16.2528C7.72697 16.2528 8.0356 16.41 8.51719 16.7245C9.00075 17.0388 9.54521 17.3899 10.1526 17.7775C10.758 18.165 11.5482 18.516 12.5213 18.8306C13.4943 19.1451 14.4712 19.3021 15.4501 19.3021C16.431 19.3021 17.406 19.1451 18.379 18.8306C19.352 18.516 20.1422 18.165 20.7477 17.7775C21.355 17.3899 21.8995 17.0388 22.3831 16.7245C22.8647 16.41 23.1733 16.2528 23.305 16.2528C24.1954 16.2528 25.0112 16.399 25.7503 16.6915C26.4894 16.984 27.1145 17.3754 27.6255 17.8652C28.1386 18.3553 28.5907 18.9475 28.9858 19.6422C29.3809 20.337 29.6954 21.05 29.9293 21.7812C30.1632 22.5125 30.3578 23.306 30.5112 24.1615C30.6645 25.0171 30.7667 25.8142 30.8178 26.5529C30.8689 27.2914 30.8945 28.0482 30.8945 28.8235ZM21.4061 3.27614C21.4061 3.27614 21.817 3.68756 22.6406 4.51019C23.4622 5.33303 23.875 6.90694 23.875 9.23253C23.875 11.5579 23.0514 13.5433 21.4061 15.1887C19.7609 16.8342 17.7755 17.6568 15.4501 17.6568C13.1247 17.6568 11.1394 16.8342 9.49412 15.1887C7.84885 13.5433 7.02524 11.5579 7.02524 9.23253C7.02524 6.90694 7.84885 4.92161 9.49412 3.27614C11.1394 1.63087 13.1247 0.808228 15.4501 0.808228C17.7755 0.808228 19.7609 1.63087 21.4061 3.27614Z" fill="#ffffff"/>
            </svg>
          </router-link>
          
          <router-link to="/creatives" class="menu-circle-item" aria-label="クリエイティブ作品を一部を紹介" @click="closeMobileMenu">
            <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#ffffff">
              <path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/>
            </svg>
          </router-link>
          
          <router-link to="/contact" class="menu-circle-item" aria-label="お問い合わせ" @click="closeMobileMenu">
            <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
          </router-link>
        </div>
      </div>
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

    const closeMobileMenu = () => {
      const menuOpen = document.getElementById('menu-open');
      if (menuOpen && menuOpen.checked) {
        menuOpen.checked = false;
      }
    };

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
      closeMobileMenu,
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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  pointer-events: auto !important;
  gap: 1rem; /* 要素間の最小間隔を確保 */
}

.desktop-nav .logo {
  display: block;
  flex: 1 1 auto; /* 縮小・成長可能 */
  max-width: clamp(180px, 40vw, 300px);
  min-width: 120px; /* 最小サイズ保証 */
  overflow: hidden;
  cursor: alias;
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
  color: skyblue;
  text-shadow: #4faef2 0 0px 1rem;
  animation: glow 0.3s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: #4faef2 0 0px 1rem;
  }
  to {
    text-shadow: #4faef2 0 0px 2rem, #4faef2 0 0px 3rem;
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
  background-color: #4faef2;
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
  padding: 1rem 0;
}

.logo-img-mobile {
  width: 10rem;
}

.mobile-lang {
  transform: scale(1.1);
  flex-direction: row;
  align-items: center;
}

/* モバイル下部メニューコンテナ */
.mobile-bottom-menu {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 4rem;
  height: 4rem;
}

/* 円形メニュー */
.menu-circle-social {
  text-align: center;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  font-size: 2rem;
}

.menu-circle-item, .menu-circle-open-button {
  border-radius: 100%;
  background: var(--mpuraza-acsent);
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -2rem;
  color: white;
  text-align: center;
  line-height: 4rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transform: translate3d(0, 0, 0);
  transition: transform ease-out 200ms;
}

.menu-circle-open {
  display: none;
}

.menu-circle-open:checked + .menu-circle-open-button{
  transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu-circle-item:nth-child(3) {
  transition-duration: 70ms;
}

.menu-circle-item:nth-child(4) {
  transition-duration: 130ms;
}

.menu-circle-item:nth-child(5) {
  transition-duration: 180ms;
}

.menu-circle-open-button {
  z-index: 1;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
}

.menu-circle-open-button:hover {
  transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.menu-circle-open:checked + .menu-circle-open-button {
  transition-timing-function: linear;
  transition-duration: 200ms;
  transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-circle-open:checked ~ .menu-circle-item {
  transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.menu-circle-open:checked ~ .menu-circle-item:nth-child(3) {
  transition-duration: 160ms;
  transform: translate3d(3.5rem, -3.5rem, 0);
}

.menu-circle-open:checked ~ .menu-circle-item:nth-child(4) {
  transition-duration: 240ms;
  transform: translate3d(-3.5rem, -3.5rem, 0);
}

.menu-circle-open:checked ~ .menu-circle-item:nth-child(5) {
  transition-duration: 320ms;
  transform: translate3d(0, -5rem, 0);
}

label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icons {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  fill: #fff;
  transition: all 0.3s ease;
}

.mp {
  width: 3rem;
  height: 3rem;
}

/* SpNav初回アニメーション */
.spnav-animate {
  opacity: 0;
  transform: translateY(-20px);
  animation: spnavFadeInUp 0.8s ease-out 1s forwards;
}

@keyframes spnavFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-20px);
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
</style>