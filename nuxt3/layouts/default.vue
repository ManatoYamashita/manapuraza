<template>
  <div id="main">
    <!-- Three.js背景（SSR対応：ClientOnlyでラップ） -->
    <ClientOnly>
      <MetaBall />
    </ClientOnly>

    <!-- ナビゲーションメニュー（ホームページ以外で表示） -->
    <Menu v-if="!isHomePage" />

    <!-- メインコンテンツエリア（ホームページ以外でglassラッパー表示） -->
    <div v-if="!isHomePage" class="app glass">
      <slot />
    </div>

    <!-- ホームページは直接slot表示 -->
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// ホームページ判定
const isHomePage = computed(() => route.path === '/');
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
