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
  faLink 
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
  faGlobe
);

// 遅延インポートのため関数化
const setupI18n = async () => {
  const { createI18n } = await import('vue-i18n');
  // 初期は日本語のみ読み込み、英語はアイドル時に遅延読み込み
  const ja = await import('/locales/ja.json');
  
  const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
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

// i18nを遅延読み込み
setupI18n().then(i18n => {
  app.use(i18n);
  navbar.use(i18n);

  app.mount('#app');
  navbar.mount('#navbar');

  // 初期レンダリング完了後にメインCSSを遅延読み込み
  const loadMainCSS = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/assets/main.css';
    document.head.appendChild(link);
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