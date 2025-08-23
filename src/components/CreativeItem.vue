<template>
  <!-- Animation mode: セクション形式のレイアウト -->
  <section v-if="mode === 'Animation'" id="animation" class="animation-section creative-item creative-item--animation">
    <div class="section-header">
      <h2 class="section-title">Animation</h2>
      <div class="section-divider"></div>
    </div>
    <p class="section-description">{{ description }}</p>
    
    <div class="animation-item">
      <div class="content-wrapper">
        <div class="video-wrapper">
          <div class="video-container">
            <!-- YouTube iframeスケルトンローディングシステム -->
            <div v-if="isVideoLoading" class="youtube-skeleton">
              <div class="skeleton-content">
                <div class="skeleton-play-button">
                  <div class="skeleton-play-icon"></div>
                </div>
                <div class="skeleton-bottom">
                  <div class="skeleton-progress-bar"></div>
                  <div class="skeleton-controls">
                    <div class="skeleton-control-button"></div>
                    <div class="skeleton-control-button"></div>
                    <div class="skeleton-control-button"></div>
                  </div>
                </div>
              </div>
              <div class="skeleton-loading-text">動画を読み込み中...</div>
            </div>
            
            <!-- YouTube iframe（読み込み完了時に表示） -->
            <iframe
              v-if="!isDesktop"
              ref="mobileIframe"
              :class="{ 'iframe-loaded': !isVideoLoading }"
              :src="animationData.videoUrls.mobile"
              :title="animationData.titleMain || title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="eager"
              @load="onIframeLoad"
            ></iframe>
            <iframe 
              v-else
              ref="desktopIframe"
              :class="{ 'iframe-loaded': !isVideoLoading }"
              :src="animationData.videoUrls.desktop"
              :title="animationData.titleMain || title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="eager"
              @load="onIframeLoad"
            ></iframe>
          </div>
          <div class="video-overlay">
            <div class="play-button"></div>
          </div>
        </div>
        
        <div class="animation-info">
          <h3 class="animation-title">
            <span class="animation-title-label">{{ animationData.titleLabel || title }}</span>
            <span class="animation-title-main">{{ animationData.titleMain || title }}</span>
          </h3>
          
          <div class="info-grid" v-if="animationData.productionYear">
            <div class="info-item">
              <div class="info-icon">
                <fa :icon="['fas', 'calendar']" />
              </div>
              <div class="info-content">
                <span class="info-label">制作年</span>
                <span class="info-value">{{ animationData.productionYear }}</span>
              </div>
            </div>
          </div>
          
          <div class="credits-section" v-if="animationCredits.length > 0">
            <dl class="credits-grid">
              <template v-for="item in animationCredits" :key="item.label + item.value">
                <dt v-if="item.label" class="credit-label">{{ item.label }}</dt>
                <dd class="credit-value">{{ item.value }}</dd>
              </template>
            </dl>
          </div>
          
          <div class="animation-links" v-if="animationData.buttons && animationData.buttons.length > 0">
            <Btn 
              v-for="(button, btnIndex) in animationData.buttons"
              :key="btnIndex"
              :href="button.href" 
              :target="button.target" 
              :icon="button.icon" 
              :text="button.text" 
              :subText="button.subText"
              :alt="button.alt"
              :variant="button.variant"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Other modes: カード形式のレイアウト -->
  <li v-else :class="`creative-item creative-item--${mode.toLowerCase()}`">
    <a :href="url" target="_blank">
      <div class="img-cover">
        <img :src="resolvedThumbnail" :alt="title" loading="lazy" @error="handleImageError" />
      </div>
      <h3>{{ title }} <fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
      <p>{{ description }}</p>
    </a>
  </li>
</template>

