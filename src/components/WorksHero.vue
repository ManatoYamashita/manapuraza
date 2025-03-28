<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Unleash <span>your</span> <span class="highlight">Design</span> <span>Exploration</span></h1>
        <p class="hero-description">{{ $t('works.paragraph') }}</p>
        <div class="cta-button">
          <Btn 
            @click="toggleDropdown"
            :text="'Explore Now'" 
            :showArrow="true"
            :alt="'コンテンツを探索する'"
          />
          
          <!-- プルダウンメニュー -->
          <div class="dropdown-menu" v-if="isDropdownOpen">
            <a href="#animation" class="dropdown-item" @click="closeDropdown">
              <span class="dropdown-text">Animation</span>
              <font-awesome-icon :icon="['fas', 'film']" class="dropdown-icon" />
            </a>
            <a href="#programming" class="dropdown-item" @click="closeDropdown">
              <span class="dropdown-text">Programming / Web</span>
              <font-awesome-icon :icon="['fas', 'code']" class="dropdown-icon" />
            </a>
            <a href="#graphics" class="dropdown-item" @click="closeDropdown">
              <span class="dropdown-text">Illustration / Graphics</span>
              <font-awesome-icon :icon="['fas', 'palette']" class="dropdown-icon" />
            </a>
            <a href="#video" class="dropdown-item" @click="closeDropdown">
              <span class="dropdown-text">Video / Animation</span>
              <font-awesome-icon :icon="['fas', 'video']" class="dropdown-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="sphere-container">
          <div class="sphere"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import Btn from '@/components/Btn.vue';

// ドロップダウンの状態管理
const isDropdownOpen = ref(false);

// ドロップダウンの表示/非表示を切り替える
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// ドロップダウンを閉じる
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

onMounted(() => {
  // Hero セクションのアニメーション
  const tl = gsap.timeline();
  
  tl.fromTo('.hero-text h1', 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }
  )
  .fromTo('.hero-description', 
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7')
  .fromTo('.cta-button', 
    {
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7')
  .fromTo('.sphere', 
    {
      scale: 0.5,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)'
    }, '-=0.8');
});
</script>

<style scoped>
/* Hero セクションのスタイル */
.hero-section {
  width: 100%;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  min-height: 100svh;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.hero-text {
  flex: 1.5;
  position: relative;
  z-index: 10; /* テキストとドロップダウンメニューのz-indexを上げる */
}

.hero-text h1 {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #1a1a1a;
}

.hero-text h1 span {
  display: inline-block;
}

.hero-text h1 .highlight {
  color: #4399BB;
  position: relative;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  color: #333;
}

.cta-button {
  margin-top: 1.5rem;
  position: relative;
}

/* ドロップダウンメニューのスタイル */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 280px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;
  opacity: 0;
  animation: fadeInDropdown 0.3s ease-out forwards;
}

@keyframes fadeInDropdown {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: rgba(67, 153, 187, 0.1);
}

.dropdown-text {
  font-size: 1rem;
  color: #333;
}

.dropdown-icon {
  color: #4399BB;
  font-size: 1.2rem;
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.sphere-container {
  position: relative;
  width: 250px;
  height: 250px;
  perspective: 800px;
}

.sphere {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #e6f7ff 100%);
  box-shadow: 
    inset -20px -20px 60px rgba(67, 153, 187, 0.3),
    inset 20px 20px 60px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(67, 153, 187, 0.2);
  transform-style: preserve-3d;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotateY(0);
  }
  50% {
    transform: translateY(-20px) rotateY(20deg);
  }
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2.4rem;
  }
  
  .hero-description {
    margin: 0 auto 2rem auto;
  }
  
  .sphere-container {
    width: 200px;
    height: 200px;
  }
  
  .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInDropdownMobile 0.3s ease-out forwards;
  }
  
  @keyframes fadeInDropdownMobile {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
}

@media (max-width: 540px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .sphere-container {
    width: 150px;
    height: 150px;
  }
  
  .dropdown-menu {
    width: 90%;
  }
}
</style> 