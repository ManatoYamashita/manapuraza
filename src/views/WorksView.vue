<template>
  <div class="works">
    <h1>Works</h1>

    <main>
      <div id="main-contents">
        <h3>Illustration / Graphics</h3>
          <p>Adobe Photoshop, Adobe Illustrator, ibisPaintX, etc...</p>
          <ul>
            <li><a href="https://manapuraza.myportfolio.com" target="_blank">Manapuraza Creative Works&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          </ul>

        <h3>Programming / Web</h3>
          <p>HTML, CSS, JavaScript(Vue.js), PHP, C, Java, WordPress, etc...</p>
          <ul>
            <li><a href="https://github.com/ManatoYamashita" target="_blank">GitHub&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
            <br>
            <li><a href="https://manapuraza.com">MANAPURAZA.COM</a>（このサイト）</li>
            <li><a href="https://tmana.sub.jp/numeron/dirs/src/numeron.html" target="_blank">NUMERON&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（論理数学ゲーム）</li>
            <li><a href="http://dum.manapuraza.com/" target="_blank">Down Under Mountain&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（オーストラリア留学ブログ）</li>
            <li><a href="https://killerdie-2023.netlify.com/" target="_blank">キラキラ大学生研究会&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（非公式同好会 1周年記念サイト）</li>
            <li><a href="https://chaintence.shotaro.jp/" target="_blank">Chaintence&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（テンプレメール作成Webアプリ）</li>
            <li><a href="https://github.com/ManatoYamashita/SysB_wtm/" target="_blank">WTM&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（天気提案アプリ）</li>
            <li><a href="http://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html/" target="_blank">でじこんちゃん Twitter bot&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
            <li><a href="http://jamstack-blog-test.vercel.app">Blog test&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>(Jamstackテスト)</li>
            <li><a href="http://www.comm.tcu.ac.jp/tcu-acc/">東京都市大学 同好会連合本部&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          </ul>

        <h3>Video / Animation</h3>
          <p>Adobe Premiere Pro, FlipaClip, etc...</p>
          <ul>
            <li><a href="https://www.youtube.com/@ManatoYamashita/" target="_blank">個人 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
            <li><a href="https://www.youtube.com/@tcu_dc/" target="_blank">デジタルコンテンツ研究会 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          </ul>
      </div>

      <div id="image-content">
        <img src="@/assets/dc-chan.gif" alt="dc-chan" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.works {
  height: 100%;
}
main {
  width: 90%;
  display: flex;
  justify-content: space-around;
}
div#main-contents {
  width: 70%;
}
div#image-content {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
p, ul li { 
  font-size: .8em;
}
a {
  font-size: 1rem;
  color:  #3b9bdf;
  font-weight: bolder;
}
a:hover {
  background-color: transparent;
	text-shadow: #4faef2 0px 0px 10px;
}
.fa {
  font-size: .6rem;
  margin-left: .2rem;
}
img {
  width: 50%;
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
}
</style>
