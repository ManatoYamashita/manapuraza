<template>
  <div id="main">
    <div class="timeline" ref="timelineRef">
      <div
        class="entry"
        v-for="(item, index) in historyItems"
        :key="index"
        :class="'p' + (index + 1)"
      >
        <div class="year">
          <h3>{{ item.year }}</h3>
        </div>
        <div class="content">
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
      
      // template refを使用してDOM要素に安全にアクセス（Vue 3ベストプラクティス）
      if (!timelineRef.value) {
        console.error('History: Timeline element not found');
        return;
      }
      
      const entries = timelineRef.value.querySelectorAll('.entry');

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
  /* === ベーススタイル（全画面共通） === */
  #main {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow-y: hidden;
  }

  .timeline {
    position: relative;
    padding: 2rem 0 3rem 0;
  }

  /* === モバイル（~480px）: タイムライン線を左端配置 === */
  .timeline:before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #101010;
  }

  .entry {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    position: relative;
  }

  .year {
    flex-shrink: 0;
    width: 4rem;
    text-align: center;
    position: relative;
  }

  .year h3 {
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
  }

  /* タイムラインドット（モバイル） */
  .year:after {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border: 3px solid #101010;
    border-radius: 50%;
    background: #f0d300;
    top: 0.3rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .content {
    flex: 1;
    padding-left: 1.5rem;
  }

  .content h3 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .content p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    color: #333;
  }

  /* === タブレット（481px-768px）: タイムライン線を中央寄りに === */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .timeline:before {
      left: 5rem;
    }

    .year {
      width: 5rem;
    }

    .year h3 {
      font-size: 1.1rem;
    }

    .year:after {
      width: 1rem;
      height: 1rem;
      border-width: 4px;
    }

    .content {
      padding-left: 2rem;
    }

    .content h3 {
      font-size: 1.2rem;
    }

    .content p {
      font-size: 1rem;
    }
  }

  /* === デスクトップ（769px~）: 左側年号、中央線、右側イベント === */
  @media screen and (min-width: 769px) {
    .timeline {
      padding: 3rem 0 5rem 0;
    }

    .timeline:before {
      left: calc(33% + 15px);
      width: 4px;
      top: calc(3rem + 3px);
    }

    .entry {
      display: grid;
      grid-template-columns: 33% 1fr;
      gap: 2rem;
      margin-bottom: 0;
    }

    .year {
      width: 100%;
      text-align: right;
      padding-right: 2rem;
    }

    .year h3 {
      font-size: 1.2rem;
    }

    /* タイムラインドット（デスクトップ） */
    .year:after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      border: 0.5rem solid #101010;
      border-radius: 50%;
      background: #f0d300;
      top: 15%;
      right: calc(-1.5rem - 1px);
      transform: translateY(0);
    }

    .content {
      padding-left: 2rem;
    }

    .content h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }

    .content p {
      font-size: 1rem;
      line-height: 1.6;
    }

    /* 時代ごとの間隔（デスクトップのみ） */
    .p1 { margin-bottom: 0.5rem; }
    .p2 { margin-bottom: 6rem; }
    .p3 { margin-bottom: 1.5rem; }
    .p4 { margin-bottom: 1.5rem; }
    .p5 { margin-bottom: 0; }
    .p6 { margin-bottom: 0.5rem; }
    .p7 { margin-bottom: 0.5rem; }
    .p8 { margin-bottom: 1rem; }
    .p9 { margin-bottom: 1rem; }
  }
</style>
