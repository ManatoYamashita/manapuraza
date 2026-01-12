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
              width="400"
              height="80"
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
          <font-awesome-icon :icon="faGlobe" class="globe-icon" />
          <span class="current-lang-label">{{ currentLanguageLabel }}</span>
          <font-awesome-icon
            :icon="faChevronDown"
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
    

    <!-- モバイルナビゲーション -->
    <nav class="mobile-nav" v-show="shouldShowMobileNav">
      <div class="mobile-header">
        <div class="logo">
          <RouterLink to="/" aria-current="page" aria-label="ホームページに戻る">
            <img
              src="@/assets/logo-low.webp"
              alt="manapuraza.com logo"
              width="200"
              height="40"
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
            <font-awesome-icon :icon="faGlobe" class="globe-icon" />
            <span class="current-lang-label">{{ currentLanguageLabel }}</span>
            <ChevronDown
              :size="16"
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
                  <Check
                    :size="18"
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
      <nav
        class="mobile-bottom-menu"
        :class="{ 'mobile-menu-animate': isInitialLoad }"
        v-show="shouldShowMobileNav && currentPath !== '/'"
      >
        <div class="mobile-menu-shell" :class="{ open: isMobileMenuOpen }">
          <!-- 左側: トグルボタン（円形） -->
          <button
            class="mobile-toggle-button"
            @click="handleMorphButtonClick"
            role="button"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu-links"
            :aria-label="isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
            tabindex="0"
            @keydown.enter="handleMorphButtonClick"
            @keydown.space.prevent="handleMorphButtonClick"
          >
            <div class="toggle-icon-container">
              <font-awesome-icon
                :icon="faBars"
                class="toggle-icon toggle-icon-bars"
                :class="{ 'icon-hidden': isMobileMenuOpen }"
              />
              <font-awesome-icon
                :icon="faXmark"
                class="toggle-icon toggle-icon-times"
                :class="{ 'icon-visible': isMobileMenuOpen }"
              />
            </div>
          </button>

          <!-- 右側: ページタイトルボタン（カプセル型） -->
          <div
            v-show="!isMobileMenuOpen"
            class="mobile-page-title"
            @click="handleMorphButtonClick"
            role="button"
            tabindex="0"
            @keydown.enter="handleMorphButtonClick"
            @keydown.space.prevent="handleMorphButtonClick"
          >
            <span class="page-title-label">{{ currentPageLabel }}</span>
          </div>

          <!-- メニューリスト -->
          <ul
            v-show="isMobileMenuOpen"
            class="mobile-menu-card"
            id="mobile-menu-links"
          >
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
        </div>
      </nav>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch, onErrorCaptured } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobe, faChevronDown, faCheck, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import type { Locale } from '@/types';

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n<{ message: string }, Locale>();

const currentPath = ref<string>(route.path);
const isInitialLoad = ref<boolean>(true);
const isMobileMenuOpen = ref<boolean>(false);
const isAnimating = ref<boolean>(false);

// ドロップダウン状態管理
const isDropdownOpen = ref<boolean>(false);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownRefMobile = ref<HTMLElement | null>(null);

// モバイルメニューの表示判定
const shouldShowMobileNav = computed<boolean>(() => {
  // 常にtrueを返す
  // - 769px以上: CSSで.mobile-navが非表示
  // - 768px以下: モバイルメニュー表示
  // - ホームページ（540px以下）: .home-nav-linksが非表示なので、モバイル下部メニューを表示
  return true;
});

const currentPageLabel = computed<string>(() => {
  const path = route.path;

  const pathMap: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
    '/creatives': 'creatives',
    '/contact': 'contact'
  };

  if (path.startsWith('/creatives/')) {
    return t('navbar.menu.creatives');
  }

  const key = pathMap[path] || 'home';
  return t(`navbar.menu.${key}`);
});

// 言語リスト
interface Language {
  code: Locale;
  label: string;
}

const languages: Language[] = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' }
];

// 現在の言語ラベル
const currentLanguageLabel = computed<string>(() => {
  const current = languages.find(lang => lang.code === locale.value);
  return current ? current.label : '日本語';
});

// ドロップダウン開閉
const toggleDropdown = (): void => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// 言語選択
const selectLanguage = (langCode: Locale): void => {
  if (locale.value !== langCode) {
    locale.value = langCode;
  }
  isDropdownOpen.value = false; // 自動クローズ
};

