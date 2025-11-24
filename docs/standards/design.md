# デザインガイド

## カラーパレット
- 背景: `--vt-c-yellow` `#f0d300`（グラデーション開始）, `--vt-c-yellow-strong` `#d7a800`（終了）。
- アクセント/プライマリ: `--vt-c-blue` `#4faef2`（`--mpuraza-acsent`, `--primary-color`）。
- ベース: `--vt-c-black` `#181818`, `--vt-c-white-soft` `#f8f8f8`, `--vt-c-white-mute` `#f2f2f2`.
- 文字色: `#111` を基本。リンク hover はアクセントで強調。

## タイポグラフィ
- フォント: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`。
- ベースサイズ: 16px。見出し目安: `h1 2.5rem`, `h2 1.8rem`（モバイルは適宜縮小）。
- テキストは `locales/` 経由で管理し、直書きを避ける。

## レイアウトと背景
- 背景はイエロー系の135°グラデーション（`var(--vt-c-yellow)`→`var(--vt-c-yellow-strong)`）。
- `App.vue` がルーティング枠を持ち、各ビューはコンテンツのみを描画。`#back` に MetaBall を固定配置。
- 余白: body padding 1rem を基準に、セクションは内側で適宜調整。

## リンクとアクセント
- リンクは下線つき、文字色 `#111`。hover でアクセント色に変化。
- CTA や強調要素は `--primary-color` を使用し、一貫した色調を保つ。

## 画像とアセット
- サムネイルは WebP 推奨。ロゴは low→high の段階的切替を前提にプリロード（`logo-low.webp` → `logo.webp`）。
- アセット参照は `new URL('@/assets/foo.webp', import.meta.url).href` で静的解決。

## モーション
- ページ遷移は `<transition name="slide" mode="out-in">` の軽量アニメーション。
- オープナーやナビのアニメーションは ease-in-out を基調に、過度なモーションを避ける。
- GSAP 等の重い演出は動的 import とし、LCP を阻害しない。

## アクセシビリティ
- コントラストはイエロー背景上で黒系テキストを基本とし、フォーカス可視性を維持。
- 画像に `alt`、ナビゲーションに `aria-*` を付与。

## 国際化・レスポンシブ
- i18n を前提にテキスト長可変を許容する余白を取る。
- モバイル（~540px）は見出し/余白を縮小し、クリック領域を確保。`pointer-events` を適切に設定。***
