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
  import Sns from '@/components/Sns.vue';
  
  const { t } = useI18n();
  const imageSrc = '/山下真和都(マナト).webp';
  
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
  /* === ベーススタイル（モバイル: ~480px） === */
  .image-and-paragraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .self-image {
    width: 50%;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .self-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%; /* モバイルでは円形 */
    object-fit: cover;
  }

  .message {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0;
  }

  .message strong.howyoufeel {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .message p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    white-space: pre-line;
  }

  /* === タブレット（481px-768px） === */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .image-and-paragraph {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
    }

    .self-image {
      width: 35%;
      max-width: 250px;
      aspect-ratio: auto;
      margin: 0;
    }

    .self-image img {
      border-radius: 1rem; /* タブレットでは角丸 */
      height: auto;
    }

    .message {
      width: 60%;
      padding: 0;
    }

    .message strong.howyoufeel {
      font-size: 1.4rem;
    }

    .message p {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  /* === デスクトップ（769px~） === */
  @media screen and (min-width: 769px) {
    .image-and-paragraph {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
    }

    .self-image {
      width: 40%;
      max-width: 300px;
      aspect-ratio: auto;
      margin: 0;
    }

    .self-image img {
      border-radius: 1rem; /* デスクトップでは角丸 */
      height: auto;
    }

    .message {
      width: 55%;
      padding: 0;
    }

    .message strong.howyoufeel {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .message p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
</style>
  