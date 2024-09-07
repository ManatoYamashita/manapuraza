<template>
  <div id="main">
    <h1>Works</h1>

    <main>
      <div id="main-contents">
        <h2>Illustration / Graphics</h2>
        <ul>
          <WorkItem
            v-for="(work, index) in graphicsWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
          />
        </ul>
        
        <h2>Programming / Web</h2>
        <ul>
          <WorkItem
            v-for="(work, index) in programmingWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
          />
        </ul>

        <h2>Video / Animation</h2>
        <ul>
          <WorkItem
            v-for="(work, index) in videoWorks"
            :key="index"
            :url="work.url"
            :title="$t(work.title)"
            :description="$t(work.description)"
            :thumbnail="work.thumbnail"
          />
        </ul>
      </div>

      <div id="image-content">
        <img id="dc-chan" src="@/assets/dc-chan.gif" alt="dc-chan" />
      </div>
    </main>
  </div>
</template>

<script>
import WorkItem from '@/components/WorkItem.vue';

export default {
  name: 'WorksView',
  data() {
    return {
      graphicsWorks: this.generateWorks('graphics', 1, 1),
      programmingWorks: this.generateWorks('prog', 1, 18),
      videoWorks: this.generateWorks('video', 1, 2),
    };
  },
  components: {
    WorkItem
  },
  methods: {
    generateWorks(category, start, end) {
      const urlLists = {
        graphics: [
          "https://tcu-yamamana.notion.site/Graphics-and-Illustrations-94affc98e29f4ec6be668b05eb7eac13?pvs=4",
        ],
        prog: [
          "https://manapuraza.com",
          "https://dum.manapuraza.com",
          "https://tmana.sub.jp/numeron/dirs/src/numeron.html",
          "https://amausyrup.net",
          "https://www.comm.tcu.ac.jp/tcu-acc/",
          "https://jamstack-blog-test.vercel.app/",
          "https://chaintence.shokm.net/",
          "https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html",
          "https://www.comm.tcu.ac.jp/seki-ken",
          "https://sekilab-quiz.vercel.app/",
          "https://killerdie-2023.netlify.app/",
          "https://population-todohuken.vercel.app/",
          "https://github.com/ManatoYamashita/SysB_wtm",
          "https://でじこんちゃん.net/",
          "https://flickgame.tcu-dc.net/",
          "https://hpb-2023.manapuraza.com/",
          "https://tcu-animation.manapuraza.com/",
          "https://www.sto.tcu.ac.jp/",
        ],
        video: [
          "https://www.youtube.com/@manapuraza",
          "https://www.youtube.com/@tcu_dc",
        ],
      };

      // 該当するカテゴリーのURLリストを取得
      const urlList = urlLists[category] || [];

      return Array.from({ length: end - start + 1 }, (_, i) => {
        const index = start + i - 1;  // インデックスを0ベースに修正
        return {
          url: urlList[index] || '',  // エラーチェック: インデックスが範囲外の場合は空文字を設定
          title: `works.${category}.${index + 1}.title`,
          description: `works.${category}.${index + 1}.description`,
          thumbnail: new URL(`/src/assets/works-thumbnail/${category}/${index + 1}.webp`, import.meta.url).href
        };
      });
    }
  }
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
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
