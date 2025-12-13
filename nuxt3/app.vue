<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#ffd700" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// プログレッシブロゴ読み込みロジック（既存Vue 3プロジェクトから移行）
// SSRでは初回レンダリング時にlow品質ロゴを使用し、クライアントサイドで高品質ロゴに切り替え
const isHighQualityLogoLoaded = ref(false);

onMounted(() => {
  // 高品質ロゴのプリロード
  const highQualityLogo = new Image();
  highQualityLogo.src = '/logo.webp';
  highQualityLogo.onload = () => {
    isHighQualityLogoLoaded.value = true;
  };
});
</script>

<style>
/* グローバルスタイルはassets/main.cssで管理 */
</style>
