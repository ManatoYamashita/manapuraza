<template>
  <div id="main">
    <Navbar id="navbar" />
    <MetaBall id="back" />
    <a href="https://manapuraza.com" aria-current="page" class="home-logo">
      <img 
        fetchpriority="high" 
        src="@/assets/logo.webp" 
        alt="ホームページに戻る" 
        draggable="false" 
        id="center-logo" 
        :class="className" 
        :style="styleObject" 
      />
    </a>
  
    <div class="app glass">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" id="scrollable-aria" />
        </transition>
      </router-view>
    </div>

    <SpNav id="sp-nav" />
  </div>
</template>

<script type="text/javascript" setup>
  import { watch, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import SpNav from '@/components/SpNav.vue';
  import Navbar from '@/components/Navbar.vue';
  import MetaBall from '@/components/MetaBall.vue';
  
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
  .home-logo {
    pointer-events: all;
    z-index: 1;
    overflow-y: hidden;
  }
  #center-logo {
    position: absolute;
    top: 43%;
    left: 50%;
    width: 500px;
    height: auto;
    transform: translate(-50%, -50%);
    transition: all .5s ease-in-out;
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
    transition: .5s ease-in-out;
    /* scroll-behavior: auto; */
    overflow-y: hidden;
  }
  .glass {
    background-color: rgba(255, 255, 255, 0.1); /* 背景色 */
    border: 1px solid rgba(255, 255, 255, 0.4); /* ボーダー */
    border-right-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    -webkit-backdrop-filter: blur(20px); /* ぼかしエフェクト */
    backdrop-filter: blur(20px);
    box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5); /* 薄い影 */
  }
  #scrollable-aria {
    overflow-y: auto;
    height: 100%;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    z-index: 1;
    pointer-events: all;
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
    #main {
      display: block;
      overflow: hidden;
      pointer-events: none;
    }
    #center-logo {
      top: 40%;
      width: 60%;
    }
    .app {
      width: 90vw;
      height: 70vh;
      padding: 1rem 0;
      margin: 1rem auto;
    }
    #sp-nav {
      display: block;
      position: fixed;
      right: 50%;
      bottom: 2.5rem;
      pointer-events: all;
    }
  }
</style>