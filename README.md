# MANAPURAZA.COM 🍌（山下マナト Webポートフォリオ）

<div align="center">
  <img src="./public/ogp.jpg" alt="OGP image" width="500" style="border-radius: 12px; box-shadow: 0 4px 15px rgba(255, 152, 79, 0.5);">
  
  [![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-latest-000000?style=flat-square&logo=three.js)](https://threejs.org/)
  [![i18n](https://img.shields.io/badge/i18n-Supported-success?style=flat-square)](https://vue-i18n.intlify.dev/)
</div>

## About

就活のための山下マナトWebポートフォリオサイト。東京都市大学の在学中（2021年 ~ 2024年）に制作したクリエイティブワークスをまとめています。
広告制作会社[株式会社パズル](https://puzzle-inc.jp)でのエンジニアインターン（2023年11月）を通じて、さらなる改善を重ねています。

### Deployment

- **最新版**: [manapuraza.com](https://manapuraza.com)
- **初期版**: [ver1.0](https://manapuraza-s0y8f8i94-manatoyamashita.vercel.app)

## Tech

- **Frontend**
  - Vue.js 3 (Composition API)
  - Vite
  - Vue Router
  - Vue I18n
  - Three.js
  - GSAP
  - Font Awesome

- **Deployment / Inflactractures**

  - GitHub Actions (CI/CD)
  - FTPサーバ（本番環境）
  - Vercel（デモ環境）

## Design

<img alt="manapuraza.com is support responsive design." src="https://github.com/user-attachments/assets/4de9da7b-453c-4974-8d88-4dfee0d39830" width="400" />

### Concept

- **Grassmorphism**: Apple製品からインスピレーションを得た現代的なUIデザイン, グラスモーフィズム
- **Color**:
  - メインカラー: イエロー/オレンジ（バナナをモチーフ）
  - アクセントカラー: 水色（補色による調和）
- **Responsive design**: モバイルファーストアプローチ

### UX/UI設計原則

- **直感的ナビゲーション**: ユーザーの探索をサポートする明確な情報階層
- **モバイル最適化**: 親指が届きやすい位置にメニューを配置
- **パフォーマンス**: 軽量なトランジションアニメーション

## Main functions

### Home

- インタラクティブな3Dバックグラウンド（Three.js）
- マウスインタラクションによるカメラアングル変更
- スムーズなアニメーション

### About

- 経歴/スキルの視覚的プレゼンテーション
経歴はオブジェクト形式で管理

### Creatives

- カテゴリー別ポートフォリオ表示
コンテンツは`data/creatives.json`で管理して取得しています。cmsの導入を検討中です。
  - アニメーション制作
  - グラフィックス/イラスト
  - プログラミング/Web開発
  - その他映像制作
- インタラクティブなホバーエフェクト
- オリジナルキャラクター「でじこんちゃん」のアニメーション

## 国際化対応

Vue i18nプラグインを用いて、サイトは以下の言語に対応しています：

- 🇯🇵 日本語
- 🇺🇸 英語

## Next Actions

- [ ] ダークモードの実装
- [ ] でじこんちゃんのインタラクション強化
- [ ] JAMstackベースのブログ機能
- [ ] パフォーマンス最適化（Lighthouseの結果にパフォーマンス項目に改善の余地あり）
- [ ] アクセシビリティの向上

## 🛠Process

### Data Flow

```mermaid
graph LR
    A[データ取得] --> B[コンポーネント]
    B --> C[状態管理]
    C --> D[コンポーネント]
    D --> E[表示]
```

- Vueコンポーネントによる状態管理
- プロップスとイベントによる親子間通信
- Composition APIを活用した再利用可能なロジック

### パフォーマンス最適化

<img width="500" alt="lighthouse-desktop" src="https://github.com/user-attachments/assets/0408da41-f59b-4949-9969-f991969e198f" />
<img width="500" alt="lighthouse-mobile" src="https://github.com/user-attachments/assets/e8379745-5b96-4703-86da-73d5830483ab" />


- 画像の遅延読み込み（`loading="lazy"`）
- 動的インポートによるコード分割
- アセットの最適化（WebP形式の使用）

### セキュリティ考慮事項

- クロスサイトスクリプティング（XSS）対策
- コンテンツセキュリティポリシー（CSP）の実装
- 適切なCORS設定

### CI/CD

```mermaid
graph LR
    A[Push to main] --> B[GitHub Actions]
    B --> C[インストール]
    C --> D[ビルド]
    D --> E[FTPデプロイ]
```

### バージョン管理

- Node.js v18.17.0を使用
- npm v8.1.0を使用
- ESLint/Prettierによるコードフォーマット

### セキュリティ考慮事項

- クロスサイトスクリプティング（XSS）対策
- コンテンツセキュリティポリシー（CSP）の実装
- 適切なCORS設定

## ライセンス

© 2022~ Manato Yamashita. All Rights Reserved.

---
*最終更新: 2025/03/30*
