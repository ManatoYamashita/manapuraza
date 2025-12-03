# デザインシステム | MANAPURAZA.COM

**最終更新:** 2025年11月

このドキュメントは、MANAPURAZA.COMのデザインシステム全体を定義します。カラーパレット、タイポグラフィ、スペーシング、コンポーネント設計原則など、一貫したデザイン言語を維持するためのガイドラインです。

---

## 1. カラーシステム

### 1.1 プライマリカラー

**黄色（Primary Yellow）**
- **用途:** ブランドカラー、ホバー効果、アクセント
- **変数:** `--vt-c-yellow`, `--primary-color`, `--mpuraza-acsent`
- **値:** `#f0d300`
- **使用例:** メニューホバー、言語トグル、プログレスバー

**濃い黄色（Dark Yellow / Accent）**
- **用途:** ホバー時のテキスト色、視認性が必要な場面
- **値:** `#d7a800`
- **使用例:** `.nav-link:hover`, `.mobile-menu-link:hover`
- **アクセシビリティ:** 白背景上で十分なコントラスト比を確保（WCAG AA準拠）

### 1.2 セカンダリカラー

**オレンジ（Secondary Orange）**
- **用途:** グラデーション、装飾的なアクセント
- **値:** `#ff984f`
- **使用例:** プログレスバーグラデーション

### 1.3 背景色

**白（White Background）**
- **用途:** メインの背景色
- **変数:** `--color-background`
- **値:** `#ffffff`
- **実装:** `body { background: #ffffff; }`

**ガラスモーフィズム背景**
- **用途:** コンテンツカード、ナビゲーション要素
- **値:** `rgba(255, 255, 255, 0.18)`
- **効果:** `backdrop-filter: blur(20px)`

### 1.4 テキストカラー

**ベーステキスト（黒）**
- **用途:** 本文、見出し、メニュー項目
- **変数:** `--color-text`
- **値:** `#111` または `#000`
- **使用例:** `.nav-link { color: #000; }`

**グレー（補助テキスト）**
- **用途:** 区切り線、セパレーター
- **値:** `#666`, `#333`
- **使用例:** `.home-nav-link:not(:last-child)::after { color: #666; }`

### 1.5 旧カラー（参考・非推奨）

**青（旧プライマリ）**
- **値:** `#4faef2`
- **状態:** 2025年11月のリブランドにより非推奨
- **用途:** レガシーコード参照用のみ

---

## 2. タイポグラフィシステム

### 2.1 フォントファミリー

**プライマリフォント**
```css
font-family: Inter, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, Oxygen, Ubuntu,
             Cantarell, 'Fira Sans', 'Droid Sans',
             'Helvetica Neue', sans-serif;
```

- **優先度:** Inter → システムフォント → フォールバック
- **レンダリング:** `text-rendering: optimizeLegibility`
- **スムージング:** `-webkit-font-smoothing: antialiased`

### 2.2 フォントサイズスケール

| 要素 | サイズ | ウェイト | 用途 |
|------|--------|----------|------|
| Body | `16px` | normal | ベーステキスト |
| Desktop Nav | `1.4rem` (22.4px) | bold | デスクトップメニュー |
| Mobile Nav | `1.3rem` (20.8px) | bold | モバイルメニュー |
| Home Menu | `1.3rem` (20.8px) | bold | ホームページメニュー |
| Mobile Lang | `0.75rem` (12px) | 500 | モバイル言語表示 |
| Desktop Lang | `0.8rem` (12.8px) | 600 | デスクトップ言語表示 |

### 2.3 ライン高さ

- **ベース:** `line-height: normal`
- **垂直テキスト:** `line-height: 1.2` (縦書きモード)

### 2.4 フォントウェイト

- **Normal:** `400` - 本文テキスト
- **Medium:** `500` - 補助テキスト
- **Semi-Bold:** `600` - 強調テキスト
- **Bold:** `bold` (700) - メニュー、見出し

---

## 3. スペーシングシステム

### 3.1 基本スペーシングスケール

