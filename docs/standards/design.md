# デザインガイド

## カラーパレット
- 背景: `--manapuraza-yellow` `#f0d300`（メインイエロー）, `--manapuraza-yellow-strong` `#d7a800`（濃いイエロー）。
- アクセント/プライマリ: `--manapuraza-acsent` および `--manapuraza-primary-color` は `--manapuraza-yellow` を参照（統一イエロー）。
- ベース: `--manapuraza-black` `#181818`, `--manapuraza-white-soft` `#f8f8f8`, `--manapuraza-white-mute` `#f2f2f2`.
- 文字色: `#111` を基本。リンク hover はアクセントで強調。

## タイポグラフィ
- フォント: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`。
- ベースサイズ: 16px。見出し目安: `h1 2.5rem`, `h2 1.8rem`（モバイルは適宜縮小）。
- テキストは `locales/` 経由で管理し、直書きを避ける。

## レイアウトと背景
- 背景は単色イエロー（`var(--manapuraza-yellow)` `#f0d300`）。点滅を避けるため、グラデーションは使用しない。
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

## アクティブ状態のデザインパターン

### デスクトップナビゲーション

アクティブページリンクには以下のスタイルを適用：

```css
.nav-link.router-link-active {
  color: #d7a800; /* ダークイエロー */
  text-shadow: 
    #f0d300 0 0px 1rem,   /* 内側グロー */
    #f0d300 0 0px 2rem;   /* 外側グロー */
  font-weight: 900;
}
```

**特徴**:
- 2層のtext-shadow（1rem + 2rem）で立体的なグロー効果
- フォントウェイト900で他のリンク（700）より強調
- ブランドカラー（#d7a800 + #f0d300）の組み合わせ

### モバイルメニュー

モバイルメニューのアクティブページには、より豊かな視覚的フィードバックを提供：

```css
.mobile-menu-link.router-link-active {
  background: rgba(240, 211, 0, 0.15); /* 薄いイエロー背景 */
  color: #d7a800; /* ダークイエロー */
  font-weight: 900;
  text-shadow:
    0 0 12px rgba(240, 211, 0, 0.8),   /* 内側の強いグロー */
    0 0 24px rgba(240, 211, 0, 0.4);   /* 外側の柔らかいグロー */
}
```

#### 下線エフェクト

アクティブページには、グラデーション下線を追加：

```css
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
    #d7a800 20%,    /* 左側フェード */
    #d7a800 80%,    /* 中央部分は濃い */
    transparent     /* 右側フェード */
  );
  box-shadow: 0 0 8px rgba(240, 211, 0, 0.6);
}
```

**デザイン原則**:
- **背景**: 薄いイエロー（`rgba(240, 211, 0, 0.15)`）で控えめに強調
- **グロー**: 内側12px（強）+ 外側24px（弱）の2層構造
- **下線**: 中央60%幅、両端フェードアウトで洗練された印象
- **レスポンシブ**: 400px以下で下線を70%幅、1.5px高さに調整

#### レスポンシブ調整

```css
@media screen and (max-width: 400px) {
  .mobile-menu-link.router-link-active::after {
    width: 70%;
    height: 1.5px;
    bottom: 0.4rem;
  }
}
```

### ブランドカラー使用戦略

| 要素 | 色 | 用途 |
|------|-----|-----|
| 文字色 | `#d7a800` | アクティブ状態の主要文字色 |
| グロー（内側） | `#f0d300` | 強い発光効果 |
| グロー（外側） | `rgba(240, 211, 0, 0.4)` | 柔らかい広がり |
| 背景 | `rgba(240, 211, 0, 0.15)` | 薄い強調背景 |
| 下線 | `#d7a800` | グラデーション下線の中央部 |

### デザイン実装のポイント

1. **視覚的一貫性**: デスクトップとモバイルで同じブランドカラーとグロー手法を使用
2. **階層的強調**: 背景（薄い）→ グロー（中）→ 下線（強）で段階的に強調
3. **パフォーマンス**: `text-shadow` と `::after` 擬似要素のみで実装、重いエフェクト不使用
4. **アクセシビリティ**: コントラスト比を確保しつつ、視認性を最大化

## アクセシビリティ
- コントラストはイエロー背景上で黒系テキストを基本とし、フォーカス可視性を維持。
- 画像に `alt`、ナビゲーションに `aria-*` を付与。

## 国際化・レスポンシブ
- i18n を前提にテキスト長可変を許容する余白を取る。
- モバイル（~540px）は見出し/余白を縮小し、クリック領域を確保。`pointer-events` を適切に設定。***
