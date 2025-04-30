<script setup>
  import { useI18n } from 'vue-i18n';
  import SelfImageAndMessage from '@/components/SelfImageAndMessage.vue';
  import ProfileTable from '@/components/ProfileTable.vue';
  import History from '@/components/History.vue';

  const { t } = useI18n();
</script>

<template>
  <main class="about">
    <h1>{{ t('about.ym') }}</h1>
    <SelfImageAndMessage />
    <ProfileTable />
    <div class="his">
      <h2>History</h2>
      <History />
    </div>
  </main>
</template>

<style lang="css" scoped>
  main.about {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
  }

  h2 {
    font-size: 2.2rem;
    margin-top: 5rem;
  }
</style>
