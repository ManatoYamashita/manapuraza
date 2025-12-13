<template>
  <div id="main">
    <!-- Three.js背景（SSR対応：ClientOnlyでラップ） -->
    <ClientOnly>
      <MetaBall />
    </ClientOnly>

    <!-- ナビゲーションメニュー -->
    <Menu />

    <!-- メインコンテンツエリア -->
    <div class="app glass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// レイアウトはSSR対応のため、特別な設定不要
// MetaBallはClientOnlyでラップされているため、クライアントサイドのみで実行される
</script>

<style scoped>
#main {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.app.glass {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  padding: 2rem;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .app.glass {
    padding: 1rem;
  }
}
</style>
