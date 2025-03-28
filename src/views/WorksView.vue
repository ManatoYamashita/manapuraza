<template>
  <div class="works">
    <WorksHero />

    <main>
      <div id="main-contents">
        <AnimationSection />

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
  import AnimationSection from '@/components/AnimationSection.vue';
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
