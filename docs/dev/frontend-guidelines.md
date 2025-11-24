# フロントエンド実装ガイド

## Vue SFC/Composition API
- `<script setup>` を基本とし、`ref`/`computed`/`watch`/`onMounted` を用いたリアクティブ制御を徹底。
- グローバル登録は最小限（Font Awesome のみ）。アイコンは `<fa :icon=\"['fas','arrow-right']\" />`。
- ページ枠は `App.vue` が保持し、各 `views` はコンテンツのみを描画。共有スタイルは `src/assets/main.css`。
- 既存の DOM 直接操作は互換のため許容。新規はクラス/スタイルをバインドで管理。

## ルーティング
- `createWebHistory()` を使用。ルート例: `/`→`Home.vue`、`/about`・`/creatives` は動的 import、`/:pathMatch(.*)*` は `404.vue`。
- `<transition name=\"slide\" mode=\"out-in\">` で軽量遷移。スクロール制御は各ビューに限定。
- SPA フォールバックは dev/prod 共に有効（サーバ側設定を忘れない）。

## 国際化（vue-i18n）
- 設定: `legacy:false`, `locale:'ja'`, `fallbackLocale:'en'`, `globalInjection:true`, `warnHtmlMessage:false`。
- ロード: `ja` を同期、`en` は `requestIdleCallback` で遅延し `setLocaleMessage('en', ...)`。
- 翻訳追加は `locales/ja.json` と `locales/en.json` の両方を更新。英語は遅延後に反映。
- Vite `define` で `__VUE_I18N_*` を最小化する。

## 新規ページ追加チェック
- ページは `src/views/Name.vue` を追加し、必ず動的 import。
- ルート登録とプリロードスケジュールを更新。
- 両言語の翻訳キーを追加。
- `Navbar.vue` / `SpNav.vue` のリンクとアニメーション遅延を調整。
- GSAP 等の重い依存はページ側で動的 import し、フェード+Y移動の既定アニメーションを踏襲。
- 540px 以下のレスポンシブ崩れを確認し、`pointer-events` を適切に設定。***
