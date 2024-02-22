<template>
  <div id="main">
    <h1>Works</h1>

    <main>
      <div id="main-contents">
        <h2>Illustration / Graphics</h2>
        <ul>
          <workComponentVue
            v-for="work in worksIllustration"
            :key="work.id"
            :href="work.href"
            :imgSrc="work.imgSrc"
            :title="work.title"
            :description="work.description"
          />
        </ul>
          
        <h2>Programming / Web</h2>
        <br>
        <a href="https://github.com/ManatoYamashita" target="_blank">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16px" height="16px"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            GitHub&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" />
          </h3>
          <p>{{  $t('works.w2') }}</p>
        </a>
        <ul>
          <workComponentVue
            v-for="work in worksProgramming"
            :key="work.id"
            :href="work.href"
            :imgSrc="work.imgSrc"
            :title="work.title"
            :description="work.description"
          />
        </ul>

        <h2>Video / Animation</h2>
        <ul>
          <workComponentVue
            v-for="work in worksVideo"
            :key="work.id"
            :href="work.href"
            :imgSrc="work.imgSrc"
            :title="work.title"
            :description="work.description"
          />
        </ul>
      </div>

      <div id="image-content">
        <img id="dc-chan" src="src/assets/dc-chan.gif" alt="dc-chan" />
      </div>
    </main>
  </div>
</template>

<script type="text/javascript">
import { defineAsyncComponent } from 'vue';

const workComponentVue = defineAsyncComponent(() => import('@/components/workComponent.vue'));

  export default {
    name: 'WorksView',
    components: {
      workComponentVue,
    },

    data() {
      return {
        worksIllustration: [
          // Illustration / Graphics
          {
            id: 1,
            href: "https://manapuraza.myportfolio.com",
            imgSrc: "src/assets/works-sumbnail/creativeworks.gif",
            title: "Manapuraza Creative Works",
            description: this.$t('works.w1')
          },
        ],
        worksProgramming: [
          {
            id: 2,
            href: "https://manapuraza.com",
            imgSrc: "src/assets/works-sumbnail/example.webp",
            title: "Manapuraza",
            description: this.$t('works.w3') 
          },
          {
            id: 3,
            href: "http://tmana.sub.jp/numeron/dirs/src/numeron.html",
            imgSrc: "src/assets/works-sumbnail/numeron.webp",
            title: "NUMERON",
            description: this.$t('works.w4') 
          },
          {
            id: 4,
            href: "http://dum.manapuraza.com",
            imgSrc: "src/assets/works-sumbnail/dum.webp",
            title: "Down Under Mountain",
            description: this.$t('works.w5') 
          },
          {
            id: 5,
            href: "https://killerdie-2023.netlify.com",
            imgSrc: "src/assets/works-sumbnail/killerdie.webp",
            title: "キラキラ大学生研究会 1周年記念",
            description: this.$t('works.w6') 
          },
          {
            id: 6,
            href: "https://chaintence.shotaro.jp",
            imgSrc: "src/assets/works-sumbnail/chaintence.webp",
            title: "chaintence",
            description: this.$t('works.w7') 
          },
          {
            id: 7,
            href: "https://github.com/ManatoYamashita/SysB_wtm",
            imgSrc: "src/assets/works-sumbnail/wtm.webp",
            title: "WTM",
            description: this.$t('works.w8') 
          },
          {
            id: 8,
            href: "http://tmana.sub.jp/tcudc-bot/dc-chan_xbot.webp",
            imgSrc: "src/assets/works-sumbnail/dc-chan_xbot.webp",
            title: "でじこんちゃん Twitter bot",
            description: this.$t('works.w9') 
          },
          {
            id: 9,
            href: "http://jamstack-blog-test.vercel.app",
            imgSrc: "src/assets/works-sumbnail/jamstack.webp",
            title: "Blog test",
            description: this.$t('works.w10') 
          },
          {
            id: 10,
            href: "http://www.comm.tcu.ac.jp/tcu-acc",
            imgSrc: "src/assets/works-sumbnail/tcuacc.webp",
            title: "東京都市大学 同好会連合本部",
            description: this.$t('works.w11') 
          },
          {
            id: 11,
            href: "https://sekilab.vercel.app",
            imgSrc: "src/assets/works-sumbnail/sekilab.png",
            title: "東京都市大学 関研究室 情報セキュリティ",
            description: this.$t('works.w12') 
          },
          {
            id: 12,
            href: "https://sekilab-quiz.vercel.app",
            imgSrc: "src/assets/works-sumbnail/sekilab-quiz.jpg",
            title: "情報セキュリティ Quiz App",
            description: this.$t('works.w13') 
          },
        ],
        worksVideo: [
          {
            id: 13,
            href: "https://www.youtube.com/@ManatoYamashita/",
            imgSrc: "src/assets/works-sumbnail/yt_ym.webp",
            title: "個人 YouTubeチャンネル",
            description: this.$t('works.v1') 
          },
          {
            id: 14,
            href: "https://www.youtube.com/@tcu_dc/",
            imgSrc: "src/assets/works-sumbnail/yt_dc.webp",
            title: "デジタルコンテンツ研究会 YouTubeチャンネル",
            description: this.$t('works.v2') 
          },
        ],
      };
    },
  }
</script>

<style scoped>
  #main {
    width: 100%;
  }
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
    border-radius: .5rem;
    box-shadow: none;
    pointer-events: none;
  }
  .fa {
    font-size: .8rem;
    margin-left: 0;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
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
  h2 {
    font-size: 1.7rem;
    margin: 3rem 0 0 0;
  }
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin: .7rem 0;
  }

  @media (max-width: 540px) {
    main {
      display: block;
    }
    div#main-contents {
      width: 100%;
      padding: .2rem;
      margin-bottom: 2rem;
    }
    div#image-content {
      width: 100%;
      padding: .5rem;
    }
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    #dc-chan {
      position: relative;
      width: 50%;
      height: auto;
      box-shadow: none;
    }
  }
</style>
