<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <Router-link to="/works">Works</Router-link>
        <Router-link to="/contact">Contact</Router-link>
      </nav>
    </div>
  </header>

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

        <ul><a href="mailto:tcumanato@gmail.com">Mail</a></ul>
        <ul><a href="tel:08021509014">Tel</a></ul>
      </li>
    </div>
    <div class="credit">©︎ 2023 Manato Yamashita / <a href="https://tcu-dc.net/">Tokyo City University Digital Contents Study society</a></div>
  </footer>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
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
