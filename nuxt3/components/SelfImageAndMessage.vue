<template>
    <section class="image-and-paragraph">
      <div class="self-image">
        <img fetchpriority="high" :src="imageSrc" alt="山下真和都(マナト) | Manato Yamashita" />
      </div>
      <div class="message">
        <strong class="howyoufeel">How you feel?</strong>
        <p>
          {{ t('about.passage') }} &#x1F34C;
        </p>
        <Sns />
      </div>
    </section>
</template>
  
<script setup>
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Sns from '~/components/Sns.vue';
  
  const { t } = useI18n();
  const imageSrc = new URL('/public/山下真和都(マナト).webp', import.meta.url).href;
  
  onMounted(async () => {
    // GSAPを動的インポートして初期バンドルサイズを削減
    const { gsap } = await import('gsap');
    
    // 画像のアニメーション
    gsap.from('.self-image img', {
      y: 100,
      duration: 1,
      ease: 'power2.out',
    });
  
    // メッセージのアニメーション
    gsap.from('.message', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });
  });
</script>
  
<style scoped>
  .image-and-paragraph {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .self-image {
    width: 50%;
    max-width: 300px;
    margin: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .self-image img {
    width: 100%;
    border-radius: 1rem;
  }
  .message {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-left: 2rem;
  }
  .message strong.howyoufeel {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .message p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin: 0;
    white-space: pre-line;
  }
  
  /* レスポンシブ対応 */
  @media screen and (max-width: 540px) {
    .image-and-paragraph {
      flex-direction: column;
      align-items: center;
    }
    .self-image {
      width: 50%; /* 75%から50%に縮小 */
      aspect-ratio: 1 / 1; /* 親要素を正方形に強制 */
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .self-image img {
      width: 100%; /* 親要素の幅に完全フィット */
      height: 100%; /* 親要素の高さに完全フィット */
      border-radius: 50%; /* モバイルでは円形に */
      object-fit: cover; /* 画像を円内にフィット */
    }
    .message {
      width: 90%;
      padding: 1rem 0;
    }
  }
</style>
  