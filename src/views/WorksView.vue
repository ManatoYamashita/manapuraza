<template>
  <div class="works">
    <WorksHero />

    <main>
      <div id="main-contents">
        <section id="animation">
          <h2>Animation</h2>
          <p>{{ $t('works.animation.paragraph') }}</p>
          <div class="animation-item">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M"
                title="世田谷区オリジナルアニメ「新BOPへようこそ!」"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="eager"
              ></iframe>
            </div>
            <div class="animation-info">
              <h3 class="animation-title">{{ $t('works.animation.tcuAnimation.title') }}</h3>
              <div class="animation-details">
                <p v-if="$t('works.animation.tcuAnimation.description.production')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.production') }}
                </p>
                <p v-if="$t('works.animation.tcuAnimation.description.director')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.director') }}
                </p>
                <p v-if="$t('works.animation.tcuAnimation.description.animationProduction')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.animationProduction') }}
                </p>
                <p v-if="$t('works.animation.tcuAnimation.description.productionSupport')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.productionSupport') }}
                </p>
                <p v-if="$t('works.animation.tcuAnimation.description.voiceActors')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.voiceActors') }}
                </p>
                <p v-if="$t('works.animation.tcuAnimation.description.websiteProduction')" class="animation-detail-item">
                  {{ $t('works.animation.tcuAnimation.description.websiteProduction') }}
                </p>
              </div>
              <div class="animation-links">
                <Btn 
                  :href="'https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu'" 
                  :target="'_blank'" 
                  :icon="['fas', 'play']" 
                  :text="$t('works.animation.tcuAnimation.watch')" 
                  :alt="'本編動画を見る'"
                />
                <Btn 
                  :href="'https://www.city.setagaya.lg.jp/mokuji/kusei/012/002/d00196735.html'" 
                  :target="'_blank'" 
                  :icon="['fas', 'globe']" 
                  :text="$t('works.animation.tcuAnimation.site')" 
                  :alt="'公式サイトへ'"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="programming">
          <h2>Programming / Web</h2>
          <p>{{ $t('works.prog.paragraph') }}</p>
          <ul>
            <WorkItem
              v-for="(work, index) in worksData.programming"
              :key="work.id"
              :url="work.url"
              :title="$t(work.title)"
              :description="$t(work.description)"
              :thumbnail="work.thumbnail"
              :index="index"
            />
          </ul>
        </section>

        <section id="graphics">
          <h2>Illustration / Graphics</h2>
          <p>{{ $t('works.graphics.paragraph') }}</p>
          <ul>
            <WorkItem
              v-for="(work, index) in worksData.graphics"
              :key="work.id"
              :url="work.url"
              :title="$t(work.title)"
              :description="$t(work.description)"
              :thumbnail="work.thumbnail"
              :index="index"
            />
          </ul>
        </section>

        <section id="video">
          <h2>Video / Animation</h2>
          <p>{{ $t('works.video.paragraph') }}</p>
          <ul>
            <WorkItem
              v-for="(work, index) in worksData.video"
              :key="work.id"
              :url="work.url"
              :title="$t(work.title)"
              :description="$t(work.description)"
              :thumbnail="work.thumbnail"
              :index="index"
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
  import WorkItem from '@/components/WorkItem.vue';
  import Btn from '@/components/Btn.vue';
  import WorksHero from '@/components/WorksHero.vue';
  import { worksData } from '@/data/works';
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

  // GSAPプラグインの登録
  gsap.registerPlugin(ScrollToPlugin);

  // Composition APIではデータを直接参照できる
  defineExpose({
    worksData
  });
</script>

<style scoped>
  .works {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
    scroll-behavior: smooth;
  }
  .works p {
    font-size: 1.3rem;
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

  .video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9のアスペクト比 */
    margin: 1rem 0;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .video-container:hover iframe {
    transform: scale(1.02);
  }

  .animation-title {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .animation-description {
    font-size: 1rem;
    margin: 0;
  }

  .animation-item {
    margin-bottom: 2rem;
  }

  .animation-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .animation-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .animation-link-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: rgba(67, 153, 187, 0.8);
    color: white;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    text-align: center;
    height: 100%;
  }

  .animation-link-image:hover {
    background-color: rgba(67, 153, 187, 1);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(67, 153, 187, 0.3);
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%; /* 16:9のアスペクト比 */
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .animation-item {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      align-items: center;
    }
    
    .animation-info {
      padding-right: 1rem;
    }
  }

  @media (max-width: 767px) {
    .animation-links {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .animation-links {
      grid-template-columns: 1fr;
    }
  }

  .animation-details {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 0.5rem 0;
  }

  .works .animation-detail-item {
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.4;
    font-weight: normal;
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