<script>
  import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import Btn from '@/components/Btn.vue';

  export default {
    name: 'creativeItem',
    components: {
      Btn
    },
    props: {
      url: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      thumbnail: { type: String, required: true },
      index: { type: Number, required: true },
      mode: { 
        type: String, 
        required: true,
        validator: (value) => ['Animation', 'Development', 'Illustration', 'Video'].includes(value)
      },
      animationData: {
        type: Object,
        required: false,
        default: () => ({
          videoUrls: { mobile: '', desktop: '' },
          credits: [],
          productionYear: '',
          titleLabel: '',
          titleMain: '',
          buttons: []
        })
      }
    },
    setup(props) {
      // Animation mode用の状態管理
      const isDesktop = ref(false);
      const isVideoLoading = ref(true);
      const mobileIframe = ref(null);
      const desktopIframe = ref(null);
      let mediaQueryList = null;
      let loadingTimeout = null;

      // サムネイル画像パスを解決
      const resolvedThumbnail = computed(() => {
        try {
          if (props.thumbnail.startsWith('@/')) {
            return new URL(props.thumbnail, import.meta.url).href;
          }
          return props.thumbnail;
        } catch (error) {
          console.error('画像パスの解決に失敗しました:', error);
          return 'https://via.placeholder.com/300x200?text=Image+Not+Found';
        }
      });

      // Mode-based 設定システム
      const modeConfig = computed(() => ({
        Animation: { icon: 'film', color: '#9333ea' },      
        Development: { icon: 'code', color: '#4399BB' },     
        Illustration: { icon: 'palette', color: '#f97316' }, 
        Video: { icon: 'video', color: '#dc2626' }          
      }));

      const currentModeConfig = computed(() => modeConfig.value[props.mode]);

      // Animation mode用のクレジット処理
      const animationCredits = computed(() => {
        if (props.mode !== 'Animation' || !props.animationData.credits) {
          return [];
        }
        return props.animationData.credits
          .map((credit) => {
            if (!credit) return null;
            const splitIndex = credit.indexOf(':') !== -1 ? credit.indexOf(':') : credit.indexOf('：');
            if (splitIndex === -1) {
              return { label: '', value: String(credit).trim() };
            }
            const label = credit.slice(0, splitIndex).trim();
            const value = credit.slice(splitIndex + 1).trim();
            return { label, value };
          })
          .filter(Boolean);
      });

      // Animation mode用のiframe読み込み管理
      const onIframeLoad = () => {
        console.log('CreativeItem: YouTube iframe loaded successfully');
        
        if (window.gsap) {
          window.gsap.to('.youtube-skeleton', {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              isVideoLoading.value = false;
            }
          });
        } else {
          setTimeout(() => {
            isVideoLoading.value = false;
          }, 300);
        }
      };

      const resetLoadingState = () => {
        isVideoLoading.value = true;
        
        if (loadingTimeout) {
          clearTimeout(loadingTimeout);
        }
        
        loadingTimeout = setTimeout(() => {
          console.log('CreativeItem: Loading timeout - forcing iframe display');
          isVideoLoading.value = false;
        }, 10000);
      };

      const handleMediaQueryChange = (e) => {
        const wasDesktop = isDesktop.value;
        isDesktop.value = e.matches;
        
        if (wasDesktop !== isDesktop.value) {
          resetLoadingState();
          console.log(`CreativeItem: Device switched to ${isDesktop.value ? 'desktop' : 'mobile'}`);
        }
      };

      watch(isDesktop, (newValue, oldValue) => {
        if (oldValue !== undefined && newValue !== oldValue) {
          resetLoadingState();
        }
      }, { immediate: false });

      return {
        resolvedThumbnail,
        modeConfig,
        currentModeConfig,
        animationCredits,
        isDesktop,
        isVideoLoading,
        mobileIframe,
        desktopIframe,
        onIframeLoad,
        resetLoadingState,
        handleMediaQueryChange
      };
    },
    async mounted() {
      const { gsap } = await import('gsap');
      
      if (this.mode === 'Animation') {
        // Animation mode用の初期化
        mediaQueryList = window.matchMedia('(min-width: 968px)');
        this.isDesktop = mediaQueryList.matches;
        this.resetLoadingState();
        mediaQueryList.addEventListener('change', this.handleMediaQueryChange);
        
        // Animation section用のアニメーション
        gsap.from('#animation', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        });
        
        gsap.from('.video-container', {
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          delay: 0.3,
          ease: 'back.out(1.7)'
        });
        
        gsap.from('.animation-info', {
          opacity: 0,
          x: 30,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out'
        });
        
        gsap.from('.info-grid, .credits-section, .animation-links', {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.7,
          ease: 'power2.out'
        });
      } else {
        // 他のmode用のアニメーション
        gsap.from(this.$el, {
          y: 200,
          duration: 1,
          delay: this.index * 0.2,
          ease: 'power4.out',
        });
      }
    },
    beforeUnmount() {
      if (this.mode === 'Animation') {
        if (mediaQueryList) {
          mediaQueryList.removeEventListener('change', this.handleMediaQueryChange);
        }
        if (loadingTimeout) {
          clearTimeout(loadingTimeout);
        }
      }
    },
    methods: {
      handleImageError(e) {
        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
        console.warn(`画像の読み込みに失敗しました: ${this.thumbnail}`);
      }
    }
  };
</script>

<style scoped>
/* Animation mode完全スタイル（AnimationSection.vue移植） */
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
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  max-width: 800px;
  color: #333;
}

.animation-item {
  /* background: rgba(255, 255, 255, 0.04); */
  /* border-radius: 1.2rem; */
  /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06); */
  overflow: visible; /* デスクトップでははみ出しを許可してボタンの影や輪郭が切れないようにする */
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
  display: grid;
  grid-template-columns: 40% 60%;
  max-height: none;
  overflow: visible;
}

.video-wrapper {
  position: relative;
  width: 100%;
  border-radius: 1.2rem 0 0 1.2rem;
  height: 100%;
  z-index: 0;
  /* overflow: hidden; */
}

.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0;
  /* overflow: hidden; */
}

/* YouTube スケルトンローディングスタイル */
.youtube-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
}

.skeleton-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
}

