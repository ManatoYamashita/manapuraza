<script setup>
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { RouterLink, RouterView } from 'vue-router'
<<<<<<< HEAD
import HelloWorld from './components/HelloWorld.vue'
>>>>>>> 509c494 (Initial commit)
=======
>>>>>>> 25bd1b3 ([add] works page's information)
=======
>>>>>>> 89669a1 ([add] fixed Works, link icons and profile images.)
</script>

<template>
  <header>
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="rlink">Home</RouterLink>
        <RouterLink to="/about" class="rlink">About</RouterLink>
        <RouterLink to="/works" class="rlink">Works</RouterLink>
        <RouterLink to="/contact" class="rlink">Contact</RouterLink>
=======
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <Router-link to="/works">Works</Router-link>
        <Router-link to="/contact">Contact</Router-link>
>>>>>>> 509c494 (Initial commit)
=======
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="rlink">Home</RouterLink>
        <RouterLink to="/about" class="rlink">About</RouterLink>
        <RouterLink to="/works" class="rlink">Works</RouterLink>
        <RouterLink to="/contact" class="rlink">Contact</RouterLink>
>>>>>>> 25bd1b3 ([add] works page's information)
      </nav>
    </div>
  </header>

<<<<<<< HEAD
<<<<<<< HEAD
  <Transition name="slide" mode="out-in">
    <router-view />
  </Transition>

</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
}
nav a.router-link-exact-active {
  color:  #4faef2;
  font-weight: bolder;
=======
  <RouterView />
  <footer>
    <div class="sns">
      <h2>Contact</h2>
      <li>
        <ul><a href="https://github.com/ManatoYamashita/">GitHub</a></ul>
        <ul><a href="https://www.linkedin.com/in/yamashitamanato/">LinkdIn</a></ul>
        <ul><a href="https://twitter.com/YamashitaMa_tcu/">Twitter</a></ul>
        <ul><a href="https://www.instagram.com/tmana.sub.jp/">Instagram</a></ul>
        <ul><a href="https://bento.me/ym/">Bento.me</a></ul>
=======
  <Transition name="slide" mode="out-in">
    <router-view />
  </Transition>
>>>>>>> 25bd1b3 ([add] works page's information)

</template>

<style scoped>
nav a.router-link-exact-active {
<<<<<<< HEAD
  color: var(--color-text);
>>>>>>> 509c494 (Initial commit)
=======
  color:  #4faef2;
  font-weight: bolder;
>>>>>>> 25bd1b3 ([add] works page's information)
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 25bd1b3 ([add] works page's information)
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-20px);
}

<<<<<<< HEAD
=======
>>>>>>> 509c494 (Initial commit)
=======
>>>>>>> 25bd1b3 ([add] works page's information)
@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