const handleMorphButtonClick = (): void => {
  if (isAnimating.value) return; // 連打防止

  isAnimating.value = true;
  const willOpen = !isMobileMenuOpen.value;

  if (willOpen) {
    // クローズ → オープン
    isMobileMenuOpen.value = true;

    nextTick(() => {
      gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => { isAnimating.value = false; }
      })
      // ページタイトルを後ろに引っ込める（完全には消さない）
      .to('.mobile-page-title', {
        opacity: 0.3,           // 薄く残す
        scale: 0.92,
        y: 0,                 // 上方向に押し込む
        zIndex: 1,
        duration: 0.2
      })
      // メニューカードを手前に引き出す
      .to('.mobile-menu-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        zIndex: 5,
        duration: 0.25,
        ease: 'back.out(1.2)'
      }, '-=0.1');
    });
  } else {
    // オープン → クローズ
    gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: () => {
        isMobileMenuOpen.value = false;
        isAnimating.value = false;

        // 状態リセット
        gsap.set('.mobile-page-title', {
          opacity: 1,
          scale: 1,
          y: 0,
          zIndex: 5
        });
        gsap.set('.mobile-menu-card', {
          opacity: 0,
          y: 8,
          scale: 0.95,
          zIndex: 1
        });
      }
    })
    // メニューカードを後ろに押し込む
    .to('.mobile-menu-card', {
      opacity: 0.3,           // 薄く残す
      y: 12,
      scale: 0.95,
      zIndex: 1,
      duration: 0.2
    })
    // ページタイトルを手前に引き出す
    .to('.mobile-page-title', {
      opacity: 1,
      scale: 1,
      y: 0,
      zIndex: 5,
      duration: 0.25,
      ease: 'back.out(1.3)'
    }, '-=0.12');
  }
};

// 外側クリック検出
const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as Node;
  if (dropdownRef.value && !dropdownRef.value.contains(target) &&
      dropdownRefMobile.value && !dropdownRefMobile.value.contains(target)) {
    isDropdownOpen.value = false;
  }
};

// Escapeキーでクローズ
const handleKeyDown = (event: KeyboardEvent): void => {
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

    // ルート変更時にドロップダウンとモバイルメニューをクローズ
    router.afterEach(() => {
      isDropdownOpen.value = false;
      if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
        // ページタイトルを確実に表示状態に戻す
        nextTick(() => {
          gsap.set('.mobile-page-title', { opacity: 1, scale: 1 });
          gsap.set('.mobile-menu-card', { opacity: 0, y: 8 });
        });
      }
    });
  } catch {
    isInitialLoad.value = false;
  }
});

onUnmounted(() => {
  // イベントリスナー削除
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
});

const handleLogoError = (event: Event): void => {
  try {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
    const logoContainer = target.parentElement?.parentElement;
    if (logoContainer) {
      logoContainer.innerHTML = '<span class="logo-fallback">manapuraza</span>';
    }
  } catch {
    console.warn('Logo error handling failed');
  }
};

// ルート変更の監視（watch）
watch(() => route.path, (newPath: string) => {
  try {
    if (newPath) {
      currentPath.value = newPath;
    }
  } catch {
    currentPath.value = '/';
  }
});

// エラーキャプチャ
onErrorCaptured(() => {
  return false;
});
</script>

<style lang="css" scoped>
.menu {
  position: relative;
  margin-bottom: 1rem;
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
  margin-right: auto; /* ロゴを左側に固定 */
}

.logo-img {
  width: 100%;
  height: auto; /* アスペクト比維持 */
  max-width: 100%;
  object-fit: contain; /* 縦横比維持しながらコンテナに収める */
  cursor: alias;
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
  transform: translateY(0) scaleY(0.8);
}

.dropdown-slide-leave-to {
  opacity: 0;
  transform: translateY(0) scaleY(0.8);
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

.mobile-header .logo {
  cursor: pointer;
}

.logo-img-mobile {
  width: 10rem;
}

/* モバイル下部メニュー */
.mobile-bottom-menu {
  position: fixed;
  left: 1rem;
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  width: min(60vw, 420px);
  min-width: 280px;
  max-width: 480px;
  padding: 0.35rem;
  z-index: 100;
  overflow: visible;
  transition: width 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
}

.mobile-menu-shell {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row; /* 横並び */
  align-items: center;
  gap: 0.75rem; /* ボタン間の間隔 */
  max-width: 480px;
  margin: 0 auto;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 62px;
  padding: 0.15rem 0.1rem;
}

.mobile-menu-shell.open {
  max-height: 520px;
  padding: 0.15rem 0.1rem 0.4rem;
}

/* 左側: トグルボタン（円形） */
.mobile-toggle-button {
  /* ボタンリセット */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  /* 絶対配置で左側に固定 */
  position: absolute;
  left: 0;
  bottom: 2px;
  z-index: 10;

  /* 円形デザイン */
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* グラスモーフィズム + 細めのボーダー */
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%; /* 完全な円形 */

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04);

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  /* タッチ最適化 */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
}

