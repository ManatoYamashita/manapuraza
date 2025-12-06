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

      <!-- 言語切り替えドロップダウン（デスクトップ） -->
      <div class="lang-dropdown desktop-lang" ref="dropdownRef" v-show="currentPath !== '/'">
        <button
          class="lang-dropdown-toggle"
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
          <ul class="lang-dropdown-menu" v-show="isDropdownOpen">
            <li v-for="lang in languages" :key="lang.code">
              <button
                @click="selectLanguage(lang.code)"
                :class="{ 'active': locale === lang.code }"
                class="lang-option-btn"
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
    

    <!-- モバイルナビゲーション -->
    <nav class="mobile-nav" v-show="shouldShowMobileNav">
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

        <!-- 言語切り替えドロップダウン（モバイル） -->
        <div class="lang-dropdown mobile-lang" ref="dropdownRefMobile" v-show="currentPath !== '/'">
          <button
            class="lang-dropdown-toggle"
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
            <ul class="lang-dropdown-menu" v-show="isDropdownOpen">
              <li v-for="lang in languages" :key="lang.code">
                <button
                  @click="selectLanguage(lang.code)"
                  :class="{ 'active': locale === lang.code }"
                  class="lang-option-btn"
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from "vue-router";
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default {
  name: 'AppMenu',
  components: {
    RouterLink,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { t, locale } = useI18n();
    const currentPath = ref(route.path);
    const isInitialLoad = ref(true);

    // モバイルメニューの表示判定（ホームページでは非表示）
    const shouldShowMobileNav = computed(() => {
      // ホームページでは常にモバイルメニューを非表示
      // （App.vueの.home-nav-linksが表示されるため）
      if (currentPath.value === '/') {
        return false;
      }
      return true;
    });

    // ドロップダウン状態管理
    const isDropdownOpen = ref(false);
    const dropdownRef = ref(null);
    const dropdownRefMobile = ref(null);

    // 言語リスト
    const languages = [
      { code: 'ja', label: '日本語' },
      { code: 'en', label: 'English' }
    ];

    // 現在の言語ラベル
    const currentLanguageLabel = computed(() => {
      const current = languages.find(lang => lang.code === locale.value);
      return current ? current.label : '日本語';
    });

    // ドロップダウン開閉
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    // 言語選択
    const selectLanguage = (langCode) => {
      if (locale.value !== langCode) {
        locale.value = langCode;
      }
      isDropdownOpen.value = false; // 自動クローズ
    };

    // 外側クリック検出
    const handleClickOutside = (event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target) &&
          dropdownRefMobile.value && !dropdownRefMobile.value.contains(event.target)) {
        isDropdownOpen.value = false;
      }
    };

    // Escapeキーでクローズ
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isDropdownOpen.value) {
        isDropdownOpen.value = false;
      }
    };

    onMounted(() => {
      try {
        setTimeout(() => {
          isInitialLoad.value = false;
        }, 2000);

        // イベントリスナー追加
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        // ルート変更時にドロップダウンをクローズ
        router.afterEach(() => {
          isDropdownOpen.value = false;
        });
      } catch (error) {
        isInitialLoad.value = false;
      }
    });

    onUnmounted(() => {
      // イベントリスナー削除
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
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

    return {
      currentPath,
      isInitialLoad,
      shouldShowMobileNav,
      handleLogoError,
      t,
      locale,
      isDropdownOpen,
      dropdownRef,
      dropdownRefMobile,
      languages,
      currentLanguageLabel,
      toggleDropdown,
      selectLanguage
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
  display: none; /* デフォルトは非表示（モバイル優先） */
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
  white-space: nowrap;
}

.nav-link:hover {
  color: #d7a800; /* 濃い黄色（視認性確保） */
  text-shadow: #f0d300 0 0px 1rem;
  animation: glow 0.3s ease-in-out infinite alternate;
}

/* アクティブページのグロー効果 */
.nav-link.router-link-active {
  color: #d7a800; /* 濃い黄色 */
  text-shadow: #f0d300 0 0px 1rem, #f0d300 0 0px 2rem;
  font-weight: 900; /* より強調 */
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

/* 言語切り替えドロップダウン */
.lang-dropdown {
  position: relative;
  flex: 0 0 auto;
  z-index: 200;
}

.lang-dropdown-toggle {
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
}

.lang-dropdown-toggle:hover {
  background: #f0d300;
  border-color: #d7a800;
  transform: translateY(-2px);
}

.globe-icon {
  font-size: 1.2rem;
}

.current-lang-label {
  font-size: 1rem;
  white-space: nowrap;
}

.chevron-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.lang-dropdown-menu {
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

.lang-option-btn {
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

.lang-option-btn:hover {
  background: #f0d300;
}

.lang-option-btn.active {
  font-weight: bold;
  background: #fef9e0;
}

.check-icon {
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

/* デスクトップ言語切り替え */
.desktop-lang {
  margin-left: 0;
}

/* モバイル言語切り替え */
.mobile-lang .current-lang-label {
  display: inline;
}

/* レスポンシブ対応 */
@media screen and (max-width: 768px) {
  /* モバイルで言語ラベルを非表示、地球アイコンのみ */
  .mobile-lang .current-lang-label {
    display: none;
  }

  .mobile-lang .lang-dropdown-toggle {
    padding: 0.5rem;
  }

  .mobile-lang .lang-dropdown-menu {
    min-width: 110px;
  }
}

/* モバイルナビゲーション */
.mobile-nav {
  display: block; /* デフォルトは表示（モバイル優先） */
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img-mobile {
  width: 10rem;
}

/* モバイル下部メニュー */
.mobile-bottom-menu {
  position: fixed;
  left: 50%;
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  /* width: 85vw; */
  width: 90vw;
  max-width: 1280px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 18px;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14), 0 1px 4px rgba(0, 0, 0, 0.06);
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
    transform: translateX(-50%) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* レスポンシブ対応 - 768px境界で明確に切り替え */
@media screen and (min-width: 769px) {
  .mobile-nav {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }
}

/* デスクトップロゴのレスポンシブサイズ調整 */
@media screen and (min-width: 769px) and (max-width: 800px) {
  .desktop-nav {
    gap: 0.5rem; /* より狭い間隔 */
  }

  .desktop-nav .logo {
    max-width: clamp(150px, 35vw, 220px);
    min-width: 120px;
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
