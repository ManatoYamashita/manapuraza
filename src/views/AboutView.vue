<script setup>
  import { useI18n } from 'vue-i18n';
  import SelfImageAndMessage from '@/components/SelfImageAndMessage.vue';
  import ProfileTable from '@/components/ProfileTable.vue';
  import History from '@/components/History.vue';

  const { t } = useI18n();
</script>

<template>
  <div class="main">
    <h1>About</h1>
    <h2>{{ t('about.ym') }}</h2>

    <SelfImageAndMessage />

    <ProfileTable />

    <div class="his">
      <h2>History</h2>
      <History />
    </div>
  </div>
</template>

<style scoped>
  .main {
    width: 90%;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 5rem;
  }

  .his {
    padding-bottom: 10vh;
  }
</style>
