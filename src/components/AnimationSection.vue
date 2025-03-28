<template>
  <section id="animation">
    <h2>Animation</h2>
    <p>{{ $t('works.animation.paragraph') }}</p>
    <div class="animation-item">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M"
          title="世田谷区オリジナルアニメ「新BOPへようこそ!」"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="eager"
        ></iframe>
      </div>
      <div class="animation-info">
        <h3 class="animation-title">{{ $t('works.animation.tcuAnimation.title') }}</h3>
        <div class="animation-details">
          <p v-if="$t('works.animation.tcuAnimation.description.production')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.production') }}
          </p>
          <p v-if="$t('works.animation.tcuAnimation.description.director')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.director') }}
          </p>
          <p v-if="$t('works.animation.tcuAnimation.description.animationProduction')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.animationProduction') }}
          </p>
          <p v-if="$t('works.animation.tcuAnimation.description.productionSupport')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.productionSupport') }}
          </p>
          <p v-if="$t('works.animation.tcuAnimation.description.voiceActors')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.voiceActors') }}
          </p>
          <p v-if="$t('works.animation.tcuAnimation.description.websiteProduction')" class="animation-detail-item">
            {{ $t('works.animation.tcuAnimation.description.websiteProduction') }}
          </p>
        </div>
        <div class="animation-links">
          <Btn 
            :href="'https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu'" 
            :target="'_blank'" 
            :icon="['fas', 'play']" 
            :text="$t('works.animation.tcuAnimation.watch')" 
            :alt="'本編動画を見る（世田谷区公式YouTube）'"
          />
          <Btn 
            :href="'https://tcu-animation.jp'" 
            :target="'_blank'" 
            :icon="['fas', 'globe']" 
            :text="$t('works.animation.tcuAnimation.site')" 
            :alt="'公式サイトへ（都市大アニメーション）'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Btn from '@/components/Btn.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // アニメーションセクションのアニメーション
  gsap.from('#animation', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
  
  // ビデオコンテナのアニメーション
  gsap.from('.video-container', {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: 0.3,
    ease: 'back.out(1.7)'
  });
  
  // アニメーション情報のアニメーション
  gsap.from('.animation-info', {
    opacity: 0,
    x: 30,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
  });
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9のアスペクト比 */
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 0.5rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.video-container:hover iframe {
  transform: scale(1.02);
}

.animation-title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.animation-description {
  font-size: 1rem;
  margin: 0;
}

.animation-item {
  margin-bottom: 2rem;
}

.animation-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.animation-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.animation-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 0.5rem 0;
}

.animation-detail-item {
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  font-weight: normal;
}

@media (min-width: 768px) {
  .animation-item {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    align-items: center;
  }
  
  .animation-info {
    padding-right: 1rem;
  }
}

@media (max-width: 767px) {
  .animation-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .animation-links {
    grid-template-columns: 1fr;
  }
}
</style> 