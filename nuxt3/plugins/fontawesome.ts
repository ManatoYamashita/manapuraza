/**
 * Font Awesome アイコンプラグイン
 *
 * 必要なアイコンのみを選択的にインポートし、バンドルサイズを最適化
 * 既存のVue 3プロジェクトから移行
 */

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Solid Icons
import {
  faArrowUpRightFromSquare,
  faArrowRight,
  faArrowLeft,
  faFilm,
  faCode,
  faPalette,
  faVideo,
  faPlay,
  faGlobe,
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faCheck,
  faEnvelope,
  faLink,
  faUsers,
  faShareNodes,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';

// FontAwesomeのCSS自動追加を無効化（Nuxt 3ではCSSは別途管理）
config.autoAddCss = false;

// アイコンをライブラリに追加
library.add(
  // Solid
  faLink,
  faEnvelope,
  faArrowUpRightFromSquare,
  faArrowRight,
  faArrowLeft,
  faFilm,
  faCode,
  faPalette,
  faVideo,
  faPlay,
  faGlobe,
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faCheck,
  faUsers,
  faShareNodes,
  faCalendar,
  // Brands
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faDiscord
);

export default defineNuxtPlugin((nuxtApp) => {
  // FontAwesomeIconコンポーネントをグローバル登録
  nuxtApp.vueApp.component('fa', FontAwesomeIcon);
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
