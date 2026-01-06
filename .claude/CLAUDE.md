# CLAUDE.md（docs 連携・運用ルール）

本プロジェクトにおける知見・ルールは `docs/` を唯一のソース・オブ・トゥルース（SoT）とします。エージェントや開発者が得た知見は、適切な `docs/` 配下の Markdown に追記、または新規作成し、索引である `docs/index.md` を必ず更新します。
`docs/` 直下に配置できるファイルは `index.md` のみとし、その他のドキュメントはサブディレクトリに整理します。サブディレクトリは必要最小限に抑え、命名は `kebab-case` で統一してください。

## 基本方針
- ルール/知見は `docs/` に集約。
- 変更時は `docs/index.md`（索引・運用ルール）を更新。
- ドキュメントコミットは `DOC:` プレフィックス。
- 機密情報（PII等）は `docs/` に保存しない。

## 運用フロー（PDCA）
1. PLAN: `docs/index.md` で既存配置と命名を確認。
2. DO: 該当 `docs/` ファイルを更新 or 新規作成。必要に応じてカテゴリディレクトリ追加。
3. CHECK: リンク切れ/重複/命名不整合が無いか確認。
4. ACTION: 運用改善点や不足ルールをドキュメント化。

## 命名・配置ガイド
- ファイル名は `kebab-case.md`、目的が明確な名前。
- 1ファイルが 300 行超 or 技術領域が分岐 → 分割/ディレクトリ化。
- 代表例：
  - `docs/coding-standards.md`（規約）
  - `docs/import-path-migration.md`（移行ガイド）
  - `docs/branch-strategy.md`（ブランチ/CI）

## 索引（参照）
- ドキュメントのエンドポイント: `docs/index.md`
- アーキテクチャ: `docs/standards/architecture.md`
- フロントエンド実装: `docs/standards/frontend-guidelines.md`
- デザイン指針: `docs/standards/design.md`
- パフォーマンス/ビルド: `docs/standards/performance-and-build.md`
- セキュリティ/アクセシビリティ/SEO: `docs/standards/security-and-seo.md`
- コーディング規約: `docs/standards/coding-standards.md`
- デプロイ手順: `docs/ops/deployment-checklist.md`
- Creatives データ管理: `docs/ops/creatives-guide.md`

最終更新日: 2026/11/24
