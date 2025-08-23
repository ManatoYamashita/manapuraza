import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'
// MetaBallは初期描画のクリティカルパス外なので、アイドル時に遅延読み込みする

// FontAwesomeを必要なものだけに絞り込み
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faArrowUpRightFromSquare, 
  faArrowRight, 
  faFilm, 
  faCode, 
  faPalette, 
  faVideo, 
  faPlay, 
  faGlobe,
  faEnvelope, 
  faLink,
  faUsers,
  faShareNodes,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faDiscord 
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// アイコンをライブラリに追加
library.add(
  faLink, 
  faEnvelope, 
  faGithub, 
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faDiscord, 
  faArrowUpRightFromSquare, 
  faArrowRight,
  faFilm,
  faCode,
  faPalette,
  faVideo,
  faPlay,
  faGlobe,
  faUsers,
  faShareNodes,
  faCalendar
);

// Vue-i18n最適化版を使用（Tree shaking最適化）
const setupI18n = async () => {
  // 標準版を使用（message-compiler含む、但し遅延読み込みで最適化）
  const { createI18n } = await import('vue-i18n');
  
  // 初期は日本語のみ読み込み、英語はアイドル時に遅延読み込み
  const ja = await import('/locales/ja.json');
  
  const i18n = createI18n({
    legacy: false, // Vue2の互換性を無効化（軽量化）
    locale: 'ja',
    fallbackLocale: 'en',
    globalInjection: true, // $t関数エラー修正のため有効化に復元
    silentTranslationWarn: true, // 警告メッセージを削減
    silentFallbackWarn: true,
    warnHtmlMessage: false, // HTML警告無効化（軽量化）
    escapeParameter: false, // エスケープ処理無効化（軽量化）
    messages: {
      ja: ja.default
    }
  });
  
  // アイドル時に英語辞書を読み込み、フォールバックを有効化
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  schedule(async () => {
    const en = await import('/locales/en.json');
    i18n.global.setLocaleMessage('en', en.default);
  });

  return i18n;
}

const app = createApp(App);
const navbar = createApp(Navbar);

app.component('fa', FontAwesomeIcon);
app.component('font-awesome-icon', FontAwesomeIcon);
navbar.component('font-awesome-icon', FontAwesomeIcon);
// metaball側のコンポーネント登録は遅延読み込み時に設定する

app.use(router);
navbar.use(router);
// metaballのルーター適用は遅延読み込み時に設定する

// i18nを遅延読み込み（$t関数エラー修正版）
setupI18n().then(i18n => {
  // provide/injectパターンを削除し、通常の使用方法に復元
  app.use(i18n);
  navbar.use(i18n);

  app.mount('#app');
  navbar.mount('#navbar');

  // メインCSSの環境対応読み込み（開発・プロダクション統一）
  const loadMainCSS = () => {
    if (import.meta.env.DEV) {
      // 開発環境：従来の動的読み込み
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/assets/main.css';
      document.head.appendChild(link);
    } else {
      // プロダクション環境：静的インポートで確実に読み込み
      import('/src/assets/main.css').catch(err => {
        // フォールバック：基本スタイルの確保
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.fontFamily = 'system-ui, sans-serif';
      });
    }
  };

  // 画面の初期描画完了後に背景の重いthree.jsを読み込む
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  // CSSを先に読み込み
  schedule(() => {
    loadMainCSS();
  });
  
  schedule(async () => {
    const { default: MetaBall } = await import('@/components/MetaBall.vue');
    const metaball = createApp(MetaBall);
    metaball.component('font-awesome-icon', FontAwesomeIcon);
    metaball.use(router);
    metaball.use(i18n);
    metaball.mount('#back');
  });
});

// Media Session APIの遅延設定
if ('mediaSession' in navigator) {
  // ページ読み込み完了後に実行
  window.addEventListener('load', () => {
    navigator.mediaSession.setActionHandler('play', function() {
      // 再生処理
    });
    
    navigator.mediaSession.setActionHandler('pause', function() {
      // 一時停止処理
    });
    
    navigator.mediaSession.setActionHandler('previoustrack', function() {
      // 前のトラックへ
    });
    
    navigator.mediaSession.setActionHandler('nexttrack', function() {
      // 次のトラックへ
    });
  });
}