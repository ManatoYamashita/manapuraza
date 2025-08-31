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
  import { useHead } from '@vueuse/head';

  const { t, locale } = useI18n();

  // SEOメタタグ設定
  useHead({
    title: computed(() => 
      locale.value === 'ja' 
        ? 'Creatives - 作品集 | MANAPURAZA.COM'
        : 'Creatives - Portfolio | MANAPURAZA.COM'
    ),
    meta: [
      {
        name: 'description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの学生時代の作品集。世田谷区公式アニメ「新BOPへようこそ！」の監督作品、Web開発プロジェクト、イラストレーション、動画制作など大学時代のクリエイティブ作品を紹介。'
            : 'Portfolio of Manato Yamashita. Director of Setagaya Ward official anime, web development projects, illustrations, video production and creative works from university.'
        )
      },
      {
        name: 'keywords',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都, 山下マナト, ポートフォリオ, 作品集, 世田谷区アニメ, 新BOPへようこそ, Web開発, イラスト, 動画制作'
            : 'Manato Yamashita, Portfolio, Setagaya Animation, Web Development, Illustration, Video Production'
        )
      },
      {
        property: 'og:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Creatives - 作品集 | MANAPURAZA.COM'
            : 'Creatives - Portfolio | MANAPURAZA.COM'
        )
      },
      {
        property: 'og:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの作品集。アニメーション監督作品、Web開発、イラスト、動画制作など幅広いクリエイティブ作品を掲載。'
            : 'Portfolio of Manato Yamashita featuring animation direction, web development, illustrations and video production.'
        )
      },
      {
        property: 'og:url',
        content: 'https://manapuraza.com/creatives'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: 'https://manapuraza.com/ogp.jpg'
      },
      {
        name: 'twitter:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Creatives - 作品集'
            : 'Creatives - Portfolio'
        )
      },
      {
        name: 'twitter:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトの作品集。世田谷区公式アニメ監督作品、Web開発、イラスト、動画制作。'
            : 'Portfolio of Manato Yamashita. Animation, web development, illustrations and more.'
        )
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://manapuraza.com/creatives'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": locale.value === 'ja' ? "作品集" : "Portfolio",
          "url": "https://manapuraza.com/creatives",
          "description": locale.value === 'ja' 
            ? "山下マナトのクリエイティブ作品集"
            : "Creative portfolio of Manato Yamashita",
          "creator": {
            "@type": "Person",
            "name": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
            "url": "https://manapuraza.com/about"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "position": 1,
                "name": locale.value === 'ja' 
                  ? "世田谷区オリジナルアニメ「新BOPへようこそ！」"
                  : "Setagaya Ward Original Anime 'Welcome to Shin-BOP!'",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
                "url": "https://tcu-animation.jp"
              },
              {
                "@type": "WebSite",
                "position": 2,
                "name": "Web Development Projects",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita"
              },
              {
                "@type": "VisualArtwork",
                "position": 3,
                "name": locale.value === 'ja' ? "イラストレーション作品" : "Illustration Works",
                "creator": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita"
              }
            ]
          }
        }))
      }
    ]
  });

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
