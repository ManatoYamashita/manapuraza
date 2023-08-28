<script setup>
<<<<<<< HEAD
<<<<<<< HEAD
</script>

<template>
  <div class="welcome">
    <h1>How you feel? I’m so so so…</h1>
    <h2>Manato Yamashita</h2>
    <img src="@/assets/ym.webp" alt="Manato Yamashita" id="profile-img">
<<<<<<< HEAD
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
=======
>>>>>>> 25bd1b3 ([add] works page's information)
</script>

<template>
  <div class="welcome">
<<<<<<< HEAD
    <h1>The Welcome View</h1>
>>>>>>> 509c494 (Initial commit)
=======
    <h1>How you feel? I’m so so so…</h1>
    <h2>Manato Yamashita</h2>
=======
>>>>>>> 89669a1 ([add] fixed Works, link icons and profile images.)
    <p>
      Hello, I’m <strong>Manato Yamashita</strong>. I’m studying computer science at the Department of Informatics, at <strong><a href="https://tcu.ac.jp/" target="_blank">Tokyo City University</a></strong><fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" />.
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
>>>>>>> 25bd1b3 ([add] works page's information)
  </div>
</template>

<style scoped>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89669a1 ([add] fixed Works, link icons and profile images.)
img#profile-img {
  width: 15vw;
  border-radius: 5px;
  padding: 0;
<<<<<<< HEAD
}
  .fa {
    font-size: .6rem;
    margin-left: .2rem;
=======
  @media (min-width: 1024px) {
    .welcome {
      min-height: 100vh;
      display: block;
      align-items: center;
    }
>>>>>>> 509c494 (Initial commit)
  }
  @media (max-width: 1024px) {
  .welcome {
    font-size: 75%;
  }
=======
>>>>>>> 89669a1 ([add] fixed Works, link icons and profile images.)
}
  .fa {
    font-size: .6rem;
    margin-left: .2rem;
  }
</style>
