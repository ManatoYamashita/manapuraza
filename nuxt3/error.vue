<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">{{ error?.statusCode || 500 }}</h1>
      <h2 class="error-message">
        {{ error?.statusCode === 404 ? $t('error.notFound') : $t('error.serverError') }}
      </h2>
      <p class="error-description">
        {{ error?.statusCode === 404 ? $t('error.notFoundDescription') : $t('error.serverErrorDescription') }}
      </p>
      <NuxtLink to="/" class="back-home-link">
        <fa :icon="['fas', 'arrow-left']" />
        {{ $t('error.backToHome') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * error.vue - エラーページ（Nuxt 3対応版）
 * 404エラーと500エラーをハンドリング
 */
import { computed } from 'vue';

// エラー情報を取得
const error = useError();

// SEO設定
useHead({
  title: computed(() =>
    error.value?.statusCode === 404
      ? 'Page Not Found | MANAPURAZA.COM'
      : 'Server Error | MANAPURAZA.COM'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        error.value?.statusCode === 404
          ? 'お探しのページが見つかりませんでした。'
          : 'サーバーエラーが発生しました。'
      )
    }
  ]
});
</script>

<style scoped>
  .error-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(240, 211, 0, 0.05) 0%, rgba(79, 174, 242, 0.05) 100%);
  }

  .error-content {
    max-width: 600px;
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .error-code {
    font-size: 8rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #f0d300 0%, #4faef2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .error-message {
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #111;
  }

  .error-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin: 1.5rem 0 2.5rem;
  }

  .back-home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background: linear-gradient(135deg, #f0d300 0%, #4faef2 100%);
    color: #111;
    text-decoration: none;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(240, 211, 0, 0.3);
  }

  .back-home-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(240, 211, 0, 0.4);
  }

  .back-home-link svg {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    .error-content {
      padding: 2rem 1.5rem;
    }

    .error-code {
      font-size: 5rem;
    }

    .error-message {
      font-size: 1.5rem;
    }

    .error-description {
      font-size: 1rem;
    }

    .back-home-link {
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
    }
  }

  @media screen and (max-width: 480px) {
    .error-page {
      padding: 1rem;
    }

    .error-content {
      padding: 1.5rem 1rem;
    }

    .error-code {
      font-size: 4rem;
    }

    .error-message {
      font-size: 1.25rem;
    }
  }
</style>