| 名称 | 値 | 用途 |
|------|-----|------|
| XXS | `0.125rem` (2px) | 超密接要素 |
| XS | `0.25rem` (4px) | 密接要素 |
| S | `0.5rem` (8px) | 小間隔 |
| M | `1rem` (16px) | 標準間隔 |
| L | `1.5rem` (24px) | 大間隔 |
| XL | `2rem` (32px) | セクション間隔 |
| XXL | `3rem` (48px) | 大セクション間隔 |

### 3.2 コンポーネント別スペーシング

**デスクトップナビゲーション**
- Gap（通常）: `1rem`
- Gap（760px以下）: `0.5rem`
- Gap（720px以下）: `0.25rem`

**モバイルメニュー**
- Padding: `2rem 1rem`
- Gap（横並び）: `2rem`

**ホームメニュー**
- Gap（デスクトップ）: `3rem`
- Gap（タブレット）: `2rem`
- Divider位置: `right: -1.5rem`

---

## 4. レイアウトシステム

### 4.1 ブレークポイント

| デバイス | 幅 | メディアクエリ |
|----------|-----|----------------|
| モバイル | ≤540px | `@media (max-width: 540px)` |
| タブレット | 541px - 768px | `@media (min-width: 541px) and (max-width: 768px)` |
| 小デスクトップ | 769px - 1200px | `@media (min-width: 769px) and (max-width: 1200px)` |
| デスクトップ | 1201px+ | `@media (min-width: 1201px)` |

**重要境界値:**
- **540px:** モバイル/デスクトップナビゲーション切り替え
- **720px:** ロゴサイズ最小化対応
- **760px:** ナビゲーション圧縮対応

### 4.2 コンテナ幅

**メインコンテナ (`.app`)**
- デスクトップ: `85vw` (最大 `1280px`)
- モバイル: `90vw`
- 高さ: `80vh` (デスクトップ), `70vh` (モバイル)

**ロゴ幅（デスクトップ）**
- 標準: `clamp(180px, 40vw, 300px)`
- 小画面（720px）: `clamp(100px, 25vw, 160px)`
- 中画面（760px）: `clamp(120px, 30vw, 180px)`
- 大画面（1201px+）: `clamp(200px, 42vw, 320px)`

### 4.3 Z-Index階層

| 要素 | Z-Index | 説明 |
|------|---------|------|
| Background | 1 | MetaBall背景 |
| Menu | 10 | ヘッダーメニュー |
| Nav Links | 11 | ナビゲーションリンク |
| Home Menu | 15 | ホームページメニュー |
| Mobile Menu | 100 | モバイルメニュー（固定） |
| Progress Bar | 9999 | ナビゲーションプログレスバー |

---

## 5. コンポーネント設計原則

### 5.1 ガラスモーフィズム効果

**標準ガラスカード (`.glass`)**
```css
background-color: rgba(255, 255, 255, 0.18);
border: 1px solid rgba(255, 255, 255, 0.4);
border-right-color: rgba(255, 255, 255, 0.2);
border-bottom-color: rgba(255, 255, 255, 0.2);
border-radius: 15px;
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5);
```

**適用箇所:**
- メインコンテンツカード (`.app.glass`)
- ナビゲーション要素

### 5.2 ホバー効果

**テキストリンクホバー（標準）**
```css
.nav-link:hover {
  color: #d7a800;
  text-shadow: #f0d300 0 0px 1rem;
  animation: glow 0.3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: #f0d300 0 0px 1rem; }
  to { text-shadow: #f0d300 0 0px 2rem, #f0d300 0 0px 3rem; }
}
```

**適用箇所:**
- デスクトップナビゲーション (`.nav-link`)
- モバイルメニュー (`.mobile-menu-link`)
- ホームメニュー (`.home-nav-link`)

### 5.3 トランジション

**標準トランジション**
- Duration: `0.3s` または `0.4s`
- Timing: `ease`, `ease-in-out`
- Properties: `color`, `text-shadow`, `opacity`, `transform`

**ページ遷移**
```css
.slide-enter-active { animation: slide-in 0.2s cubic-bezier(0,.94,.57,1.02); }
.slide-leave-active { animation: slide-out 0.2s cubic-bezier(0,.94,.57,1.02); }
```

