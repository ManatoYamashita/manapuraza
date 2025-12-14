<template>
  <div id="main">
    <!-- Three.js背景（SSR対応：ClientOnlyでラップ） -->
    <ClientOnly>
      <MetaBall />
    </ClientOnly>

    <!-- ナビゲーションメニュー（ホームページ以外で表示） -->
    <Menu v-if="!isHomePage" />

    <!-- メインコンテンツエリア（ホームページ以外でglassラッパー表示） -->
    <div v-if="!isHomePage" class="app glass" :style="appStyles">
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

// 動的スタイル（元のVue 3実装を再現）
const appStyles = computed(() => {
  if (isHomePage.value) {
    return {
      top: '20vh',
      opacity: '0',
      pointerEvents: 'none' as const
    };
  } else {
    return {
      top: '0',
      opacity: '1',
      pointerEvents: 'all' as const
    };
  }
});
</script>

<style scoped>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  display: contents;
}

/* Glassラッパーコンテナ */
.app {
  min-width: 85vw;
  max-width: 1280px;
  max-height: 75vh;
  padding: 1.4rem;
  margin: 1rem auto;
  border-radius: 10px;
  transition: .5s ease-in-out;
  overflow-y: auto;
  position: relative;
  z-index: 10;
}

/* Glassmorphism効果 */
.glass {
  /* 背景を少し強めてコントラストを確保 */
  background-color: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14), 0 1px 4px rgba(0, 0, 0, 0.06);
  color: #111; /* ガラス上のテキストは濃色で可読性を担保 */
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .app {
    padding: 1rem;
    min-width: 90vw;
  }
}
</style>
