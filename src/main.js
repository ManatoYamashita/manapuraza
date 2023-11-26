import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/navbar.vue'
import MetaBall from './components/MetaBall.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createI18n } from 'vue-i18n';
import en from '/locales/en.json';
import ja from '/locales/ja.json';

const i18n = createI18n({
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

app.use(router)
navbar.use(router)
metaball.use(router)
app.use(i18n);
navbar.use(i18n);

app.mount('#app')
navbar.mount('#navbar')
metaball.mount('#back')