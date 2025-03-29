import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue'
import MetaBall from './components/MetaBall.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare, faArrowRight, faFilm, faCode, faPalette, faVideo, faPlay, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 必要なアイコンをインポート
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

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

import { createI18n } from 'vue-i18n';
import en from '/locales/en.json';
import ja from '/locales/ja.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja
  }
});

library.add(faArrowUpRightFromSquare)

const app = createApp(App)
const navbar = createApp(Navbar)
const metaball = createApp(MetaBall)
app.component('fa', FontAwesomeIcon)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
navbar.use(router)
metaball.use(router)
app.use(i18n);
navbar.use(i18n);
metaball.use(i18n);

app.mount('#app')
navbar.mount('#navbar')
metaball.mount('#back')