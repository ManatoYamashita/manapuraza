<template>
  <section id="about-hero" class="profile-card">
    <div class="profile-layout">
      <!-- 画像 -->
      <div class="profile-image-container">
        <img
          fetchpriority="high"
          :src="imageSrc"
          :alt="imageAlt"
          class="profile-image"
        />
      </div>

      <!-- 右側コンテンツ -->
      <div class="profile-right-content">
        <!-- 名前・読み仮名 -->
        <header class="profile-info">
          <div class="name-section">
            <h1 class="profile-name">{{ t('about.ym') }}</h1>
            <a
              :href="externalProfileUrl"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="t('about.externalProfileLabel')"
              class="external-link-icon"
            >
              <ArrowUpRight :size="24" />
            </a>
          </div>
          <p class="profile-reading">{{ t('about.reading') }}</p>
        </header>

        <!-- メッセージ -->
        <section class="message-section">
          <h2 class="section-title">{{ t('about.howyoufeel') }}</h2>
          <p class="message-text">{{ t('about.passage') }} &#x1F34C;</p>
        </section>
      </div>
    </div>

    <!-- アクション -->
    <div class="profile-actions">
      <div class="sns-container">
        <Sns />
      </div>
      <router-link
        to="/contact"
        class="cta-button"
        :aria-label="t('about.ctaLabel')"
      >
        <Mail :size="20" class="icon" />
        <span class="label">{{ t('about.ctaText') }}</span>
        <ArrowRight :size="20" class="icon" />
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import type { Locale } from '@/types';
  import { ArrowUpRight, ArrowRight, Mail } from 'lucide-vue-next';
  import Sns from '@/components/Sns.vue';

  const { t, locale } = useI18n<{ message: string }, Locale>();
  const imageSrc = '/山下真和都(マナト).webp';
  const externalProfileUrl = 'https://bento.me/ym/';

  const imageAlt = computed(() =>
    locale.value === 'ja' ? '山下真和都(マナト)' : 'Manato Yamashita'
  );

  onMounted(async () => {
    // GSAPを動的インポートして初期バンドルサイズを削減
    const { gsap } = await import('gsap');

    // 1. 画像（0.0s）
    gsap.from('.profile-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // 2. 名前セクション（0.2s）
    gsap.from('.name-section', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out',
    });

    // 3. 読み仮名（0.4s）
    gsap.from('.profile-reading', {
      opacity: 0,
      y: 10,
      duration: 0.6,
      delay: 0.4,
      ease: 'power2.out',
    });

    // 4. メッセージ（0.5s）
    gsap.from('.message-section', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });

    // 5. CTAボタン（0.7s）
    gsap.from('.cta-button', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.7,
      ease: 'back.out(1.4)',
      clearProps: 'opacity',
    });

    // 6. SNSアイコン（Sns.vue内のstagger維持）
  });
</script>
  
<style scoped>
/* === ベーススタイル（モバイル: ~480px） === */
#about-hero {
  width: 100%;
}

.profile-card {
  display: flex;
  flex-direction: column;
}

/* レイアウトコンテナ */
.profile-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 画像 */
.profile-image-container {
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
}

/* 右側コンテンツ */
.profile-right-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 1rem;
}

/* プロフィール情報 */
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.name-section {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.profile-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.external-link-icon {
  color: #666;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.external-link-icon:hover {
  color: #f0d300;
  transform: translateY(-2px);
}

.profile-reading {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* メッセージセクション */
.message-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #111;
  margin: 0;
}

.message-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
  white-space: pre-line;
}

/* アクション */
.profile-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.9rem 1.8rem;
  width: 100%;
  max-width: 280px;
  background: linear-gradient(135deg, #f0d300 0%, #f5e050 100%);
  color: #111;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(240, 211, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 1;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(240, 211, 0, 0.4);
  background: linear-gradient(135deg, #f5dc00 0%, #f9e860 100%);
}

.cta-button:focus-visible {
  outline: 2px solid #f0d300;
  outline-offset: 2px;
}

.cta-button .icon {
  flex-shrink: 0;
}

.cta-button .label {
  flex-grow: 1;
  text-align: center;
}

.sns-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* === デスクトップ（769px~） === */
@media screen and (min-width: 769px) {
  #about-hero {
    padding: 3rem;
  }

  .profile-layout {
    flex-direction: row;
    gap: 3rem;
  }

  .profile-image-container {
    width: 30%;
    max-width: 350px;
    flex-shrink: 0;
    margin: 0;
  }

  .profile-image {
    border-radius: 50%;
    height: auto;
  }

  .profile-right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .profile-info {
    align-items: flex-start;
    text-align: left;
  }

  .profile-name {
    font-size: 2.5rem;
  }

  .profile-reading {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .message-text {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .profile-actions {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .cta-button {
    display: inline-flex;
    width: auto;
    max-width: none;
  }

  .sns-container {
    width: auto;
  }
}
</style>
  