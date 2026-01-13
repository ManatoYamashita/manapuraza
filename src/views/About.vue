<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import type { Locale } from '@/types';
import AboutHero from '@/components/AboutHero.vue';
import AboutInfomations from '@/components/AboutInfomations.vue';
import AboutHistory from '@/components/AboutHistory.vue';

const { locale } = useI18n<{ message: string }, Locale>();

  // SEOメタタグ設定
  useHead({
    title: computed(() => 
      locale.value === 'ja' 
        ? '山下真和都(マナト) - About | YAMASHITAMANA.TO'
        : 'Manato Yamashita - About | YAMASHITAMANA.TO'
    ),
    meta: [
      {
        name: 'description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都（山下マナト）のプロフィール。東京都市大学メディア情報学部でコンピュータサイエンスを学んでいます。Web開発、アニメーション、イラストレーション、動画編集などのクリエイティブ活動が趣味です！'
            : 'Profile of Manato Yamashita. Student at Tokyo City University studying Computer Science. Web development, animation, illustration and creative activities are my hobbies!'
        )
      },
      {
        name: 'keywords',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都, 山下マナト, プロフィール, 東京都市大学, Web開発, アニメーション, イラスト'
            : 'Manato Yamashita, Profile, Tokyo City University, Web Development, Animation, Illustration'
        )
      },
      {
        property: 'og:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? '山下真和都(マナト) - About | YAMASHITAMANA.TO'
            : 'Manato Yamashita - About | YAMASHITAMANA.TO'
        )
      },
      {
        property: 'og:description',
        content: computed(() => 
          locale.value === 'ja'
          ? '山下真和都（山下マナト）のプロフィール。東京都市大学メディア情報学部でコンピュータサイエンスを学んでいます。Web開発、アニメーション、イラストレーション、動画編集などのクリエイティブ活動が趣味です！'
          : 'Profile of Manato Yamashita. Student at Tokyo City University studying Computer Science. Web development, animation, illustration and creative activities are my hobbies!'
        )
      },
      {
        property: 'og:url',
        content: 'https://yamashitamana.to/about'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        property: 'og:image',
        content: 'https://yamashitamana.to/山下真和都(マナト).webp'
      },
      {
        name: 'twitter:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? '山下真和都(マナト) - About'
            : 'Manato Yamashita - About'
        )
      },
      {
        name: 'twitter:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都のプロフィール。東京都市大学の学生、クリエイター。'
            : 'Profile of Manato Yamashita. TCU student and creator.'
        )
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://yamashitamana.to/about'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
          "alternateName": ["山下マナト", "ヤマシタマナト", "Manato Yamashita"],
          "url": "https://yamashitamana.to/about",
          "image": "https://yamashitamana.to/山下真和都(マナト).webp",
          "jobTitle": locale.value === 'ja' ? "学生 / エンジニア" : "Student / Engineer",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": locale.value === 'ja' ? "東京都市大学" : "Tokyo City University"
          },
          "sameAs": [
            "https://bsky.app/profile/yamashita.bsky.social",
            "https://www.linkedin.com/in/yamashitamanato",
            "https://github.com/ManatoYamashita",
            "https://bento.me/ym",
            "https://twitter.com/tcu_dc",
            "https://www.instagram.com/manapuraza",
            "https://www.youtube.com/manapuraza"
          ]
        }))
      }
    ]
  });
</script>

<template>
  <main id="about">
    <AboutHero />
    <AboutInfomations />
    <AboutHistory />
  </main>
</template>

<style lang="css" scoped>
  /* === ベーススタイル（モバイル: ~480px） === */
  main#about {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    pointer-events: all;
  }

  /* === タブレット（481px-768px） === */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    main#about {
      padding: 2rem;
    }
  }

  /* === デスクトップ（769px~） === */
  @media screen and (min-width: 769px) {
    main#about {
      padding: 3rem;
    }
  }
</style>
