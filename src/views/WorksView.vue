<template>
  <div class="works">
    <h1>Works</h1>
    <p>デジタルコンテンツの制作を趣味として行っているだけでなく、業務委託や有償依頼の経験があります。デザイン力を持ち前のセンスの基礎として、それをWeb制作や動画編集、イラストレーションに生かしています。</p>

    <main>
      <div id="main-contents">
        <h2>Illustration / Graphics</h2>
        <p>絵を描くことが趣味で、グラフィックデザインやアニメーションを得意としています。また、現在(2024年~)は世田谷区と共同で、総監督と原画+動画としてアニメーションを制作に携わっています。</p>
        <ul>
          <WorkItem
            v-for="(work, index) in graphicsWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
            :index="index"
          />
        </ul>

        <h2>Programming / Web</h2>
        <p>情報系学部でC言語、Java言語、情報学の基礎を学んだだけではなく、独学でWeb系の技術を習得し、趣味や業務委託でWeb制作を行っています。Next.jsやGsapを使用したWebフロントエンドが最も得意な領域です。</p>
        <ul>
          <WorkItem
            v-for="(work, index) in programmingWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
            :index="index"
          />
        </ul>

        <h2>Video / Animation</h2>
        <p>大学2年生で160名規模の映像制作のサークルの代表を務めるほか、コンペティションや有償の依頼で映像を制作する経験があります。Youtubeチャンネルは消されてしまいましたが、一部の映像が残っているので、載せておきます。</p>
        <ul>
          <WorkItem
            v-for="(work, index) in videoWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
            :index="index"
          />
        </ul>
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

<script>
  import WorkItem from '@/components/WorkItem.vue';

  export default {
    name: 'WorksView',
    components: {
      WorkItem,
    },
    data() {
      return {
        graphicsWorks: this.generateWorks('graphics'),
        programmingWorks: this.generateWorks('prog'),
        videoWorks: this.generateWorks('video'),
      };
    },
    methods: {
      generateWorks(category) {
        const urlLists = {
          graphics: [
            'https://www.pixiv.net/users/87914659',
          ],
          prog: [
            'https://manapuraza.com',
            'https://でじこんちゃん.net/',
            'https://tmana.sub.jp/numeron/dirs/src/numeron.html',
            'https://amausyrup.net',
            'https://www.comm.tcu.ac.jp/tcu-acc/',
            'https://pomjp-beta.vercel.app/',
            'https://chaintence.shokm.net/',
            'https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html',
            'https://www.comm.tcu.ac.jp/seki-ken',
            'https://tcu-almni.vercel.app/',
            'https://killerdie-2023.netlify.app/',
            'https://population-todohuken.vercel.app/',
            'https://github.com/ManatoYamashita/SysB_wtm',
            'https://dum.manapuraza.com',
            'https://flickgame.tcu-dc.net/',
            'https://hpb-2023.manapuraza.com/',
            'https://tcu-animation.manapuraza.com/',
            'https://www.sto.tcu.ac.jp/',
            'https://text-layout.manapuraza.com/',
          ],
          video: [
            'https://www.youtube.com/@manapuraza',
            'https://www.youtube.com/@tcu_dc',
          ],
        };

        const urlList = urlLists[category] || [];

        return urlList.map((url, index) => ({
          url: url || '',
          title: `works.${category}.${index + 1}.title`,
          description: `works.${category}.${index + 1}.description`,
          thumbnail: new URL(
            `/src/assets/works-thumbnail/${category}/${index + 1}.webp`,
            import.meta.url
          ).href,
        }));
      },
    },
  };
</script>

<style scoped>
  .works {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    pointer-events: all;
    scroll-behavior: auto;
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
  h2 {
    font-size: 1.5rem;
    margin: 3rem 0 0 0;
  }

  @media (max-width: 1024px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .works {
      display: block;
    }
    #main-contents {
      width: 100%;
      padding: 0.2rem;
      margin-bottom: 2rem;
    }
    #image-content {
      width: 100%;
      padding: 0.5rem;
    }
    ul {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    #dc-chan {
      position: relative;
      width: 50%;
      height: auto;
      box-shadow: none;
    }
  }
</style>
