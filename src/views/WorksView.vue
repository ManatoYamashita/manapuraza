<template>
  <div class="main">
    <h1>Works</h1>

    <main>
      <div id="main-contents">
        <h2>Illustration / Graphics</h2>
          <ul>
            <li>
              <a href="https://manapuraza.myportfolio.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="illustrations">
                </div>
                <h3>Manapuraza Creative Works&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A portfolio graphics and illustrations</p>
              </a>
            </li>
          </ul>

        <h2>Programming / Web</h2>
          <ul>
            <a href="https://github.com/ManatoYamashita" target="_blank">
              <h3>GitHub&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
              <p>Repositorys storing codes</p>
            </a>
          </ul>
          <ul>
            <li>
              <a href="https://manapuraza.com">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="manapuraza">
                </div>
                <h3>Manapuraza&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A portfolio website show all of creative</p>
              </a>
            </li>
            <li>
              <a href="http://tmana.sub.jp/numeron/dirs/src/numeron.html" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="numeron">
                </div>
                <h3>NUMERON&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A logical mathmatical game</p>
              </a>
            </li>
            <li>
              <a href="http://dum.manapuraza.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="dum">
                </div>
                <h3>Down Under Mountain&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A blog for study abroad to Australia</p>
              </a>
            </li>
            <li>
              <a href="https://killerdie-2023.netlify.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="killerdie">
                </div>
                <h3>キラキラ大学生研究会 1周年記念&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A Event page for one-year anniversary</p>
              </a>
            </li>
            <li>
              <a href="https://chaintence.shotaro.jp" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="chaintence">
                </div>
                <h3>chaintence&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A web app creating sentence by connecting template sentences like chain</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ManatoYamashita/SysB_wtm" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="WehereToMe">
                </div>
                <h3>WTM&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A weather forecast activity suggestion app constracted by Java</p>
              </a>
            </li>
            <li>
              <a href="http://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="dc-chan">
                </div>
                <h3>でじこんちゃん Twitter bot&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>DC-chan, original charactor twitter bot autometed by GoogleAppScript</p>
              </a>
            </li>
            <li>
              <a href="http://jamstack-blog-test.vercel.app">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="jamstack-blog">
                </div>
                <h3>Blog test&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A blog test using Jamstack(Nuxt.js + microCMSs)</p>
              </a>
            </li>
            <li>
              <a href="http://www.comm.tcu.ac.jp/tcu-acc">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="tcu-acc">
                </div>
                <h3>東京都市大学 同好会連合本部&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>A website for TCU-ACC, a union of clubs in Tokyo-City University</p>
              </a>
            </li>
          </ul>

        <h2>Video / Animation</h2>
          <ul>
            <li>
              <a href="https://www.youtube.com/@ManatoYamashita/" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="youtube">
                </div>
                <h3>個人 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>My personal YouTube channel</p>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@tcu_dc/" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.png" alt="youtube dc">
                </div>
                <h3>デジタルコンテンツ研究会 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>YouTube channel of DC, a club in Tokyo-City University</p>
              </a>
            </li>
          </ul>
      </div>

      <div id="image-content">
        <img id="dc-chan" src="@/assets/dc-chan.gif" alt="dc-chan" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WorksView',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.works {
  height: 100%;
}
main {
  width: 100%;
}
#main-contents {
  width: 100%;
}
#image-content {
  width: 30%;
  float: right;
  padding: 1rem;
}
#dc-chan {
  width: 75%;
  height: auto;
  border-radius: .5rem;
  box-shadow: none;
  cursor: pointer;
}
.img-cover {
  overflow: hidden;
  border-radius: .5rem;
}
img {
  width: 100%;
  height: auto;
  border-radius: .5rem;
  box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, 0.2);
}
  img:hover {
    transform: scale(1.3);
    transition: .5s;
  }
.fa {
  font-size: .6rem;
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
  font-size: 1.5rem;
  margin: 3rem 0 0 0;
}
h3 {
  font-size: .9rem;
  margin: 0;
}
p {
  font-size: .7rem;
  margin: .5rem 0;
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
    width: 50%;
    height: auto;
    box-shadow: none;
  }
}
</style>
