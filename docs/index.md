# ドキュメント索引と運用ルール

## 運用原則
- `docs/` は知見とルールの唯一のソース・オブ・トゥルースです。
- 直下に置けるファイルは本索引 `docs/index.md` のみ。他のドキュメントは必ずサブディレクトリに配置します。
- サブディレクトリは必要最小限に留め、命名は `kebab-case` に統一します。
- 追加・更新時は本索引を必ず更新し、重複やリンク切れをチェックします。
- 機密情報（PII 等）は保存禁止。コミット時は `DOC:` プレフィックスを推奨します。

## ディレクトリ構成（最小セット）
- `standards/`: コーディング規約や共通ルール。
- `ops/`: 運用・手順書やチェックリスト。
- `analytics/`: アクセス解析・トラッキング設定ガイド。
- `migration/`: 技術スタック移行ガイド。（NEW - 2025/12/14）

## ドキュメント一覧
- standards/architecture.md — エントリ/初期化/責務分離とフォールバック方針。
- standards/frontend-guidelines.md — Vue SFC規約、ルーティング、i18n、新規ページ追加の手順。
- standards/design.md — カラー/フォント/背景/モーションなどのデザイン指針。
- standards/performance-and-build.md — 遅延/分割、アセット方針、Three.js、ビルド設定。
- standards/security-and-seo.md — セキュリティ、アクセシビリティ、SEO/アナリティクス。
- standards/coding-standards.md — コーディングスタイルとレビュー/コミットの基本。
- ops/deployment-checklist.md — デプロイ前後の確認項目とトラブルシュート。
- ops/creatives-guide.md — `src/data/creatives.js` の作品データ管理手順（animation/development/illustration/video、detail オブジェクト、詳細ページルーティング `/creatives/:category/:id`）。
- ops/branch.md — ブランチ戦略、GitHub Actions CI/CD、コミットメッセージ規約。
- analytics/ga4-setup.md — Google Analytics 4 (GA4) の完全セットアップガイド（GTM経由、サブドメイン対応）。
- analytics/ga4-vue-integration.md — Vue.js 3 × GA4 統合実装ガイド（Composable、イベント送信パターン）。
- **migration/nuxt3-migration.md** — **Nuxt 3 + TypeScript 完全移行ガイド**（SSR対応、型定義、Nitro Server、デプロイ戦略）。（NEW - 2025/12/14）
- **migration/typescript-guide.md** — **TypeScript Strict Mode 導入ガイド**（型定義設計、ベストプラクティス、既存コードの型付け戦略）。（NEW - 2025/12/14）

## 更新手順（PDCA）
1. PLAN: 既存の配置と命名を本索引で確認し、追加箇所を決める。
2. DO: 対応するサブディレクトリに Markdown を作成・更新し、本索引へ追記。
3. CHECK: リンク・命名・重複・文責の整合を確認。
4. ACTION: 改善点を洗い出し、必要ならルールやテンプレートを強化する。

---

## 重要な変更履歴

### 2025/12/14 - Nuxt 3 + TypeScript 移行プロジェクト開始
- Vue 3 (JavaScript) → Nuxt 3 (TypeScript + SSR) への大規模移行を計画
- 移行ドキュメント（`migration/`）カテゴリを新設
- 関連ドキュメント:
  - `migration/nuxt3-migration.md`: 移行手順とアーキテクチャ設計
  - `migration/typescript-guide.md`: TypeScript導入ガイドライン
  - `.claude/plans/sunny-snacking-blum.md`: 詳細な移行プラン

---

最終更新日: 2025/12/14
