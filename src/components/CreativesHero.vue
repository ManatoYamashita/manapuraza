<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Creatives <span>based on</span> <span class="highlight">Design</span></h1>
        <p class="hero-description">{{ $t('creatives.paragraph') }}</p>

        <!-- カテゴリフィルターボタン -->
        <div class="category-filters">
          <button
            @click="setFilter('all')"
            :class="['filter-tag', { active: activeFilter === 'all' }]"
          >
            <fa :icon="['fas', 'th']" class="tag-icon" />
            <span>All</span>
          </button>
          <button
            @click="setFilter('animation')"
            :class="['filter-tag', { active: activeFilter === 'animation' }]"
          >
            <fa :icon="['fas', 'film']" class="tag-icon" />
            <span>Anime</span>
          </button>
          <button
            @click="setFilter('development')"
            :class="['filter-tag', { active: activeFilter === 'development' }]"
          >
            <fa :icon="['fas', 'code']" class="tag-icon" />
            <span>Dev</span>
          </button>
          <button
            @click="setFilter('illustration')"
            :class="['filter-tag', { active: activeFilter === 'illustration' }]"
          >
            <fa :icon="['fas', 'palette']" class="tag-icon" />
            <span>Illust</span>
          </button>
          <button
            @click="setFilter('video')"
            :class="['filter-tag', { active: activeFilter === 'video' }]"
          >
            <fa :icon="['fas', 'video']" class="tag-icon" />
            <span>Video</span>
          </button>
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

// フィルター状態管理
const activeFilter = ref('all');

// Emit定義
const emit = defineEmits(['filter-change']);

// フィルター設定関数
const setFilter = (category) => {
  activeFilter.value = category;
  emit('filter-change', category); // 親コンポーネント（Creatives.vue）に通知
};

onMounted(async () => {
  // GSAPを動的インポートして初期バンドルサイズを削減
  const { gsap } = await import('gsap');
  
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
  /* min-height: 100svh; */
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
  color: #f0d300; /* Primary Yellow */
  position: relative;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  color: #333;
}

/* カテゴリフィルターボタン */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
  margin-top: 2rem;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  background: rgba(240, 211, 0, 0.15); /* Primary Yellow 半透明 */
  border: 2px solid rgba(240, 211, 0, 0.4);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  background: rgba(240, 211, 0, 0.25);
  border-color: rgba(240, 211, 0, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(240, 211, 0, 0.2);
}

.filter-tag.active {
  background: #f0d300; /* Primary Yellow ソリッド */
  border-color: #d7a800;
  color: #000;
  font-weight: 700;
}

.tag-icon {
  font-size: 1rem;
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
  .hero-section {
    padding: 1rem;
  }
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

  .category-filters {
    justify-content: center;
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

  /* 要素順序: h1 → sphere → p → filters（モバイル時） */
  .hero-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "sphere"
      "desc"
      "filters";
    justify-items: center;
    text-align: center;
    gap: 1.25rem;
  }

  /* .hero-text をフラット化して子要素をグリッドアイテム化 */
  .hero-text {
    display: contents;
  }

  .hero-text h1 {
    grid-area: title;
    margin-bottom: 0.25rem;
  }

  .hero-visual {
    grid-area: sphere;
  }

  .hero-description {
    grid-area: desc;
    margin: 0 0 0.5rem 0;
  }

  .category-filters {
    grid-area: filters;
    margin-top: 0.25rem;
    gap: 0.5rem;
    justify-content: center;
  }

  .filter-tag {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .tag-icon {
    font-size: 0.9rem;
  }
}
</style> 