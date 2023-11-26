<template>
  <div id="main">
    <a href="https://manapuraza.com">
      <img src="@/assets/manapuraza-logo.svg" draggable="false" id="center-logo" :class="className" :style="styleObject" />
    </a>
  
    <div class="app">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <SpNav id="sp-nav" />
  </div>
</template>

<script setup>
  import { watch, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import SpNav from '@/components/spNav.vue';
  const route = useRoute();
  const router = useRouter();

  const checkRouterReady = async () => {
    await router.isReady();
  };

  watch(route, () => {
    console.log('current route: ', route.name);
    if (route.name === 'home') {
      document.querySelector('.app').style.top = '20vh';
      document.querySelector('.app').style.opacity = '0';
      document.querySelector('.app').style.pointerEvents = 'none';
    } else {
      document.querySelector('.app').style.top = '0';
      document.querySelector('.app').style.opacity = '1';
      document.querySelector('.app').style.pointerEvents = 'all';
    }
  });

  onMounted(() => {
    checkRouterReady();
  });

  const path = computed(() => route.path);

  const className = computed(() => {
    if (path.value === '/') {
      return 'route-home';
    } else {
      return 'route-other'; 
    }
  });

  const styleObject = computed(() => {
    if (path.value === '/') {
      return {
        opacity: '1',
        transition: 'all .4s ease-in-out',
      };
    } else {
      return {
        opacity: '0',
        filter: 'blur(2rem)',
        transition: 'all .4s ease-in-out',
      };
    }
  });
</script>

<style scoped>
  #main {
    position: relative;
    width: 100%;
    height: 100%;
    display: contents;
  }
  #center-logo {
    position: absolute;
    top: 35%;
    left: 50%;
    width: 40%;
    height: auto;
    transform: translate(-50%, -50%);
  }
  #sp-nav {
    display: none;
  }
  .route-home {
    opacity: 1;
    transition: all .4s ease-in-out;
    animation-delay: 1s;
  }
  .route-other {
    opacity: 0;
    filter: blur(2rem);
    transition: all .4s ease-in-out;
    animation-delay: 1s;
  }
  .app {
    width: 85vw;
    height: 80vh;
    max-width: 1280px;
    max-height: 80vh;
    padding: 2rem 2rem 0 2rem;
    margin: 1rem auto;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.51);
    backdrop-filter: blur(.5rem);
    -webkit-backdrop-filter: blur( .5rem );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    transition: .5s ease-in-out;
    z-index: 1;
  }
  ::-webkit-scrollbar {
    overflow: scroll;
  }
  .slide-enter {
    transform: translateX(-2%);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateX(2%);
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .2s cubic-bezier(0,.94,.57,1.02);
  }
  .slide-leave-active {
    animation: slide-out .2s cubic-bezier(0,.94,.57,1.02);
  }

  @keyframes slide-in {
    0% {
      transform: translateX(2%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-2%);
      opacity: 0;
    }
  }
  
  /* SP表示 */
  @media (max-width: 540px) {
    #center-logo {
      top: 40%;
      width: 60%;
    }
    .app {
      width: 90vw;
      height: 70vh;
      padding: 1rem;
      margin: 1rem auto;
    }
    #sp-nav {
      display: block;
      position: fixed;
      right: 50%;
      pointer-events: all;
    }
  }
</style>