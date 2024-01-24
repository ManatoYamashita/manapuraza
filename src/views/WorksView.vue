<template>
  <div id="main">
    <h1>Works</h1>

    <main>
      <div id="main-contents">
        <h2>Illustration / Graphics</h2>
          <ul>
            <li>
              <a href="https://manapuraza.myportfolio.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/creativeworks.gif" alt="illustrations">
                </div>
                <h3>Manapuraza Creative Works&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w1') }}</p>
              </a>
            </li>
          </ul>
          
        <h2>Programming / Web</h2>
          <ul>
            <a href="https://github.com/ManatoYamashita" target="_blank">
              <h3>GitHub&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
              <p>{{  $t('works.w2') }}</p>
            </a>
          </ul>
          <ul>
            <li>
              <a href="https://manapuraza.com">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/example.webp" alt="manapuraza">
                </div>
                <h3>Manapuraza&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{  $t('works.w3') }}</p>
              </a>
            </li>
            <li>
              <a href="http://tmana.sub.jp/numeron/dirs/src/numeron.html" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/numeron.webp" alt="numeron">
                </div>
                <h3>NUMERON&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w4') }}</p>
              </a>
            </li>
            <li>
              <a href="http://dum.manapuraza.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/dum.webp" alt="dum">
                </div>
                <h3>Down Under Mountain&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w5') }}</p>
              </a>
            </li>
            <li>
              <a href="https://killerdie-2023.netlify.com" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/killerdie.webp" alt="killerdie">
                </div>
                <h3>キラキラ大学生研究会 1周年記念&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w6') }}</p>
              </a>
            </li>
            <li>
              <a href="https://chaintence.shotaro.jp" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/chaintence.webp" alt="chaintence">
                </div>
                <h3>chaintence&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w7') }}</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ManatoYamashita/SysB_wtm" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/wtm.webp" alt="WehereToMe">
                </div>
                <h3>WTM&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w8') }}</p>
              </a>
            </li>
            <li>
              <a href="http://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/dc-chan_xbot.webp" alt="dc-chan">
                </div>
                <h3>でじこんちゃん Twitter bot&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w9') }}</p>
              </a>
            </li>
            <li>
              <a href="http://jamstack-blog-test.vercel.app">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/jamstack.webp" alt="jamstack-blog">
                </div>
                <h3>Blog test&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w10') }}</p>
              </a>
            </li>
            <li>
              <a href="http://www.comm.tcu.ac.jp/tcu-acc">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/tcuacc.webp" alt="tcu-acc">
                </div>
                <h3>東京都市大学 同好会連合本部&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.w11') }}</p>
              </a>
            </li>
            <li>
              <a href="https://sekilab.vercel.app">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/sekilab.png" alt="sekilab">
                </div>
                <h3>東京都市大学 関研究室 情報セキュリティ&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{  $t('works.w12') }}</p>
              </a>
            </li>
            <li>
              <a href="https://sekilab-quiz.vercel.app">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/sekilab-quiz.jpg" alt="sekilab">
                </div>
                <h3>情報セキュリティ Quiz App&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{  $t('works.w13') }}</p>
              </a>
            </li>
          </ul>

        <h2>Video / Animation</h2>
          <ul>
            <li>
              <a href="https://www.youtube.com/@ManatoYamashita/" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/yt_ym.webp" alt="youtube">
                </div>
                <h3>個人 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.v1') }}</p>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@tcu_dc/" target="_blank">
                <div class="img-cover">
                  <img src="@/assets/works-sumbnail/yt_dc.webp" alt="youtube dc">
                </div>
                <h3>デジタルコンテンツ研究会 YouTubeチャンネル&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
                <p>{{ $t('works.v2') }}</p>
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

<script type="text/javascript">
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
ul .img-cover {
  overflow: hidden;
  position: relative;
  width: 100%; /* コンテナの幅を100%に設定 */
  padding-top: 56.25%; /* 16:9の比率を維持 */
  border-radius: .5rem;
}
ul img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  width: 100%;
  height: auto;
  object-fit: cover;
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
    position: relative;
    width: 50%;
    height: auto;
    box-shadow: none;
  }
}
</style>
