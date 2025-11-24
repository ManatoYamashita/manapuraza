# GA4 × Vue.js 統合ガイド

Vue.js 3 アプリケーションで Google Analytics 4 (GA4) イベントを効果的に実装するためのガイド。
Google Tag Manager (GTM) 経由でのイベント送信パターンとベストプラクティス。

## 前提条件

- GA4 + GTM 設定完了（`docs/analytics/ga4-setup.md` 参照）
- Vue.js 3 with Composition API
- Vue Router 4

## 基本的なイベント送信パターン

### dataLayer への push

GTM を使用している場合、`window.dataLayer.push()` でイベントを送信します。

```javascript
// 基本的なイベント送信
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'custom_event_name',
  'event_category': 'category',
  'event_label': 'label',
  'value': 123
});
```

## Vue Composable の作成

再利用可能な GA4 イベント送信関数を作成します。

### `src/composables/useAnalytics.js`

```javascript
/**
 * Google Analytics 4 (GA4) イベント送信のための Composable
 * GTM dataLayer 経由でイベントを送信
 */

export function useAnalytics() {
  /**
   * 基本的なイベント送信
   * @param {string} eventName - イベント名
   * @param {Object} params - イベントパラメータ
   */
  const sendEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });

      // Development環境でのログ出力
      if (import.meta.env.DEV) {
        console.log('[GA4 Event]', eventName, params);
      }
    }
  };

  /**
   * ページビューイベント（SPA用）
   * @param {string} path - ページパス
   * @param {string} title - ページタイトル
   */
  const sendPageview = (path, title) => {
    sendEvent('page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
  };

  /**
   * 外部リンククリックイベント
   * @param {string} url - リンクURL
   * @param {string} text - リンクテキスト
   */
  const sendExternalLinkClick = (url, text = '') => {
    sendEvent('external_link_click', {
      link_url: url,
      link_text: text,
      link_domain: new URL(url).hostname,
      outbound: true,
    });
  };

  /**
   * SNSリンククリックイベント
   * @param {string} platform - SNSプラットフォーム名
   * @param {string} url - リンクURL
   */
  const sendSocialClick = (platform, url) => {
    sendEvent('social_click', {
      social_platform: platform,
      link_url: url,
    });
  };

  /**
   * 言語切り替えイベント
   * @param {string} newLanguage - 新しい言語
   * @param {string} previousLanguage - 以前の言語
   */
  const sendLanguageSwitch = (newLanguage, previousLanguage) => {
    sendEvent('language_switch', {
      new_language: newLanguage,
      previous_language: previousLanguage,
    });
  };

  /**
   * ポートフォリオアイテムクリックイベント
   * @param {string} itemTitle - アイテムタイトル
   * @param {string} category - カテゴリ
   * @param {string} url - リンク先URL
   */
  const sendPortfolioClick = (itemTitle, category, url) => {
    sendEvent('portfolio_click', {
      item_title: itemTitle,
      item_category: category,
      item_url: url,
    });
  };

  /**
   * フォーム送信イベント
   * @param {string} formName - フォーム名
   * @param {string} formDestination - 送信先
   */
  const sendFormSubmit = (formName, formDestination) => {
    sendEvent('form_submit', {
      form_name: formName,
      form_destination: formDestination,
    });
  };

  /**
   * エラーイベント
   * @param {string} errorMessage - エラーメッセージ
   * @param {string} errorLocation - エラー発生場所
   */
  const sendError = (errorMessage, errorLocation) => {
    sendEvent('error', {
      error_message: errorMessage,
      error_location: errorLocation,
    });
  };

  /**
   * 動画再生イベント
   * @param {string} videoTitle - 動画タイトル
   * @param {string} videoUrl - 動画URL
   * @param {string} provider - プロバイダー名
   */
  const sendVideoPlay = (videoTitle, videoUrl, provider = 'youtube') => {
    sendEvent('video_start', {
      video_title: videoTitle,
      video_url: videoUrl,
      video_provider: provider,
    });
  };

  return {
    sendEvent,
    sendPageview,
    sendExternalLinkClick,
    sendSocialClick,
    sendLanguageSwitch,
    sendPortfolioClick,
    sendFormSubmit,
    sendError,
    sendVideoPlay,
  };
}
```

## Vue Router との統合

### SPA ページビュートラッキング

`src/router/index.js` に追加:

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import { useAnalytics } from '@/composables/useAnalytics';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... routes
  ],
});

// ページ遷移時のトラッキング
router.afterEach((to, from) => {
  // GTM が読み込まれるまで待機
  setTimeout(() => {
    const { sendPageview } = useAnalytics();

    // ページタイトルの取得
    const title = to.meta.title || document.title;

    // ページビューイベント送信
    sendPageview(to.path, title);
  }, 100);
});

export default router;
```

### ルートメタデータの設定

```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home | MANAPURAZA.COM',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About | MANAPURAZA.COM',
    },
  },
  // ...
];
```

## コンポーネントでの実装例

### 1. Menu.vue - 言語切り替えトラッキング

```vue
<script setup>
import { useI18n } from 'vue-i18n';
import { useAnalytics } from '@/composables/useAnalytics';

