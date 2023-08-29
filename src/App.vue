<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="rlink">Home</RouterLink>
          <RouterLink to="/about" class="rlink">About</RouterLink>
          <RouterLink to="/works" class="rlink">Works</RouterLink>
          <RouterLink to="/contact" class="rlink">Contact</RouterLink>
        </nav>
      </div>
    </header>
    
    <Transition name="slide" mode="out-in">
        <router-view />
    </Transition>
  </div>
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
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration-line: none;
}

nav a:first-of-type {
  border: 0;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-20px);
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
