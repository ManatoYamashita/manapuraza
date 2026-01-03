# Devcontainer 環境構築ガイド

## 概要

このドキュメントは、MANAPURAZA プロジェクトの Devcontainer 環境構築手順とトラブルシューティングを提供します。

### Devcontainer とは

Devcontainer（Development Container）は、VS Code の拡張機能で、Docker コンテナ内で一貫した開発環境を提供する仕組みです。

**メリット:**
- チーム全体で統一された開発環境
- ローカル環境を汚さない
- 新規メンバーのオンボーディングが容易
- CI/CD 環境との完全一致

## 環境仕様

### 技術スタック

- **Node.js:** 22.13.1（GitHub Actions と完全一致）
- **フレームワーク:** Vue.js 3.3.2 + Vite 6.2.3
- **パッケージマネージャー:** npm
- **開発サーバー:** Vite（ポート 5173）
- **プレビューサーバー:** Vite（ポート 4173）

### 主要ライブラリ

- Vue Router 4.2.0（SPA ルーティング）
- Vue I18n 9.7.1（多言語対応）
- Three.js 0.169.0（3D グラフィックス）
- GSAP 3.12.5（アニメーション）
- Font Awesome 6.6.0（アイコン）
- marked 17.0.1（Markdown レンダリング）

### VS Code 拡張機能

**必須:**
- Vue.volar - Vue 3 開発必須（Composition API、`<script setup>` 対応）
- Vue.vscode-typescript-vue-plugin - Vue TypeScript サポート
- dbaeumer.vscode-eslint - ESLint Flat Config 対応
- esbenp.prettier-vscode - フォーマッター
- antfu.vite - Vite 開発支援

**推奨:**
- eamodio.gitlens - Git 履歴可視化
- lokalise.i18n-ally - Vue I18n 翻訳管理
- slevesque.shader - Three.js シェーダーサポート
- yzhang.markdown-all-in-one - Markdown 編集
- DavidAnson.vscode-markdownlint - Markdown Linter

## セットアップ手順

### 前提条件

以下のソフトウェアがインストールされていることを確認してください：