.mobile-toggle-button:hover {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

/* アイコンコンテナ */
.toggle-icon-container {
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 基本アイコンスタイル */
.toggle-icon {
  font-size: 1.6rem;
  color: #000;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

/* 初期状態: bars表示、times非表示 */
.toggle-icon-bars {
  opacity: 1;
  /* Font Awesome bars アイコンの視覚的中央配置のための微調整 */
  transform: translate(-50%, calc(-50% + 3px)) rotate(0deg) scale(1);
}

.toggle-icon-times {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(-90deg) scale(0.8);
}

/* アクティブ状態: bars非表示、times表示 */
.toggle-icon-bars.icon-hidden {
  opacity: 0;
  /* bars アイコンの微調整を維持 */
  transform: translate(-50%, calc(-50% + 3px)) rotate(90deg) scale(0.8);
}

.toggle-icon-times.icon-visible {
  opacity: 1;
  /* transform: translate(-50%, -50%) rotate(0deg) scale(1); */
}

/* ホバー効果 */
.mobile-toggle-button:hover .toggle-icon {
  filter: brightness(0.8);
}

/* 右側: ページタイトルボタン（カプセル型） */
.mobile-page-title {
  flex: 1; /* 残り幅を使用 */
  min-width: 0; /* flexboxのオーバーフロー対策 */
  margin-left: 3.75rem; /* トグルボタン(3rem) + 間隔(0.75rem) */

  display: flex;
  align-items: center;
  justify-content: center;

  /* カプセル型デザイン */
  height: 3rem;
  padding: 0.6rem 1.5rem;

  /* グラスモーフィズム + 細めのボーダー */
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px; /* カプセル型 */

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04);

  /* 初期状態（GSAP アニメーション用） */
  opacity: 1;
  transform: scale(1);

  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* アニメーション制御用 */
  z-index: 5; /* デフォルトで前面 */
  will-change: opacity, transform; /* GPU加速 */
}

.mobile-page-title:hover {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.06);
}

.mobile-page-title:active {
  transform: scale(0.98);
}

.page-title-label {
  font-size: 1.05rem;
  font-weight: 700;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* メニューリスト */
.mobile-menu-card {
  flex: 1; /* ページタイトルと同じ幅 */
  min-width: 0;
  margin-left: 3.75rem; /* トグルボタン(3rem) + 間隔(0.75rem) */

  position: relative;
  list-style: none;
  margin-bottom: 0;
  margin-right: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0; /* 区切り線表示のため */

  /* グラスモーフィズム + 細めのボーダー */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.06);

  overflow: hidden;

  /* GSAP アニメーション用の初期状態 */
  opacity: 0;
  transform: translateY(8px);

  /* アニメーション制御用 */
  z-index: 1; /* デフォルトで背面 */
  will-change: opacity, transform; /* GPU加速 */
}

.mobile-menu-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.mobile-menu-item:last-child {
  border-bottom: none;
}

.mobile-menu-link {
  display: block;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #111;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative; /* 下線エフェクト用 */
}

.mobile-menu-link:hover {
  background: rgba(240, 240, 240, 0.4);
  color: #d7a800;
  text-shadow: 0 0 8px rgba(240, 211, 0, 0.5);
}

/* アクティブページスタイル */
.mobile-menu-link.router-link-active {
  background: rgba(240, 211, 0, 0.15); /* 薄いイエロー背景 */
  color: #d7a800; /* ダークイエロー */
  font-weight: 900;
  text-shadow:
    0 0 12px rgba(240, 211, 0, 0.8),   /* 内側の強いグロー */
    0 0 24px rgba(240, 211, 0, 0.4);   /* 外側の柔らかいグロー */
}

/* 下線エフェクト */
.mobile-menu-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 160px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #d7a800 20%,
    #d7a800 80%,
    transparent
  );
  box-shadow: 0 0 8px rgba(240, 211, 0, 0.6);
}

.mobile-menu-link:active {
  background: rgba(230, 230, 230, 0.8);
  transform: scale(0.98);
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

/* GPU加速の明示的な有効化 */
.mobile-page-title,
.mobile-menu-card,
.toggle-icon {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* アクセシビリティ対応（モーション低減設定） */
@media (prefers-reduced-motion: reduce) {
  .mobile-page-title,
  .mobile-menu-card,
  .toggle-icon,
  .mobile-menu-link {
    transition-duration: 0.05s !important;
    animation: none !important;
  }

  .mobile-menu-link.router-link-active::after {
    animation: none;
  }
}

/* モバイルメニューのレスポンシブ対応 */
@media screen and (max-width: 400px) {
  .mobile-toggle-button {
    width: 2.75rem;
    height: 2.75rem;
  }

  .toggle-icon {
    font-size: 1.1rem;
  }

  .mobile-page-title {
    height: 2.75rem;
    padding: 0.5rem 1.2rem;
  }

  .page-title-label {
    font-size: 0.95rem;
  }

  .mobile-menu-link {
    font-size: 1rem;
    padding: 0.9rem 1.2rem;
  }

  /* アクティブ状態の下線調整（小画面用） */
  .mobile-menu-link.router-link-active::after {
    width: 70%;
    height: 1.5px;
    bottom: 0.4rem;
  }
}

@media screen and (max-width: 360px) {
  .mobile-menu-shell {
    gap: 0.5rem;
  }

  .mobile-page-title {
    padding: 0.5rem 1rem;
  }

  .page-title-label {
    font-size: 0.9rem;
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
  transform: translateY(0);
}

.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(0);
}
</style>