const { locale } = useI18n();
const { sendLanguageSwitch } = useAnalytics();

const toggleLanguage = () => {
  const previousLanguage = locale.value;
  const newLanguage = locale.value === 'ja' ? 'en' : 'ja';

  // 言語切り替え実行
  locale.value = newLanguage;

  // GA4 イベント送信
  sendLanguageSwitch(newLanguage, previousLanguage);
};
</script>

<template>
  <button @click="toggleLanguage" class="language-toggle">
    {{ locale === 'ja' ? 'English' : '日本語' }}
  </button>
</template>
```

### 2. CreativeItem.vue - ポートフォリオクリックトラッキング

```vue
<script setup>
import { useAnalytics } from '@/composables/useAnalytics';

const props = defineProps({
  title: String,
  url: String,
  mode: String, // 'Development', 'Illustration', 'Video'
});

const { sendPortfolioClick } = useAnalytics();

const handleClick = () => {
  // GA4 イベント送信
  sendPortfolioClick(
    props.title,
    props.mode,
    props.url
  );
};
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    @click="handleClick"
  >
    <h3>{{ title }}</h3>
  </a>
</template>
```

### 3. Contact.vue - フォーム送信トラッキング

```vue
<script setup>
import { ref } from 'vue';
import { useAnalytics } from '@/composables/useAnalytics';

