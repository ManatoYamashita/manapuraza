<template>
  <main class="home">
    <!-- ホームページのメインコンテンツ -->
    <!-- 実際のナビゲーションリンクはApp.vueの.home-nav-linksで表示 -->
  </main>
</template>

<script setup lang="ts">
/**
 * Home Page (Index)
 *
 * ホームページ: シンプルな構造でMetaBall背景を強調
 * 実際のナビゲーションはApp.vueで管理
 */

// SEO設定
useHead({
  title: 'MANAPURAZA.COM - 山下マナト Webポートフォリオ',
  meta: [
    {
      name: 'description',
      content: '山下マナト（山下真和都）のWebポートフォリオ。アニメーション、Web開発、イラスト、映像作品を公開しています。'
    },
    {
      property: 'og:title',
      content: 'MANAPURAZA.COM'
    },
    {
      property: 'og:description',
      content: '山下マナト（山下真和都）のWebポートフォリオ'
    }
  ]
});
</script>

<style lang="css" scoped>
main.home {
  display: none;
  pointer-events: none;
  overflow: hidden;
}
</style>
