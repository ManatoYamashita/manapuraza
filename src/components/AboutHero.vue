<template>
    <section class="about-hero">
      <h1 class="page-title">{{ t('about.ym') }}</h1>

      <div class="image-and-paragraph">
        <div class="self-image">
          <img fetchpriority="high" :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="message">
          <strong class="howyoufeel">How you feel?</strong>
          <p>
            {{ t('about.passage') }} &#x1F34C;
          </p>
          <Sns />
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import type { Locale } from '@/types';
  import Sns from '@/components/Sns.vue';

  const { t, locale } = useI18n<{ message: string }, Locale>();
  const imageSrc = '/山下真和都(マナト).webp';

  const imageAlt = computed(() =>
    locale.value === 'ja' ? '山下真和都(マナト)' : 'Manato Yamashita'
  );

  onMounted(async () => {
    // GSAPを動的インポートして初期バンドルサイズを削減
    const { gsap } = await import('gsap');

    // h1タイトルのアニメーション
    gsap.from('.page-title', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out',
    });

    // 画像のアニメーション
    gsap.from('.self-image img', {
      y: 100,
      duration: 1,
      delay: 0.2,
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
  .about-hero {
    width: 100%;
  }

  .page-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #111;
  }

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
    .page-title {
      font-size: 2.2rem;
    }

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
    .page-title {
      font-size: 2.5rem;
    }

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
  