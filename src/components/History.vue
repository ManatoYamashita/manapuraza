<template>
  <div id="main">
    <div class="timeline" ref="timeline">
      <div
        class="entry"
        v-for="(item, index) in historyItems"
        :key="index"
      >
        <div class="title">
          <h3>{{ item.year }}</h3>
        </div>
        <div class="incident" :class="'p' + (index + 1)">
          <h3>{{ t(item.titleKey) }}</h3>
          <p>{{ t(item.descriptionKey) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'History',
  setup() {
    const { t } = useI18n();

    const historyItems = ref([
      { year: '2002', titleKey: 'his.02', descriptionKey: 'his.02-de' },
      { year: '2003', titleKey: 'his.03', descriptionKey: 'his.03-de' },
      { year: '2015', titleKey: 'his.15', descriptionKey: 'his.15-de' },
      { year: '2018', titleKey: 'his.18', descriptionKey: 'his.18-de' },
      { year: '2021', titleKey: 'his.21', descriptionKey: 'his.21-de' },
      { year: '2021', titleKey: 'his.21-2', descriptionKey: 'his.21-2-de' },
      { year: '2022', titleKey: 'his.22', descriptionKey: 'his.22-de' },
      { year: '2023', titleKey: 'his.23', descriptionKey: 'his.23-de' },
      { year: '2025', titleKey: 'his.25', descriptionKey: 'his.25-de' },
      
    ]);

    const timelineRef = ref(null);

    onMounted(async () => {
  // GSAPを動的インポートして初期バンドルサイズを削減
  const { gsap } = await import('gsap');
      const instance = getCurrentInstance();
      const root = instance.proxy.$el;
      const entries = root.querySelectorAll('.entry');

      // 各エントリーのアニメーション
      gsap.from(entries, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      });
    });

    return { t, historyItems, timelineRef };
  },
};
</script>

<style scoped>
  #main {
    width: 100%;
    min-height: 100vh;
    max-width: 800px;
    overflow-y: hidden;
  }
  .timeline {
    width: 100%;
    height: 100%;
    padding: 2rem 0 5rem 0;
    position: relative;
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
  .incident {
    float: right;
    width: 66%;
    padding-left: 2rem;
    margin: 0;
  }

  /* 時代ごとの間隔 */
  .p1 { /* 2002年 */
    margin-bottom: 0.5rem;
  }
  .p2 { /* 2003年 */
    margin-bottom: 6rem;
  }
  .p3 { /* 2015年 */
    margin-bottom: 1.5rem;
  }
  .p4 { /* 2018年 */
    margin-bottom: 1.5rem;
  }
  .p5 { /* 2021年 */
    margin-bottom: 0;
  }
  .p6 { /* 2021年 */
    margin-bottom: .5rem;
  }
  .p7 { /* 2022年 */ 
    margin-bottom: .5rem;
  }
  .p8 { /* 2023年 */
    margin-bottom: 1rem;
  }
  .p9 { /* 2025年 */
    margin-bottom: 1rem;
  }
</style>
