<script setup>
<<<<<<< HEAD
</script>

<template>
  <div class="welcome">
    <h1>How you feel? I’m so so so…</h1>
    <h2>Manato Yamashita</h2>
    <img src="@/assets/ym.webp" alt="Manato Yamashita" id="profile-img">
    <p>
      Hello, I'm <strong>Manato Yamashita</strong>. I'm studying computer science at the Department of Informatics, at <strong><a href="https://tcu.ac.jp/" target="_blank">Tokyo City University</a></strong><fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" />.
      I am conducting research on information security at Seki Laboratory. My favorite writer is Sayaka Murata.<br>
      This site is a my "portfolio site".
      MANAPURAZA.COM is implemented <strong>SPA（Single Page Application）</strong> by <strong><a href="https://ja.vitejs.dev/" target="_blank">Vite</a></strong><fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /> with
       <strong><a href="https://ja.vuejs.org/" target="_blank">Vue.js</a></strong><fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" />!
    </p>
    <p>In my classes, I learned the basic theories of <strong>ICT assessments</strong> and <strong>multimedia</strong>,
        and also did team development using <strong>programming</strong>, from requirement definition to video production.
          Furthermore, as the representative of a group with more than 100 members that creates digital contents using digital tools,
          I did <strong>video production</strong>, <strong>graphics design</strong>, <strong>llustration</strong>, <strong>programming</strong>, and <strong>iweb design</strong>.
            I also enjoy making animations as a hobby, and I <strong>love all of creative</strong> activities in general.</p>
=======
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<!-- <template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template> -->
<template>
  <div class="welcome">
    <h1>The Welcome View</h1>
>>>>>>> 509c494 (Initial commit)
  </div>
</template>

<style scoped>
<<<<<<< HEAD
img#profile-img {
  width: 15vw;
  border-radius: 5px;
  padding: 0;
}
  .fa {
    font-size: .6rem;
    margin-left: .2rem;
=======
  @media (min-width: 1024px) {
    .welcome {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
>>>>>>> 509c494 (Initial commit)
  }
</style>
