<!-- HistoryView.vue -->
<template>
  <div id="main">
    <div class="timeline">
      <div
        class="entry"
        v-for="(item, index) in historyItems"
        :key="index"
      >
        <div class="title">
          <h3>{{ item.year }}</h3>
        </div>
        <div class="body" :class="'p' + (index + 1)">
          <h3>{{ t(item.titleKey) }}</h3>
          <p>{{ t(item.descriptionKey) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

export default {
  name: 'History',
  setup() {
    const { t } = useI18n();

    // 履歴項目を定義
    const historyItems = ref([
      { year: '2002', titleKey: 'his.02', descriptionKey: 'his.02-de' },
      { year: '2003', titleKey: 'his.03', descriptionKey: 'his.03-de' },
      { year: '2015', titleKey: 'his.15', descriptionKey: 'his.15-de' },
      { year: '2018', titleKey: 'his.18', descriptionKey: 'his.18-de' },
      { year: '2021', titleKey: 'his.21', descriptionKey: 'his.21-de' },
      { year: '2021', titleKey: 'his.21-2', descriptionKey: 'his.21-2-de' },
      { year: '2022', titleKey: 'his.22', descriptionKey: 'his.22-de' },
      { year: '2023', titleKey: 'his.23', descriptionKey: 'his.23-de' },
      { year: '2023', titleKey: 'his.23-2', descriptionKey: 'his.23-2-de' },
    ]);

    onMounted(() => {
      // タイムラインの線のアニメーション
      gsap.from('.timeline:before', {
        height: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // 各エントリーのアニメーション
      gsap.from('.entry', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      });
    });

    return { t, historyItems };
  },
};
</script>

<style scoped>
  /* * {
    pointer-events: all;
  } */
  #main {
    width: 100%;
    min-height: 100vh;
    max-width: 800px;
  }
  .timeline {
    width: 100%;
    height: 100%;
    padding: 2rem 0 5rem 0;
    position: relative;
    margin-bottom: 50vh;
  }
  .timeline:before {
    content: '';
    position: absolute;
    left: calc(33% + 15px);
    top: calc(3rem + 3px);
    bottom: 0;
    width: 4px;
    background: #101010;
  }
  .timeline:after {
    content: "";
    display: table;
    clear: both;
  }
  .entry {
    clear: both;
    text-align: left;
    position: relative;
  }
  .title {
    float: left;
    width: 33%;
    padding-right: 30px;
    text-align: right;
    position: relative;
  }
  .title:before {
    /* point of timeline */
    content: '';
    position: absolute;
    width: 1rem;
    border: .5rem solid black;
    border-radius: 100%;
    top: 15%;
    right: calc(-1.5rem - 1px);
  }
  h3 {
    margin: 0;
    font-size: 120%;
  }
  p {
    margin: 0;
    font-size: small;
  }
  .body {
    float: right;
    width: 66%;
    padding-left: 2rem;
    margin: 0;
  }
  .p1 {
    margin-bottom: 1rem;
  }
  .p2 {
    margin-bottom: 6rem;
  }
  .p3 {
    margin-bottom: 2rem;
  }
  .p4 {
    margin-bottom: 2rem;
  }
  .p5 {
    margin-bottom: 2rem;
  }
  .p6 {
    margin-bottom: 2rem;
  }
  .p7 {
    margin-bottom: 2rem;
  }

</style>