.skeleton-play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: skeleton-pulse 2s ease-in-out infinite;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.skeleton-play-icon {
  width: 0;
  height: 0;
  border-left: 20px solid #ccc;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  margin-left: 4px;
  animation: skeleton-pulse 2s ease-in-out infinite reverse;
}

.skeleton-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.skeleton-progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
}

.skeleton-progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: skeleton-slide 2.5s ease-in-out infinite;
}

.skeleton-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.skeleton-control-button {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  animation: skeleton-pulse 2s ease-in-out infinite;
}

.skeleton-control-button:nth-child(2) {
  animation-delay: 0.2s;
}

.skeleton-control-button:nth-child(3) {
  animation-delay: 0.4s;
}

.skeleton-loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20px);
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
  animation: skeleton-pulse 2s ease-in-out infinite;
  text-align: center;
}

/* iframe表示時のスムーズ遷移 */
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 1;
}

.video-container iframe.iframe-loaded {
  opacity: 1;
  z-index: 3;
}

/* スケルトンアニメーション */
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes skeleton-slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
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

.animation-title {
  font-size: 1.3rem;
  margin: 0 0 0.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
}

/* タイトルのラベルと本タイトルを分離表示 */
.animation-title-label {
  display: block;
  font-size: 0.85rem;
  color: #777;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.animation-title-main {
  display: block;
}

.animation-info {
  padding-left: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-icon {
  color: var(--primary-color);
  font-size: 0.9rem;
}

.info-content {
  display: flex;
  flex-direction: column;
}

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

.credits-section {
  border-radius: 0.8rem;
  padding: .3rem .5rem;
  margin-bottom: 0.8rem;
}

/* ラベル/値の2カラムレイアウト */
.credits-grid {
  display: grid;
  grid-template-columns: 140px 1fr;
  column-gap: 0.8rem;
  row-gap: 0.4rem;
  margin: 0;
}

.credit-label {
  font-size: 0.85rem;
  color: #777;
  font-weight: 600;
  text-align: left;
}

.credit-value {
  margin: 0;
  font-size: 0.95rem;
  color: #333;
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
  width: 100%; /* リンク領域を右カラム幅いっぱいにする */
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

@media (max-width: 967px) {
  /* スマートフォンでは詳細情報（info-content）を非表示 */
  .info-content {
    display: none;
  }
  .info-grid {
    display: none;
  }
  .info-icon {
    display: none;
  }
  .animation-section {
    height: auto; /* 固定高さを解除して重なりを根本解消 */
    min-height: 100vh; /* 初期表示の視覚安定性を確保 */
  }

  .animation-item {
    overflow: hidden; /* モバイルでははみ出しを抑制 */
  }

  .video-wrapper {
    border-radius: 1.2rem 1.2rem 0 0;
    max-height: none; /* モバイル時は高さ制限をなくし重なりを防止 */
    overflow: hidden; /* iframeのはみ出しを防止 */
  }
  
  .content-wrapper {
    display: flex;
    flex-direction: column;
    max-height: none;
  }
  
  .video-container {
    height: auto;
    padding-top: 56.25%; /* 16:9 アスペクト比 */
  }
  
  .animation-info {
    padding-top: 0.5rem;
    padding-left: 0;
    overflow: hidden; /* モバイルでははみ出し防止 */
    flex-direction: column;
    z-index: 1; /* モバイルは標準優先度で十分 */
  }
  
  .credits-section {
    display: none;
  }
  
  .synopsis-section {
    max-height: 15vh;
  }
  
  .animation-links {
    margin-top: 0.8rem; /* 余白を拡張して重なりにくくする */
    position: relative;
    z-index: 1;
    padding-left: 0; /* モバイルでは余白リセット */
  }

  .animation-detail-item {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}

@media (max-width: 540px) {
  /* スマホでは1カラムにして読みやすく（ただし本セクション自体は非表示設定が別で適用中） */
  .credits-grid {
    grid-template-columns: 1fr;
  }
  .credit-label {
    text-align: left;
    opacity: 0.8;
  }
}

@media (max-width: 480px) {
  .animation-section {
    height: auto; /* 480px以下も固定高さを解除 */
    min-height: 100vh;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .section-description {
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
    flex-direction: column;
    margin-top: 0.5rem;
  }
  
  .animation-links > * {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
}
  
  /* カード形式の基本スタイル（前バージョン準拠） */
  .creative-item:not(.animation-section) {
    margin: 1rem 0;
    overflow: hidden;
  }

  .img-cover {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 0.5rem;
  }

  .img-cover img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .img-cover img:hover {
    transform: scale(1.1);
  }

  .fa {
    font-size: 0.8rem;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgb(10, 10, 10);
  }

  a:hover {
    color: rgb(67, 153, 187);
    text-decoration: underline;
  }

  /* Illustration mode専用の画像制限 */
  .creative-item--illustration:not(.animation-section) .img-cover {
    height: auto;
    padding-top: 0;
  }

  .creative-item--illustration:not(.animation-section) .img-cover img {
    position: static;
    width: 100%;
    max-height: 250px;
    height: auto;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .fa {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }
</style>