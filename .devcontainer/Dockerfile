# ========================================
# Vue.js 3 + Vite Devcontainer
# Node.js 22.13.1 Official Image
# ========================================

FROM node:22.13.1-bookworm-slim

# ========================================
# 環境変数設定
# ========================================
ENV DEBIAN_FRONTEND=noninteractive \
    NODE_ENV=development \
    LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:en \
    LC_ALL=ja_JP.UTF-8

# ========================================
# システムパッケージインストール
# ========================================
RUN apt-get update && apt-get install -y --no-install-recommends \
    # 基本開発ツール
    git \
    curl \
    wget \
    ca-certificates \
    # ロケール設定（日本語対応）
    locales \
    # プロセス管理ツール
    procps \
    # ビルドツール（native addons 対応）
    python3 \
    make \
    g++ \
    # クリーンアップ
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ========================================
# ロケール生成（日本語環境）
# ========================================
RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen \
    && locale-gen ja_JP.UTF-8

# ========================================
# グローバル npm パッケージ（オプション）
# ========================================
# プロジェクトで必要な場合のみコメント解除
# RUN npm install -g @vue/cli vite

# ========================================
# 作業ディレクトリ設定
# ========================================
WORKDIR /workspace

# ========================================
# ユーザー設定（セキュリティ向上）
# ========================================
# node イメージには既に node ユーザーが存在
USER node

# ========================================
# ヘルスチェック（オプション）
# ========================================
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node --version || exit 1
