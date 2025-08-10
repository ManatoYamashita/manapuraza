import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'
import MetaBall from '@/components/MetaBall.vue'

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
  const en = await import('/locales/en.json');
  const ja = await import('/locales/ja.json');
  
  return createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
      en: en.default,
      ja: ja.default
    }
  });
}

const app = createApp(App);
const navbar = createApp(Navbar);
const metaball = createApp(MetaBall);

app.component('fa', FontAwesomeIcon);
app.component('font-awesome-icon', FontAwesomeIcon);
navbar.component('font-awesome-icon', FontAwesomeIcon);
metaball.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
navbar.use(router);
metaball.use(router);

// i18nを遅延読み込み
setupI18n().then(i18n => {
  app.use(i18n);
  navbar.use(i18n);
  metaball.use(i18n);
  
  app.mount('#app');
  navbar.mount('#navbar');
  metaball.mount('#back');
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