<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ffd700" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
/**
 * app.vue - Nuxt 3 ルートコンポーネント
 *
 * Nuxt 3アーキテクチャ:
 * - NuxtLayout: レイアウトシステム（layouts/default.vue等）
 * - NuxtLoadingIndicator: ページ遷移時のプログレスバー
 * - NuxtPage: ページコンポーネントのルーター出力
 *
 * ホームページのロゴ・ナビゲーションは pages/index.vue で管理
 * その他のページは layouts/default.vue の Menu コンポーネントを使用
 */
</script>

<style>
/* グローバルスタイルはassets/main.cssで管理 */
</style>
