<template>
  <section id="animation" class="animation-section">
    <div class="section-header">
      <h2 class="section-title">Animation</h2>
      <div class="section-divider"></div>
    </div>
    <p class="section-description">{{ $t('creatives.animation.paragraph') }}</p>
    
    <div class="animation-item">
      <div class="content-wrapper">
        <div class="video-wrapper">
          <div class="video-container">
            <iframe
              v-if="!isDesktop"
              src="https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M"
              title="世田谷区オリジナルアニメ「新BOPへようこそ!」"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="eager"
            ></iframe>
            <iframe 
              v-else
              src="https://www.youtube.com/embed/hdK1_B_Mef8?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=hdK1_B_Mef8"
              title="デスクトップ表示用動画"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="eager"
            ></iframe>
          </div>
          <div class="video-overlay">
            <div class="play-button">
              <!-- <font-awesome-icon :icon="['fas', 'play']" /> -->
            </div>
          </div>
        </div>
        
        <div class="animation-info">
          <h3 class="animation-title">{{ $t('creatives.animation.tcuAnimation.title') }}</h3>
          
          <div class="info-grid">
            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon :icon="['fas', 'calendar']" />
              </div>
              <div class="info-content">
                <span class="info-label">制作年</span>
                <span class="info-value">2023年</span>
              </div>
            </div>
          </div>
          
          <div class="credits-section">
            <h4 class="section-subtitle">
              <font-awesome-icon :icon="['fas', 'users']" class="subtitle-icon" />
              <span>クレジット</span>
            </h4>
            <div class="animation-details">
              <p v-if="$t('creatives.animation.tcuAnimation.description.production')" class="animation-detail-item">
                {{ $t('creatives.animation.tcuAnimation.description.production') }}
              </p>
              <p v-if="$t('creatives.animation.tcuAnimation.description.director')" class="animation-detail-item highlight-item">
                {{ $t('creatives.animation.tcuAnimation.description.director') }}
              </p>
              <p v-if="$t('creatives.animation.tcuAnimation.description.animationProduction')" class="animation-detail-item">
                {{ $t('creatives.animation.tcuAnimation.description.animationProduction') }}
              </p>
              <p v-if="$t('creatives.animation.tcuAnimation.description.productionSupport')" class="animation-detail-item">
                {{ $t('creatives.animation.tcuAnimation.description.productionSupport') }}
              </p>
              <p v-if="$t('creatives.animation.tcuAnimation.description.voiceActors')" class="animation-detail-item">
                {{ $t('creatives.animation.tcuAnimation.description.voiceActors') }}
              </p>
              <p v-if="$t('creatives.animation.tcuAnimation.description.websiteProduction')" class="animation-detail-item">
                {{ $t('creatives.animation.tcuAnimation.description.websiteProduction') }}
              </p>
            </div>
          </div>
          
          <!-- <div class="synopsis-section">
            <h4 class="section-subtitle">
              <font-awesome-icon :icon="['fas', 'book-open']" class="subtitle-icon" />
              <span>あらすじ</span>
            </h4>
            <p class="synopsis-text">
              「新BOP」とは、世田谷区が取り組む放課後の居場所づくり事業です。このアニメーションは、小学生の主人公が初めて新BOPを訪れ、そこでの活動や出会いを通じて成長する姿を描いています。
            </p>
          </div> -->
          
          <div class="animation-links">
            <Btn 
              :href="'https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu'" 
              :target="'_blank'" 
              :icon="['fas', 'play']" 
              :text="$t('creatives.animation.tcuAnimation.watch')" 
              :alt="'本編動画を見る（世田谷区公式YouTube）'"
              class="animation btn-primary"
            />
            <Btn 
              :href="'https://tcu-animation.jp'" 
              :target="'_blank'" 
              :icon="['fas', 'globe']" 
              :text="$t('creatives.animation.tcuAnimation.site')" 
              :alt="'公式サイトへ（都市大アニメーション）'"
              class="btn-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Btn from '@/components/Btn.vue';
import { gsap } from 'gsap';

// デスクトップ表示かどうかの状態
const isDesktop = ref(false);
let mediaQueryList = null;

// メディアクエリの状態が変わったときに実行
const handleMediaQueryChange = (e) => {
  isDesktop.value = e.matches;
};

// GSAPアニメーションの初期化
const initializeAnimations = () => {
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
  
  // 各セクションの順次表示
  gsap.from('.info-grid, .credits-section, .synopsis-section, .animation-links', {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.7,
    ease: 'power2.out'
  });
};

