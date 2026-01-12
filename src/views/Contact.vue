<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { Mail, Share2 } from 'lucide-vue-next';
import type { Locale } from '@/types';
import Sns from '@/components/Sns.vue';

const { t, locale } = useI18n<{ message: string }, Locale>();

  // SEOメタタグ設定
  useHead({
    title: computed(() => 
      locale.value === 'ja' 
        ? 'Contact - お問い合わせ | MANAPURAZA.COM'
        : 'Contact | MANAPURAZA.COM'
    ),
    meta: [
      {
        name: 'description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都（山下マナト）へのお問い合わせページ。Web制作、アニメーション制作、イラスト制作、動画編集などのご依頼・ご相談はこちらから！'
            : 'Contact page for Manato Yamashita. For inquiries about web development, animation production, illustration work and creative projects!'
        )
      },
      {
        name: 'keywords',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下真和都, 山下マナト, お問い合わせ, 連絡先, Web制作依頼, アニメーション制作, イラスト制作'
            : 'Manato Yamashita, Contact, Web Development, Animation Production, Illustration, Creative Services'
        )
      },
      {
        property: 'og:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Contact - お問い合わせ | MANAPURAZA.COM'
            : 'Contact | MANAPURAZA.COM'
        )
      },
      {
        property: 'og:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトへのお問い合わせ。Web制作、アニメーション、イラスト、動画編集などクリエイティブ制作のご相談はこちらから。'
            : 'Contact Manato Yamashita for creative projects including web development, animation and illustration!'
        )
      },
      {
        property: 'og:url',
        content: 'https://manapuraza.com/contact'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: 'https://manapuraza.com/ogp.webp'
      },
      {
        name: 'twitter:title',
        content: computed(() => 
          locale.value === 'ja' 
            ? 'Contact - お問い合わせ'
            : 'Contact'
        )
      },
      {
        name: 'twitter:description',
        content: computed(() => 
          locale.value === 'ja'
            ? '山下マナトへのお問い合わせ。Web制作、アニメーション、イラスト、動画編集などクリエイティブ制作のご相談はこちらから！'
            : 'Contact Manato Yamashita for creative projects and collaborations!'
        )
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://manapuraza.com/contact'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": locale.value === 'ja' ? "お問い合わせ" : "Contact",
          "url": "https://manapuraza.com/contact",
          "description": locale.value === 'ja' 
            ? "山下真和都へのお問い合わせページ"
            : "Contact page for Manato Yamashita",
          "mainEntity": {
            "@type": "Person",
            "name": locale.value === 'ja' ? "山下真和都" : "Manato Yamashita",
            "email": "info@manapuraza.com",
            "url": "https://manapuraza.com",
            "sameAs": [
              "https://bsky.app/profile/yamashita.bsky.social",
              "https://www.linkedin.com/in/yamashitamanato",
              "https://github.com/ManatoYamashita",
              "https://bento.me/ym",
              "https://twitter.com/tcu_dc",
              "https://www.instagram.com/manapuraza",
              "https://www.youtube.com/manapuraza"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": locale.value === 'ja' ? "お問い合わせ" : "General Inquiries",
              "email": "info@manapuraza.com",
              "availableLanguage": ["Japanese", "English"]
            }
          }
        }))
      }
    ]
  });

  onMounted(async () => {
    // GSAPを動的インポートして初期バンドルサイズを削減
    const { gsap } = await import('gsap');
    
    // タイトルのアニメーション
    gsap.from('h1', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // セクションのアニメーション
    gsap.from('.contact-section', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.2,
      ease: 'power2.out',
    });
  });
</script>

<template>
  <main class="contact">
    <h1>{{ t('contact.title') }}</h1>
    
    <section class="contact-section">
      <div class="contact-message">
        <p>{{ t('contact.message') }}</p>
      </div>
    </section>

    <section class="contact-section">
      <h2>{{ t('contact.methods') }}</h2>
      <div class="contact-info">
        <div class="contact-item">
          <Mail :size="24" class="contact-icon" />
          <div class="contact-details">
            <h3>{{ t('contact.email.title') }}</h3>
            <p>{{ t('contact.email.description') }}</p>
            <a href="mailto:g2172117@tcu.ac.jp" class="contact-link">
              <span class="email-address">info<span class="at-symbol">[at]</span>manapuraza.com</span>
              <span class="email-note">（[at]の部分を<mark>@</mark>と読み替えてください。）</span>
            </a>
          </div>
        </div>

        <div class="contact-item">
          <Share2 :size="24" class="contact-icon" />
          <div class="contact-details">
            <h3>{{ t('contact.social.title') }}</h3>
            <p>{{ t('contact.social.description') }}</p>
            <Sns />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
  main.contact {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
    scroll-behavior: smooth;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #111;
  }

  .contact-section {
    margin-bottom: 4rem;
  }

  .contact-section h2 {
    font-size: 2rem;
    margin: 3rem 0 1rem 0;
    color: #111;
  }

  .contact-message p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #111;
    margin-bottom: 1rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .contact-icon {
    font-size: 2rem;
    color: #333;
    margin-top: 0.5rem;
    flex-shrink: 0;
  }

  .contact-details {
    flex: 1;
  }

  .contact-details h3 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
    color: #111;
  }

  .contact-details p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin: 0 0 1rem 0;
  }

  .contact-link {
    color: #333;
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    max-width: 100%;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .contact-link:hover {
    color: var(--primary-color);
    text-shadow: var(--primary-color) 0px 0px 1rem;
    transform: scale(1.02);
  }

  .email-address {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: #111;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0.25);
    text-underline-offset: 3px;
    word-break: break-all;
  }

  .contact-link:hover .email-address,
  .contact-link:focus-visible .email-address {
    color: var(--mpuraza-acsent);
    text-decoration-color: var(--mpuraza-acsent);
  }

  .at-symbol {
    margin: 0 2px;
    padding: 0 4px;
    border-radius: 4px;
    background: color-mix(in srgb, var(--mpuraza-acsent) 15%, transparent);
    color: inherit;
  }

  .email-note {
    font-size: 0.85rem;
    color: #555;
    opacity: 0.95;
  }

  .email-note mark {
    background: color-mix(in srgb, var(--mpuraza-acsent) 20%, transparent);
    color: inherit;
    padding: 0 2px;
    border-radius: 3px;
  }

  @media (hover: hover) {
    .contact-link:hover {
      transform: translateY(-1px);
    }
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    .contact-info {
      gap: 1.5rem;
    }

    .contact-item {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .contact-icon {
      align-self: flex-start;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 540px) {
    h1 {
      font-size: 2.5rem;
    }

    .contact-section h2 {
      font-size: 1.5rem;
    }

    .contact-message p {
      font-size: 1rem;
    }

    .contact-item {
      padding: 1rem;
    }
  }
</style>