<template>
  <!-- Card mode: カード形式のレイアウト -->
  <li ref="itemRef" :class="`creative-item creative-item--${mode.toLowerCase()}`" :data-creative-index="index">
    <router-link :to="`/creatives/${category}/${id}`">
      <div class="img-cover">
        <!-- YouTube iFrame表示（youtubeUrlがある場合） -->
        <div v-if="youtubeUrl" class="video-container">
          <iframe
            :src="youtubeUrl"
            :title="title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <!-- 通常の画像表示 -->
        <img
          v-else
          :src="resolvedThumbnail"
          :srcset="thumbnailSrcset"
          :sizes="thumbnailSizes"
          :alt="title"
          width="1280"
          height="720"
          loading="lazy"
          @error="handleImageError"
        />
      </div>
      <h3>{{ title }} <font-awesome-icon :icon="faArrowRight" class="fa" /></h3>

      <!-- タグ表示（Card modes） -->
      <div class="creative-tags" v-if="tags && tags.length > 0">
        <span v-for="(tag, tagIndex) in tags" :key="tagIndex" class="creative-tag">
          {{ tag }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getOptimizedImageUrl } from '@/composables/useCreativesAPI';
import type { CreativeCategory } from '@/types';

interface Props {
  category: CreativeCategory;
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  index: number;
  mode: 'Animation' | 'Development' | 'Illustration' | 'Video' | 'Graphic';
  tags?: string[];
  youtubeUrl?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  youtubeUrl: null
});

// サムネイル画像パスを解決
const resolvedThumbnail = computed<string>(() => {
  try {
    if (props.thumbnail.startsWith('@/')) {
      return new URL(props.thumbnail, import.meta.url).href;
    }
    return props.thumbnail;
  } catch {
    return 'https://via.placeholder.com/300x200?text=Image+Not+Found';
  }
});

// レスポンシブ画像用の srcset 生成
const thumbnailSrcset = computed<string>(() => {
  const baseUrl = resolvedThumbnail.value;
  // microCMS画像でない場合はsrcsetを生成しない
  if (!baseUrl.includes('images.microcms-assets.io')) {
    return '';
  }
  return `${getOptimizedImageUrl(baseUrl, 400)} 400w, ${getOptimizedImageUrl(baseUrl, 800)} 800w, ${getOptimizedImageUrl(baseUrl, 1200)} 1200w`;
});

// レスポンシブ画像用の sizes 属性
const thumbnailSizes = '(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px';

const handleImageError = (e: Event): void => {
  const target = e.target as HTMLImageElement;
  target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
};

// IntersectionObserver による遅延読み込み最適化
const itemRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (itemRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          isVisible.value = true;
          observer?.disconnect(); // 一度表示されたら監視を終了
        }
      },
      { rootMargin: '50px' } // 50px手前で読み込み開始
    );
    observer.observe(itemRef.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
  /* カード形式の基本スタイル */
  .creative-item {
    margin: 1rem 0;
    overflow: hidden;
    opacity: 1;
    transform: translateY(0px);
  }

  .img-cover {
    overflow: hidden;
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    border: 2px solid #000; /* 黒の2pxボーダー */
    transition: border-color 0.3s ease;
  }

  .img-cover:hover {
    border-color: #f0d300; /* ホバー時にbrand colorに変更 */
  }

  .img-cover img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .img-cover:hover img {
    transform: scale(1.1);
  }

  /* YouTube iFrame用のコンテナ */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .video-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0.5rem;
  }

  .fa {
    font-size: 0.8rem;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: rgb(10, 10, 10);
  }

  a:hover {
    color: #000; /* グローバルルールと統一 */
    text-shadow: 0 0 8px rgba(240, 211, 0, 0.7);
    text-decoration: underline;
    text-decoration-color: rgba(240, 211, 0, 0.8);
    text-underline-offset: 0.2em;
  }

  /* Illustration mode専用の画像制限 */
  .creative-item--illustration .img-cover {
    height: auto;
    max-height: 250px;
    padding-top: 0;
    border: 2px solid #000; /* 黒の2pxボーダー */
    transition: border-color 0.3s ease;
  }

  .creative-item--illustration .img-cover:hover {
    border-color: #f0d300; /* ホバー時にbrand colorに変更 */
  }

  .creative-item--illustration .img-cover img {
    position: static;
    width: 100%;
    max-height: 250px;
    height: auto;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media screen and (max-width: 768px) {
    .fa {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
  }

  /* タグスタイリング（共通） */
  .creative-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  .creative-tag {
    display: inline-block;
    padding: 0.35rem 0.8rem;
    background: rgba(240, 211, 0, 0.15); /* Primary Yellow 半透明 */
    border: 1.5px solid #000; /* 黒ボーダー */
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #333;
    transition: all 0.3s ease;
  }

  .creative-tag:hover {
    background: rgba(240, 211, 0, 0.25);
    border-color: #000; /* ホバー時も黒を維持 */
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 微細な影で立体感追加 */
  }

  @media screen and (max-width: 967px) {
    /* モバイルでタグサイズを縮小 */
    .creative-tag {
      padding: 0.3rem 0.7rem;
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 540px) {
    .creative-tags {
      gap: 0.4rem;
      margin-top: 0.6rem;
    }

    .creative-tag {
      padding: 0.25rem 0.6rem;
      font-size: 0.65rem;
    }
  }
</style>
