<template>
  <!-- Card mode: カード形式のレイアウト -->
  <li :class="`creative-item creative-item--${mode.toLowerCase()}`" :data-creative-index="index">
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
        <img v-else :src="resolvedThumbnail" :alt="title" loading="lazy" @error="handleImageError" />
      </div>
      <h3>{{ title }} <fa :icon="['fas', 'arrow-right']" class="fa" /></h3>

      <!-- タグ表示（Card modes） -->
      <div class="creative-tags" v-if="tags && tags.length > 0">
        <span v-for="(tag, tagIndex) in tags" :key="tagIndex" class="creative-tag">
          {{ tag }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'creativeItem',
    props: {
      category: { type: String, required: true },
      id: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      thumbnail: { type: String, required: true },
      index: { type: Number, required: true },
      mode: {
        type: String,
        required: true,
        validator: (value) => ['Animation', 'Development', 'Illustration', 'Video'].includes(value)
      },
      tags: {
        type: Array,
        required: false,
        default: () => []
      },
      youtubeUrl: {
        type: String,
        required: false,
        default: null
      }
    },
    setup(props) {
      // サムネイル画像パスを解決
      const resolvedThumbnail = computed(() => {
        try {
          if (props.thumbnail.startsWith('@/')) {
            return new URL(props.thumbnail, import.meta.url).href;
          }
          return props.thumbnail;
        } catch (error) {
          return 'https://via.placeholder.com/300x200?text=Image+Not+Found';
        }
      });

      return {
        resolvedThumbnail
      };
    },
    methods: {
      handleImageError(e) {
        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
      }
    }
  };
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
    padding-top: 56.25%;
    border-radius: 0.5rem;
  }

  .img-cover img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 1px solid #000; /* 黒の1pxボーダー追加 */
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 0.3s ease;
  }

  .img-cover img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* ホバー時の影で立体感 */
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
    padding-top: 0;
  }

  .creative-item--illustration .img-cover img {
    position: static;
    width: 100%;
    max-height: 250px;
    height: auto;
    object-fit: cover;
    border: 1px solid #000; /* 黒の1pxボーダー追加 */
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