---

## 6. アニメーションシステム

### 6.1 初回ロードアニメーション

**ナビゲーションフェードイン**
- Delay: `1s`
- Duration: `0.8s`
- Timing: `ease-out`
- Pattern: Staggered（0.2s間隔）

**モバイルメニューフェードイン**
- Delay: `1s`
- Duration: `0.5s`
- Timing: `ease-in-out`

### 6.2 ロゴアニメーション

**スライドトランジション**
```css
.slide-enter-from, .slide-leave-to {
  transform: translateY(100%);
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
  transition-delay: 500ms;
}
```

### 6.3 プログレスバーアニメーション

**グラデーション波**
```css
@keyframes gradient-wave {
  0% { background-position: 200% 50%; }
  100% { background-position: -200% 50%; }
}

.progress-fill {
  background: linear-gradient(90deg, #f0d300, #ff984f, #f0d300);
  background-size: 200% 100%;
  animation: gradient-wave 1.5s ease-in-out infinite;
}
```

---

## 7. レスポンシブデザイン原則

### 7.1 デスクトップ（>540px）

- Flexbox水平レイアウト
- ロゴ左寄せ、メニュー中央、言語切替右端
- ホバー効果有効
- 垂直読みテキスト（言語表示）

### 7.2 モバイル（≤540px）

- 固定下部メニュー
- 横並び3アイテム
- タップターゲット最小48px
- ホームページメニュー非表示
- 言語切替は水平レイアウト

### 7.3 タッチターゲット

**最小サイズ:** 48x48px（WCAG推奨）
- モバイルメニューリンク: `padding: 2rem 1rem`
- 言語トグルスイッチ: `40x24px` (デスクトップ), `24x40px` (垂直)

---

## 8. デザイントーン・原則

### 8.1 デザイン哲学

**ミニマリズム**
- 装飾を最小限に
- 必要な要素のみを配置
- 余白を活用した視覚的な呼吸

**モダン**
- ガラスモーフィズム効果
- スムーズなアニメーション
- WebP画像、最新CSS機能の活用

**シンプル**
- 直感的なナビゲーション
- 明確な視覚階層
- 一貫したインタラクション

### 8.2 アクセシビリティ原則

**コントラスト**
- テキスト/背景: 最低4.5:1（WCAG AA）
- ホバー時濃い黄色使用でコントラスト確保

**フォーカス可視性**
- キーボードナビゲーション対応
- フォーカス状態の明確な視覚表現

**セマンティック構造**
- 適切なHTML5要素使用
- ARIA属性の適切な付与

---

## 9. コンポーネントライブラリ

### 9.1 ナビゲーションコンポーネント

**Desktop Navigation**
- Component: `Menu.vue` → `.desktop-nav`
- Layout: Flexbox horizontal
- Responsive: >540px
- Key Features: Logo, Nav Links, Language Toggle

**Mobile Navigation**
- Component: `Menu.vue` → `.mobile-nav` + `.mobile-bottom-menu`
- Layout: Fixed bottom, Flexbox horizontal
- Responsive: ≤540px
- Key Features: Header Logo, Language Toggle, Bottom Menu

**Home Navigation**
- Component: `App.vue` → `.home-nav-links`
- Layout: Absolute center, Flexbox horizontal
- Visibility: Home page only
- Key Features: Central menu below logo

### 9.2 言語切替コンポーネント

**Desktop Language Toggle**
- Layout: Vertical switch with vertical text
- Size: 24x40px (vertical)
- Text: Vertical reading (縦書き)

**Mobile Language Toggle**
- Layout: Horizontal switch with label
- Size: 40x24px (horizontal)
- Text: Horizontal label

---

## 10. パフォーマンス最適化

### 10.1 プログレッシブローディング

**ロゴ画像**
- Low quality: `logo-low.webp` (初期表示)
- High quality: `logo.webp` (遅延ロード)
- Transition: Smooth fade with opacity/scale

### 10.2 アニメーション最適化

