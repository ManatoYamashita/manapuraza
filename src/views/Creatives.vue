<template>
  <div class="creatives">
    <CreativesHero />

    <main>
      <div id="main-contents">
        
        <!-- Animation Section -->
        <CreativeItem
          :mode="'Animation'"
          :url="'#'"
          :title="$t('creatives.animation.tcuAnimation.title')"
          :description="$t('creatives.animation.paragraph')"
          :thumbnail="'#'"
          :index="0"
          :animationData="animationData"
        />

        <!-- Development Section -->
        <section id="development">
          <h2>Development</h2>
          <p>{{ $t('creatives.dev.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in randomizedDevelopment"
              :key="creative.id"
              :url="creative.url"
              :title="$t(creative.title)"
              :description="$t(creative.description)"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Development'"
            />
          </ul>
        </section>

        <section id="illustration">
          <h2>Illustration</h2>
          <p>{{ $t('creatives.illustration.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in creativesData.illustration"
              :key="creative.id"
              :url="creative.url"
              :title="$t(creative.title)"
              :description="$t(creative.description)"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Illustration'"
            />
          </ul>
        </section>

        <section id="video">
          <h2>Video</h2>
          <p>{{ $t('creatives.video.paragraph') }}</p>
          <ul>
            <CreativeItem
              v-for="(creative, index) in creativesData.video"
              :key="creative.id"
              :url="creative.url"
              :title="$t(creative.title)"
              :description="$t(creative.description)"
              :thumbnail="creative.thumbnail"
              :index="index"
              :mode="'Video'"
            />
          </ul>
        </section>
      </div>

      <a href="https://でじこんちゃん.net" aria-label="でじこんちゃんのサイトへ">
        <div id="image-content">
          <img
            id="dc-chan"
            fetchpriority="low"
            loading="lazy"
            src="@/assets/dcchan.webp"
            alt="dc-chan"
          />
        </div>
      </a>
    </main>
  </div>
</template>

<script setup>
  import CreativeItem from '@/components/CreativeItem.vue';
  import CreativesHero from '@/components/CreativesHero.vue';
  import { creativesData } from '@/data/creatives';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  // Fisher-Yatesアルゴリズムによる真のランダムシャッフル
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // ランダムに並び替えられたプログラミング作品のリスト
  const randomizedDevelopment = computed(() => {
    const items = creativesData?.development;
    if (!items || !Array.isArray(items)) {
      return [];
    }
    return shuffleArray(items);
  });

  // Animation section用のデータ
  const animationData = computed(() => ({
    videoUrls: { 
      mobile: 'https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M',
      desktop: 'https://www.youtube.com/embed/hdK1_B_Mef8?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=hdK1_B_Mef8'
    },
    credits: [
      t('creatives.animation.tcuAnimation.description.production'),
      t('creatives.animation.tcuAnimation.description.director'),
      t('creatives.animation.tcuAnimation.description.animationProduction'),
      t('creatives.animation.tcuAnimation.description.productionSupport'),
      t('creatives.animation.tcuAnimation.description.voiceActors'),
      t('creatives.animation.tcuAnimation.description.websiteProduction')
    ],
    productionYear: '2024~2025',
    titleLabel: t('creatives.animation.tcuAnimation.titleLabel'),
    titleMain: t('creatives.animation.tcuAnimation.titleMain'),
    buttons: [
      {
        href: 'https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu',
        target: '_blank',
        icon: ['fas', 'play'],
        text: t('creatives.animation.tcuAnimation.watchMain'),
        subText: t('creatives.animation.tcuAnimation.watchSub'),
        alt: '本編動画を見る（世田谷区公式YouTube）',
        variant: 'primary'
      },
      {
        href: 'https://tcu-animation.jp',
        target: '_blank',
        icon: ['fas', 'globe'],
        text: t('creatives.animation.tcuAnimation.siteMain'),
        subText: t('creatives.animation.tcuAnimation.siteSub'),
        alt: '公式サイトへ（都市大アニメーション）',
        variant: 'secondary'
      }
    ]
  }));


</script>

<style scoped>
  .creatives {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
    scroll-behavior: smooth;
  }
  .creatives p {
    font-size: 1rem;
  }
  
  /* 各セクションのスタイル */
  section {
    scroll-margin-top: 2rem;
    margin-bottom: 4rem;
  }

  section h2 {
    font-size: 1.7rem;
    margin: 3rem 0 1rem 0;
    position: relative;
    display: inline-block;
  }

  section h2::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(67, 153, 187, 0.8) 0%, rgba(67, 153, 187, 0.2) 100%);
  }


  /* 既存のスタイル */
  #main-contents {
    width: 100%;
  }
  #image-content {
    width: 100%;
    padding: 1rem;
    text-align: right;
  }
  #dc-chan {
    width: 25%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: none;
    pointer-events: none;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: rgb(67, 153, 187);
  }

  /* Illustrationセクションの1列表示 */
  #illustration ul {
    grid-template-columns: 1fr;
  }

  /* タブレット表示用 */
  @media screen and (max-width: 768px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* モバイル表示用 */
  @media screen and (max-width: 480px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