onMounted(() => {
  // デスクトップ表示かどうかを判定するためのメディアクエリ
  mediaQueryList = window.matchMedia('(min-width: 968px)');
  
  // 初期表示時の状態設定
  isDesktop.value = mediaQueryList.matches;
  
  // ウィンドウサイズが変わった時に再評価
  mediaQueryList.addEventListener('change', handleMediaQueryChange);
  
  // GSAPアニメーションの実行
  initializeAnimations();
});

onBeforeUnmount(() => {
  // コンポーネント破棄時にリスナーを削除
  if (mediaQueryList) {
    mediaQueryList.removeEventListener('change', handleMediaQueryChange);
  }
});
</script>

<style scoped>
.animation-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}

.section-header {
  margin-bottom: 0.8rem;
  position: relative;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  display: inline-block;
  position: relative;
}

.section-divider {
  height: 3px;
  width: 60px;
  background: linear-gradient(90deg, var(--primary-color), rgba(255, 142, 83, 0.3));
  border-radius: 3px;
  margin-bottom: 0.8rem;
}

.section-description {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  max-width: 800px;
  color: #333;
}

.animation-item {
  /* background: rgba(255, 255, 255, 0.04); */
  /* border-radius: 1.2rem; */
  /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06); */
  overflow: hidden;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  transition: all 0.4s ease;
}

.animation-item:hover {
  /* box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08); */
  transform: translateY(-2px);
}

.content-wrapper {
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}

.video-wrapper {
  position: relative;
  width: 100%;
  /* overflow: hidden; */
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 アスペクト比 */
  /* overflow: hidden; */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.video-wrapper:hover .video-overlay {
  opacity: 1;
}

.video-wrapper:hover .play-button {
  transform: scale(1);
}
/* 
.animation-info {
  padding: 2rem;
} */

.animation-title {
  font-size: 1.3rem;
  margin: 0 0 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

/* .info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.info-icon {
  width: 36px;
  height: 36px;
  background: rgba(255, 142, 83, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1rem;
}

.info-content {
  display: flex;
  flex-direction: column;
} */

.info-label {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 0.2rem;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
}

.section-subtitle {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.8rem 0 0.5rem;
  color: #444;
}

.subtitle-icon {
  color: var(--primary-color);
  font-size: 0.9rem;
}

.credits-section, .synopsis-section {
  border-radius: 0.8rem;
  padding: .3rem .5rem;
  margin-bottom: 0.8rem;
}

.animation-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.animation-detail-item {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
  position: relative;
  padding-left: 1rem;
  color: #444;
}

.animation-detail-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #333;
  font-weight: bold;
}

.highlight-item {
  font-weight: 600;
  color: #333;
}

.synopsis-text {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #444;
  margin: 0;
}

.animation-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

.animation-links > * {
  flex: 1;
  min-width: 140px;
}

.btn-primary {
  /* background: linear-gradient(135deg, rgba(79, 174, 242, 0.9) 0%, rgba(79, 174, 242, 0.6) 100%); */
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.btn-primary:hover {
  /* background: linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(255, 142, 83, 1) 100%); */
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  transform: translateY(-4px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 142, 83, 0.3);
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

@media (min-width: 968px) {
  .content-wrapper {
    display: grid;
    grid-template-columns: 40% 60%;
    max-height: none;
  }
  
  .video-wrapper {
    border-radius: 1.2rem 0 0 1.2rem;
    height: 100%;
  }
  
  .video-container {
    height: 100%;
    padding-top: 0;
  }
  
  .animation-info {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  
  .credits-section {
    flex: 0 0 auto;
  }
  
  .synopsis-section {
    flex: 0 0 auto;
  }
}

@media (max-width: 967px) {
  .video-wrapper {
    border-radius: 1.2rem 1.2rem 0 0;
    max-height: 40vh;
  }
  
  .content-wrapper {
    max-height: none;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .animation-info {
    padding: 0.8rem 1rem;
    overflow: hidden;
  }
  
  .credits-section {
    display: none;
  }
  
  .synopsis-section {
    max-height: 15vh;
  }
  
  .animation-links {
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .animation-section {
    height: 100vh;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .section-description {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }
  
  .animation-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.3rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
  
  .animation-info {
    padding: 0.8rem;
  }
  
  .credits-section, .synopsis-section {
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.5rem;
  }
  
  .animation-links {
    flex-direction: row;
    margin-top: 0.5rem;
  }
  
  .animation-links > * {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
}
</style>