<template>
    <div class="navbar">
        <div class="logo">
                <a href="https://manapuraza.com/">
                    <transition name="slide" mode="out-in">
                    <img src="@/assets/manapuraza-logo.svg" alt="logo" v-show="currentPath !== '/'">
                    </transition>
                </a>
        </div>
        <nav>
          <RouterLink to="/" class="rlink">Home</RouterLink>
          <RouterLink to="/about" class="rlink">About</RouterLink>
          <RouterLink to="/works" class="rlink">Works</RouterLink>
          <RouterLink to="/contact" class="rlink">Contact</RouterLink>
        </nav>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
    name: "Navbar",
    components: {
        RouterLink,
    },
    data() {
        return {
            currentPath: this.$route.path,
        };
    },
    watch: {
        $route(to, from) {
            this.currentPath = to.path;
        },
    },
};
</script>

<style lang="css" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }
    .logo {
        display: block;
        height: 3rem;
        width: auto;
    }
    .rlink {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        padding: 0 1rem;
        cursor: pointer;
    }
    .rlink:hover {
        color: #4faef2;
	    text-shadow: #4faef2 1rem 0px 1rem;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }
    .slide-enter-from,
    .slide-leave-to {
        transform: translateY(100%);
    }

    /* トランジションの終了時のスタイル */
    .slide-enter-to,
    .slide-leave-from {
        transform: translateY(0);
    }

    /* トランジションのアクティブ時のスタイル */
    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.5s;
        transition-delay: 500ms;
    }
</style>