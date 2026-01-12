<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import type { Locale } from '@/types';
import AboutHero from '@/components/AboutHero.vue';
import AboutProfile from '@/components/AboutProfile.vue';
import AboutHistory from '@/components/AboutHistory.vue';

const { locale } = useI18n<{ message: string }, Locale>();

  // SEOメタタグ設定
  useHead({
    title: computed(() => 
      locale.value === 'ja' 
        ? '山下真和都(マナト) - About | MANAPURAZA.COM'
        : 'Manato Yamashita - About | MANAPURAZA.COM'
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
            ? '山下真和都(マナト) - About | MANAPURAZA.COM'
            : 'Manato Yamashita - About | MANAPURAZA.COM'
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
        content: 'https://manapuraza.com/about'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        property: 'og:image',
        content: 'https://manapuraza.com/山下真和都(マナト).webp'
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
        href: 'https://manapuraza.com/about'
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
          "url": "https://manapuraza.com/about",
          "image": "https://manapuraza.com/山下真和都(マナト).webp",
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
  <main class="about">
    <AboutHero />
    <AboutProfile />
    <AboutHistory />
  </main>
</template>

<style lang="css" scoped>
  /* === ベーススタイル（モバイル: ~480px） === */
  main.about {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    pointer-events: all;
  }

  /* === タブレット（481px-768px） === */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    main.about {
      padding: 2rem;
    }
  }

  /* === デスクトップ（769px~） === */
  @media screen and (min-width: 769px) {
    main.about {
      padding: 3rem;
    }
  }
</style>
