<template>
    <section id="about-history">
    <h2>History</h2>
    <History />
  </section>
</template>

<script setup lang="ts">
import History from '@/components/History.vue';
</script>

<style scoped>
#about-history {
  width: 100%;
}
h2 {
  font-size: 1.6rem;
  margin: 3rem 0 1.5rem 0;
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  #about-history {
    padding: 2rem;
  }
  h2 {
    font-size: 2.0rem;
  }
}

@media screen and (min-width: 769px) {
  #about-history {
    padding: 3rem;
  }
  h2 {
    font-size: 2.2rem;
  }
}
</style>