1. **Docker Desktop**
   - macOS: [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)
   - Windows: [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
   - Linux: [Docker Engine](https://docs.docker.com/engine/install/)

2. **Visual Studio Code**
   - [VS Code](https://code.visualstudio.com/) をインストール

3. **Dev Containers 拡張機能**
   - VS Code で `ms-vscode-remote.remote-containers` をインストール

### 初回セットアップ

#### 1. プロジェクトを開く

```bash
cd /path/to/manapuraza
code .
```

#### 2. Devcontainer で再起動

VS Code 内で以下のいずれかの方法で Devcontainer を起動：

**方法 A: Command Palette**
1. `Cmd+Shift+P`（macOS）または `Ctrl+Shift+P`（Windows/Linux）
2. "Dev Containers: Reopen in Container" を選択

**方法 B: 通知からの起動**
1. VS Code がプロジェクトを開いた際に表示される通知
2. "Reopen in Container" ボタンをクリック

**方法 C: 左下の緑色アイコン**
1. VS Code 左下の緑色のリモートアイコンをクリック
2. "Reopen in Container" を選択

#### 3. 初回ビルド（自動実行）

初回起動時、以下の処理が自動的に実行されます：

**a. Docker イメージのビルド（約3-5分）**
```
[+] Building 180.0s (12/12) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load .dockerignore
 => [1/7] FROM docker.io/library/node:22.13.1-bookworm-slim
 => [2/7] RUN apt-get update && apt-get install -y ...
 => [3/7] RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen
 => ...
```

**b. npm install の実行（約2-3分）**
```
[postCreateCommand] npm install
added 1234 packages in 2m 30s
```

**c. VS Code 拡張機能のインストール（約1-2分）**
```
Installing extensions:
  - Vue.volar
  - dbaeumer.vscode-eslint
  - esbenp.prettier-vscode
  ...
```

#### 4. 環境確認

コンテナ起動後、ターミナルで以下のコマンドを実行して環境を確認：

```bash
# Node.js バージョン確認
node --version
# 期待される出力: v22.13.1

# npm バージョン確認
npm --version
# 期待される出力: 10.x.x

# 依存関係の確認
npm list --depth=0
# プロジェクトの依存関係一覧が表示される
```

### 開発サーバーの起動

#### Vite 開発サーバー

```bash
npm run dev
```

**出力例:**
```
VITE v6.2.3  ready in 1234 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

ブラウザで `http://localhost:5173` にアクセスして動作を確認

#### Vite プレビューサーバー（プロダクションビルドのプレビュー）

```bash
npm run build
npm run preview
```

**出力例:**
```
vite v6.2.3 building for production...
✓ built in 15.23s

➜  Local:   http://localhost:4173/
➜  Network: use --host to expose
```

ブラウザで `http://localhost:4173` にアクセスして動作を確認

## ファイル構成

### `.devcontainer/` ディレクトリ構造

```
.devcontainer/
├── Dockerfile              # Docker イメージ定義
├── docker-compose.yml      # サービス構成とボリューム設定
└── devcontainer.json       # VS Code 統合設定
```

### Dockerfile の主要設定

```dockerfile
FROM node:22.13.1-bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive \
    NODE_ENV=development \
    LANG=ja_JP.UTF-8

RUN apt-get update && apt-get install -y \
    git curl wget ca-certificates \
    locales procps \
    python3 make g++

USER node
WORKDIR /workspace
```

**ポイント:**
- **Node.js 22.13.1:** GitHub Actions と完全一致
- **日本語ロケール:** コンソール出力の文字化け防止
- **ビルドツール:** Three.js のネイティブ依存関係に対応
- **node ユーザー:** セキュリティ向上（非特権ユーザー）

### docker-compose.yml の主要設定

```yaml
services:
  app:
    volumes:
      - ../:/workspace:cached
      - node_modules:/workspace/node_modules  # Named Volume
    ports:
      - "5173:5173"  # Vite Dev Server
      - "4173:4173"  # Vite Preview Server
    environment:
      - CHOKIDAR_USEPOLLING=true  # ホットリロード確実性

volumes:
  node_modules:
    name: manapuraza-node-modules
```

**ポイント:**
- **Named Volume:** `node_modules` の I/O 高速化（詳細は `docker-performance.md` 参照）
- **CHOKIDAR_USEPOLLING:** Docker 環境でのホットリロード問題を解決
- **ポート転送:** 5173（開発）、4173（プレビュー）

### devcontainer.json の主要設定

```json
{
  "name": "MANAPURAZA Vue.js 3 Development",
  "dockerComposeFile": "docker-compose.yml",
  "forwardPorts": [5173, 4173],
  "customizations": {
    "vscode": {
      "extensions": ["Vue.volar", "dbaeumer.vscode-eslint", ...],
      "settings": {
        "editor.formatOnSave": true,
        "eslint.useFlatConfig": true
      }
    }
  },
  "postCreateCommand": "npm install",
  "postStartCommand": "git config --global --add safe.directory /workspace"
}
```

**ポイント:**
- **自動拡張機能インストール:** Vue 3 開発に必要な拡張機能を自動インストール
- **ESLint Flat Config 対応:** `eslint.useFlatConfig: true` が必須
- **ライフサイクルコマンド:** コンテナ作成時・起動時に自動実行

## 開発フロー

### 日常的な開発作業

#### 1. VS Code を開く

```bash
code /path/to/manapuraza
```

VS Code が自動的に Devcontainer を検出し、コンテナ内で起動します。

#### 2. 開発サーバーを起動

```bash
npm run dev
```

#### 3. コードを編集

ファイル保存時に以下が自動実行されます：
- **Prettier:** コード整形
- **ESLint:** 自動修正可能な問題を修正
- **ホットリロード:** ブラウザが自動更新

#### 4. ビルド確認

```bash
npm run build
```

#### 5. Linter/Formatter チェック

```bash
npm run lint:check
npm run format:check
```

### コンテナの停止・再起動

#### コンテナを停止

**方法 A: VS Code から**
1. 左下の緑色アイコンをクリック
2. "Reopen Folder Locally" を選択

**方法 B: Docker Desktop から**
1. Docker Desktop を開く
2. `manapuraza-dev` コンテナを停止

#### コンテナを再起動

```bash
# VS Code で再度プロジェクトを開く
code /path/to/manapuraza

# または Command Palette から
# "Dev Containers: Reopen in Container"
```

### コンテナの再ビルド

設定ファイル（Dockerfile、docker-compose.yml、devcontainer.json）を変更した場合：

**方法 A: Command Palette**
1. `Cmd+Shift+P` / `Ctrl+Shift+P`
2. "Dev Containers: Rebuild Container" を選択

**方法 B: 完全なクリーンビルド**
```bash
# コンテナとイメージを削除
docker-compose -f .devcontainer/docker-compose.yml down
docker rmi manapuraza-dev

# VS Code で再起動
code /path/to/manapuraza
```

## トラブルシューティング

### 問題 1: ホットリロードが動作しない

**症状:**
ファイルを編集しても、ブラウザが自動更新されない。

**原因:**
Docker のファイル監視機能の制限。

**解決策:**
`docker-compose.yml` に既に設定済み：
```yaml
environment:
  - CHOKIDAR_USEPOLLING=true
```

それでも動作しない場合：
```bash
# コンテナを再起動
# VS Code: Command Palette > "Dev Containers: Rebuild Container"
```

### 問題 2: node_modules が空

**症状:**
コンテナ内で `ls node_modules` を実行しても、何も表示されない。

**原因:**
Named Volume が正しくマウントされていない。

**解決策:**
```bash
# コンテナ内で npm install を実行
npm install

# Volume 状態を確認（ホスト側で）
docker volume ls | grep manapuraza
# 出力: manapuraza-node-modules

# Volume を削除して再作成（最終手段）
docker volume rm manapuraza-node-modules
# VS Code: "Dev Containers: Rebuild Container"
```

### 問題 3: Git の safe.directory 警告

**症状:**
```
fatal: detected dubious ownership in repository at '/workspace'
```

**原因:**
コンテナ内のユーザー（node）とホストのユーザーの不一致。

**解決策:**
`devcontainer.json` の `postStartCommand` で自動設定済み：
```json
"postStartCommand": "git config --global --add safe.directory /workspace"
```

それでも警告が出る場合：
```bash
# コンテナ内で手動実行
git config --global --add safe.directory /workspace
```

### 問題 4: Three.js ビルド時のメモリ不足

**症状:**
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

**原因:**
Docker のメモリ制限が不足。

**解決策:**
`docker-compose.yml` に既に設定済み：
```yaml
deploy:
  resources:
    limits:
      memory: 4G
```

さらにメモリが必要な場合：
```yaml
# docker-compose.yml を編集
limits:
  memory: 8G  # 4G → 8G に増やす
```

その後、コンテナを再ビルド。

### 問題 5: ESLint が動作しない

**症状:**
VS Code で ESLint のエラーが表示されない。

**原因:**
ESLint Flat Config（9.x）に対応していない設定。

**解決策:**
`devcontainer.json` に既に設定済み：
```json
"settings": {
  "eslint.enable": true,
  "eslint.useFlatConfig": true,
  "eslint.validate": ["javascript", "javascriptreact", "vue"]
}
```

それでも動作しない場合：
```bash
# ESLint 拡張機能を再起動
# VS Code: Command Palette > "ESLint: Restart ESLint Server"
```

### 問題 6: Volar（Vue Language Server）が動作しない

**症状:**
`.vue` ファイルで IntelliSense が動作しない。

**原因:**
- Vetur との競合
- Volar の TypeScript プラグインが有効になっていない

**解決策:**
```bash
# 1. Vetur を無効化（インストールされている場合）
# VS Code: 拡張機能 > Vetur > 無効にする

# 2. Vue Language Features (Volar) を有効化
# 既に devcontainer.json で自動インストール済み

# 3. TypeScript Vue Plugin を有効化
# 既に devcontainer.json に含まれています:
# "Vue.vscode-typescript-vue-plugin"
```

### 問題 7: ポート転送が機能しない

**症状:**
`http://localhost:5173` にアクセスできない。

**原因:**
- ポート転送設定の問題
- ファイアウォール/セキュリティソフトの干渉

**解決策:**
```bash
# 1. ポート転送状態を確認
# VS Code: 下部の "PORTS" タブを確認
# 5173 と 4173 が表示されているか確認

# 2. 手動でポート転送を追加
# VS Code: PORTS タブ > "Forward a Port" > 5173 を入力

# 3. コンテナ内で開発サーバーが起動しているか確認
npm run dev
# "Local: http://localhost:5173/" が表示されるか確認
```

### 問題 8: Docker Desktop のリソース不足

**症状:**
コンテナの動作が極端に遅い。

**原因:**
Docker Desktop に割り当てられているリソースが不足。

**解決策（macOS/Windows）:**
```
1. Docker Desktop を開く
2. Settings（歯車アイコン）> Resources
3. 以下のように増やす:
   - CPUs: 4 以上
   - Memory: 8GB 以上
   - Swap: 2GB 以上
4. "Apply & Restart" をクリック
```

## パフォーマンス最適化

詳細は `docker-performance.md` を参照してください。

### Named Volume による高速化

通常の bind mount と比較して、Named Volume は 2.5 倍高速：

| 操作 | bind mount | Named Volume | 改善率 |
|------|------------|--------------|--------|
| `npm install` | 約300秒 | 約120秒 | **2.5倍** |
| `npm run build` | 約25秒 | 約18秒 | **1.4倍** |
| ホットリロード | 1-2秒遅延 | 即座 | **遅延なし** |

## よくある質問（FAQ）

### Q1: Devcontainer と通常のローカル開発の違いは？

**A:** Devcontainer はすべての開発ツールを Docker コンテナ内に隔離します。これにより：
- チーム全体で統一された環境
- ローカル環境を汚さない
- CI/CD 環境との完全一致
- 新規メンバーのオンボーディングが容易

### Q2: ローカルの node_modules はどうなる？

**A:** Devcontainer 使用時、ホストの `node_modules` は無視され、コンテナ内の Named Volume が使用されます。これにより：
- ホストとコンテナの依存関係の競合を防止
- 高速な I/O パフォーマンス

### Q3: SSH キーはどうやってコンテナに共有される？

**A:** `devcontainer.json` の `mounts` 設定により、ホストの `~/.ssh` がコンテナ内の `/home/node/.ssh` にマウントされます。これにより、GitHub への push/pull が可能になります。

### Q4: Devcontainer を使わずに開発できる？

**A:** はい、通常のローカル開発も可能です。ただし、以下の点に注意：
- Node.js 22.13.1 をインストールする必要がある
- VS Code 拡張機能を手動でインストールする必要がある
- CI/CD 環境との一貫性が保証されない

### Q5: 複数のプロジェクトで Devcontainer を使う場合は？

**A:** 各プロジェクトは独立したコンテナとして管理されます。Named Volume もプロジェクトごとに分離されるため、競合しません。

## 参考リンク

- [VS Code Dev Containers 公式ドキュメント](https://code.visualstudio.com/docs/devcontainers/containers)
- [Docker Compose 公式リファレンス](https://docs.docker.com/compose/)
- [Vue.js 公式ドキュメント](https://vuejs.org/)
- [Vite 公式ドキュメント](https://vitejs.dev/)

## 更新履歴

- 2025/12/10: 初版作成（Node.js 22.13.1、Vue 3 + Vite 対応）
