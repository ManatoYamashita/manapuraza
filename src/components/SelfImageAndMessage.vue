<template>
    <section class="howyoufeel">
      <div class="self-image">
        <img fetchpriority="high" :src="imageSrc" alt="山下マナト" />
      </div>
      <div id="message">
        <p>
          <strong id="howyoufeel">How you feel?</strong>
          <br />
          {{ t('about.passage') }} &#x1F34C;
        </p>
        <Sns id="sns" />
      </div>
    </section>
</template>
  
<script setup>
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { gsap } from 'gsap';
  import Sns from '@/components/Sns.vue';
  
  const { t } = useI18n();
  const imageSrc = new URL('@/assets/yamashitamanato.webp', import.meta.url).href;
  
  onMounted(() => {
    // 画像のアニメーション
    gsap.from('.self-image img', {
      y: 100,
      duration: 1,
      ease: 'power2.out',
    });
  
    // メッセージのアニメーション
    gsap.from('#message', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });
  });
</script>
  
<style scoped>
  .howyoufeel {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .self-image {
    width: 30%;
    margin: 0;
    overflow-y: hidden;
  }
  .self-image img {
    width: 100%;
    border-radius: 0.5rem;
  }
  #message {
    width: 70%;
    padding-left: 2rem;
  }
  #message p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
  }
  #howyoufeel {
    font-size: 1.2rem;
    margin: 0;
  }
  
  /* レスポンシブ対応 */
  @media screen and (max-width: 540px) {
    .howyoufeel {
      flex-direction: column;
      align-items: center;
    }
    .self-image {
      width: 50%;
      margin: 0 auto;
    }
    #message {
      width: 90%;
      padding: 1rem 0;
    }
  }
</style>
  