**requestIdleCallback使用**
- 非クリティカルなアニメーションは遅延実行
- Three.js MetaBallは`requestIdleCallback`で読み込み

**CSS Hardware Acceleration**
- `transform` プロパティ優先使用
- `will-change` の適切な使用

---

## 11. 多言語対応（i18n）

### 11.1 テキスト管理

**翻訳キー命名規則**
- Pattern: `{section}.{subsection}.{item}`
- Example: `navbar.menu.about`, `creatives.dev.manapuraza.title`

**サポート言語**
- Primary: 日本語 (`ja`)
- Secondary: 英語 (`en`)

### 11.2 レイアウト考慮

- テキスト長の可変性を考慮した余白設計
- Flexboxによる柔軟なレイアウト
- 長いテキストでも破綻しないデザイン

---

## 12. ブランドガイドライン

### 12.1 ロゴ使用規則

**サイズ**
- Minimum: 80px width (極小画面)
- Standard: 180px - 300px width
- Maximum: 320px width (大画面)

**配置**
- Desktop: Header left
- Mobile: Header left (scaled down)
- Home: Center (large, 500px)

**クリアスペース**
- 周囲に最低0.5rem のマージン確保

### 12.2 カラー使用優先順位

1. **Primary Yellow (#f0d300)** - ブランド表現の第一選択
2. **Dark Yellow (#d7a800)** - ホバー、強調時
3. **Orange (#ff984f)** - 装飾、グラデーション
4. **White (#ffffff)** - 背景
5. **Black (#111, #000)** - テキスト

---

## 13. ファイル構成・実装参照

### 13.1 主要CSSファイル

| ファイル | 役割 |
|----------|------|
| `src/assets/base.css` | CSS変数定義、グローバルスタイル |
| `src/components/Menu.vue` | ナビゲーションスタイル |
| `src/App.vue` | アプリケーション全体、ホームメニュー |

### 13.2 CSS変数一覧

```css
:root {
  --manapuraza-yellow: #f0d300; /* メインイエロー */
  --manapuraza-yellow-strong: #d7a800; /* 濃いイエロー */
  --manapuraza-white-soft: #f8f8f8;
  --manapuraza-white-mute: #f2f2f2;
  --manapuraza-black: #181818;
  --color-background: #ffffff;
  --manapuraza-acsent: var(--manapuraza-yellow);
  --manapuraza-primary-color: var(--manapuraza-yellow);
  --color-text: #111;
}
```

**注意**: `--vt-c-*` プレフィックスは廃止されました。全てのCSS変数は `--manapuraza-*` プレフィックスに統一されています。

---

## 14. 変更履歴

### 2025年12月 - CSS変数命名規則統一

**変更内容:**
- CSS変数プレフィックスを `--vt-c-*` から `--manapuraza-*` に統一
- 背景グラデーションを単色イエロー（`#f0d300`）に変更（点滅防止）
- `--mpuraza-acsent` のスペルミスを `--manapuraza-acsent` に修正
- 不要な `--vt-c-blue` 定義を削除

**影響範囲:**
- `index.html` (インラインCSS)
- `src/assets/base.css`
- `src/assets/main.css`
- `src/views/UnderConstraction.vue`
- `src/views/404.vue`

### 2025年11月 - メジャーリブランド

**変更内容:**
- 背景色を黄色グラデーションから白に変更
- プライマリカラーを青から黄色に変更
- モバイルメニューを円形から横並びリストに簡素化
- ホバー効果を黄色ベースに統一
- アクセシビリティ改善（コントラスト比向上）

**影響範囲:**
- `src/assets/base.css`
- `src/components/Menu.vue`
- `src/App.vue`
- `locales/ja.json`, `locales/en.json`

---

## 15. 今後の拡張予定

### 15.1 ダークモード対応（検討中）

- `@media (prefers-color-scheme: dark)` 対応
- 黄色カラーの明度調整
- 背景を黒系に変更

### 15.2 追加ブレークポイント

- 大画面（1920px+）対応
- 超小画面（320px）対応

---

**最終更新日:** 2025年11月29日
**バージョン:** 2.0
**メンテナンス:** 山下マナト
