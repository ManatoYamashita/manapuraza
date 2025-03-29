<template>
  <section id="animation">
    <h2 class="section-title">Animation</h2>
    <p class="section-description">{{ $t('works.animation.paragraph') }}</p>
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
.section-title {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40%;
  height: 3px;
  background-color: rgba(255, 152, 79, 0.7);
  border-radius: 2px;
}

.section-description {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9のアスペクト比 */
  margin: 0.5rem 0 1.5rem;
  overflow: hidden;
  border-radius: 0.8rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.video-container:hover iframe {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

.animation-title {
  font-size: 1.3rem;
  margin: 0 0 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.animation-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.animation-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.animation-links > * {
  flex: 1;
  min-width: 150px;
}

.animation-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 1rem;
}

.animation-detail-item {
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
  font-weight: normal;
  position: relative;
  padding-left: 1.2rem;
}

.animation-detail-item::before {
  content: "•";
  position: absolute;
  left: 0;
  font-weight: bold;
}

@media (min-width: 768px) {
  .animation-item {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  
  .animation-info {
    padding: 0.5rem;
  }
}

@media (max-width: 767px) {
  .animation-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  
  .animation-item {
    padding: 1.2rem;
  }
  
  .animation-details {
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.7rem;
  }
  
  .animation-title {
    font-size: 1.2rem;
  }
  
  .animation-detail-item {
    font-size: 0.9rem;
  }
  
  .animation-item {
    padding: 1rem;
  }
}
</style> 