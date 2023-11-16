<template>
  <div class="app" :style="$route.meta.style">
    <Transition name="slide" mode="out-in">
        <router-view />
    </Transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
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
    animation: box-shadow-pulse 5s forwards;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    transition: top 1s cubic-bezier(0,.94,.57,1.02);
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
    transition: all 0.3s ease-out;
  }
  .slide-leave-active {
    transition: all 0.3s ease-in;
  }
  .slide-enter-from, .slide-leave-to {
    transform: translateX(-20px);
  }
</style>