const { sendFormSubmit } = useAnalytics();

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async () => {
  try {
    // フォーム送信処理
    await submitForm(formData.value);

    // GA4 イベント送信
    sendFormSubmit('contact_form', '/contact');

    // 成功処理
    alert('お問い合わせありがとうございます!');
  } catch (error) {
    console.error('Form submission error:', error);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="formData.name" placeholder="お名前" />
    <input v-model="formData.email" type="email" placeholder="メールアドレス" />
    <textarea v-model="formData.message" placeholder="メッセージ"></textarea>
    <button type="submit">送信</button>
  </form>
</template>
```

### 4. 外部リンクの自動トラッキング

#### Directive を使用したパターン

`src/directives/trackExternalLink.js`:

```javascript
import { useAnalytics } from '@/composables/useAnalytics';

export const trackExternalLink = {
  mounted(el, binding) {
    const { sendExternalLinkClick } = useAnalytics();

    el.addEventListener('click', (event) => {
      const url = el.href || binding.value;
      const text = el.textContent || el.innerText;

      // 外部リンクかチェック
      if (url && !url.includes('manapuraza.com')) {
        sendExternalLinkClick(url, text);
      }
    });
  },
};
```

使用例:

```vue
<template>
  <a
    href="https://github.com/username/repo"
    v-track-external-link
    target="_blank"
  >
    GitHub Repository
  </a>
</template>
```

### 5. SNS リンクトラッキング

```vue
<script setup>
import { useAnalytics } from '@/composables/useAnalytics';

const { sendSocialClick } = useAnalytics();

const socialLinks = [
  { platform: 'twitter', url: 'https://twitter.com/username' },
  { platform: 'github', url: 'https://github.com/username' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/username' },
];

const handleSocialClick = (platform, url) => {
  sendSocialClick(platform, url);
};
</script>

<template>
  <div class="social-links">
    <a
      v-for="link in socialLinks"
      :key="link.platform"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      @click="handleSocialClick(link.platform, link.url)"
    >
      <fa :icon="['fab', link.platform]" />
    </a>
  </div>
</template>
```

### 6. 動画再生トラッキング（YouTube）

```vue
<script setup>
import { onMounted } from 'vue';
import { useAnalytics } from '@/composables/useAnalytics';

const props = defineProps({
  videoId: String,
  videoTitle: String,
});

const { sendVideoPlay } = useAnalytics();

onMounted(() => {
  // YouTube IFrame API の準備
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  window.onYouTubeIframeAPIReady = () => {
    const player = new YT.Player('youtube-player', {
      videoId: props.videoId,
      events: {
        'onStateChange': (event) => {
          // 再生開始時
          if (event.data === YT.PlayerState.PLAYING) {
            sendVideoPlay(
              props.videoTitle,
              `https://www.youtube.com/watch?v=${props.videoId}`,
              'youtube'
            );
          }
        },
      },
    });
  };
});
</script>

<template>
  <div id="youtube-player"></div>
</template>
```

## エラートラッキング

### グローバルエラーハンドラー

`src/main.js` に追加:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import { useAnalytics } from '@/composables/useAnalytics';

const app = createApp(App);

// グローバルエラーハンドラー
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', err, info);

  const { sendError } = useAnalytics();
  sendError(
    err.message || 'Unknown error',
    info || 'Unknown location'
  );
};

// 未処理のプロミス拒否
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);

  const { sendError } = useAnalytics();
  sendError(
    event.reason?.message || 'Unhandled Promise Rejection',
    'Promise'
  );
});

app.mount('#app');
```

## パフォーマンストラッキング

### Core Web Vitals の送信

```javascript
// src/utils/webVitals.js
import { useAnalytics } from '@/composables/useAnalytics';

export function trackWebVitals() {
  const { sendEvent } = useAnalytics();

  // Web Vitals ライブラリを使用（必要に応じてインストール）
  if ('PerformanceObserver' in window) {
    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];

      sendEvent('web_vitals', {
        metric_name: 'LCP',
        metric_value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
        metric_rating: lastEntry.renderTime < 2500 ? 'good' : 'needs-improvement',
      });
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();

      entries.forEach((entry) => {
        sendEvent('web_vitals', {
          metric_name: 'FID',
          metric_value: Math.round(entry.processingStart - entry.startTime),
          metric_rating: entry.processingStart - entry.startTime < 100 ? 'good' : 'needs-improvement',
        });
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }

      sendEvent('web_vitals', {
        metric_name: 'CLS',
        metric_value: Math.round(clsValue * 1000) / 1000,
        metric_rating: clsValue < 0.1 ? 'good' : 'needs-improvement',
      });
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}
```

`src/main.js` で実行:

```javascript
import { trackWebVitals } from '@/utils/webVitals';

// アプリマウント後に実行
app.mount('#app');

// Web Vitals トラッキング開始
if (import.meta.env.PROD) {
  trackWebVitals();
}
```

## テスト環境での無効化

### 環境変数による制御

`.env.development`:

```env
VITE_GA4_ENABLED=false
```

`.env.production`:

```env
VITE_GA4_ENABLED=true
```

### Composable での制御

```javascript
// src/composables/useAnalytics.js
export function useAnalytics() {
  const isEnabled = import.meta.env.VITE_GA4_ENABLED === 'true';

  const sendEvent = (eventName, params = {}) => {
    if (!isEnabled) {
      console.log('[GA4 Disabled]', eventName, params);
      return;
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  };

  // ... 他のメソッド
}
```

## ベストプラクティス

### 1. イベント命名規則

- **小文字とアンダースコア**: `external_link_click`, `form_submit`
- **動詞 + 名詞**: `click_button`, `view_page`, `submit_form`
- **明確で簡潔**: 長すぎず、意味が明確

### 2. パラメータ命名規則

- **小文字とアンダースコア**: `link_url`, `video_title`
- **GA4 推奨パラメータ**: `value`, `currency`, `item_id` など
- **カスタムパラメータ**: プロジェクト固有のもの

### 3. 送信タイミング

- **即座に送信**: クリック、フォーム送信
- **遅延送信**: 外部リンククリック（2秒待機してページ遷移）
- **バッチ送信**: パフォーマンスメトリクス

### 4. データ品質

- **PII（個人情報）を送信しない**:
  - メールアドレス
  - 電話番号
  - 氏名
  - パスワード

- **URL パラメータのサニタイズ**:
  ```javascript
  const sanitizeUrl = (url) => {
    const urlObj = new URL(url);
    // クエリパラメータから個人情報を削除
    urlObj.searchParams.delete('email');
    urlObj.searchParams.delete('token');
    return urlObj.toString();
  };
  ```

### 5. パフォーマンス最適化

- **イベント送信の最小化**: 必要なイベントのみ
- **デバウンス/スロットル**: 連続イベントの制御
- **非同期処理**: UI ブロックを避ける

```javascript
// デバウンスの例
import { debounce } from 'lodash-es';

const sendScrollEvent = debounce(() => {
  const { sendEvent } = useAnalytics();
  sendEvent('scroll_depth', {
    scroll_percentage: Math.round((window.scrollY / document.body.scrollHeight) * 100),
  });
}, 1000);

window.addEventListener('scroll', sendScrollEvent);
```

## デバッグ方法

### 1. ブラウザコンソール

Development 環境では自動的にログ出力:

```
[GA4 Event] external_link_click { link_url: "https://github.com/...", ... }
```

### 2. GA4 DebugView

1. Chrome 拡張機能「Google Analytics Debugger」をインストール
2. 拡張機能を有効化
3. サイトにアクセス
4. GA4 管理画面「設定」→「DebugView」でリアルタイム確認

### 3. GTM プレビューモード

1. GTM 管理画面で「プレビュー」
2. サイト URL を入力して「Connect」
3. イベント発火とパラメータを確認

## まとめ

- ✅ `useAnalytics()` Composable で一元管理
- ✅ Vue Router 統合で SPA ページビュー自動トラッキング
- ✅ コンポーネントで簡単にイベント送信
- ✅ 環境変数で開発/本番環境を制御
- ✅ エラートラッキングで品質監視
- ✅ パフォーマンストラッキングで UX 改善

## 関連ドキュメント

- **GA4 セットアップガイド**: `docs/analytics/ga4-setup.md`
- **プライバシーポリシー**: サイトに実装必須

## 更新履歴

- 2025-11-25: 初版作成（Vue.js 3 × GA4 統合完全ガイド）
