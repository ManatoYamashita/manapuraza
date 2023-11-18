<template>
  <div id="main">
    <img src="@/assets/manapuraza-logo.svg" id="center-logo" :class="className" :style="styleObject" />
    <div class="app">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
  import { watch, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
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
    } else {
      document.querySelector('.app').style.top = '0';
      document.querySelector('.app').style.opacity = '1';
    }
  });

  onMounted(() => {
    checkRouterReady();
  });

  const path = computed(() => route.path); // パスを算出プロパティとして定義

  const className = computed(() => { // クラス名を算出プロパティとして定義
    if (path.value === '/') {
      return 'foo'; // パスが'/'なら'foo'というクラスを返す
    } else {
      return 'bar'; // それ以外なら'bar'というクラスを返す
    }
  });

  const styleObject = computed(() => { // スタイルオブジェクトを算出プロパティとして定義
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
    min-height: 100vh;
  }
  #center-logo {
    position: absolute;
    top: 35%;
    left: 50%;
    width: 40%;
    height: auto;
    transform: translate(-50%, -50%);
  }
  .className {
    transition: all .4s ease-in-out;
  }
  .app {
    position: relative;
    left: auto;
    width: 80vw;
    height: 80vh;
    max-width: 1280px;
    max-height: 80vh;
    padding: 2rem 2rem 0 2rem;
    margin: 1rem auto;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.51);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur( 1px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    transition: .5s ease-in-out;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  .main::-webkit-scrollbar {
	  width: 10px;
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

</style>