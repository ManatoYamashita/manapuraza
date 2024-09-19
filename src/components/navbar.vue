<template>
    <div class="navbar">
        <div class="logo">
                <RouterLink to="/">
                    <transition name="slide" mode="out-in">
                      <img src="@/assets/logo.webp" alt="manapuraza.com" class="logo" v-show="currentPath !== '/'">
                    </transition>
                </RouterLink>
        </div>
        
        <nav class="default-menu">
            <RouterLink to="/about" class="rlink">About</RouterLink>
            <RouterLink to="/works" class="rlink">Works</RouterLink>
        </nav>

        <div id="lang-switch">
            <span class="lang">{{ $t('navbar.toggle') }}</span>
            <div class="toggle-switch">
                <input class="toggle-input" id="toggle" type="checkbox" @click="toggleLanguage">
                <label class="toggle-label" for="toggle"></label>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
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
        methods: {
            toggleLanguage() {
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'ja' : 'en';
            }
        },
    };
</script>

<style lang="css" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        height: 100%;
    }
    .logo {
        display: block;
        width: 55%;
        min-width: 200px;
        overflow: hidden;
    }
    img {
        height: 100%;
    }
    .rlink {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0 1rem;
        cursor: pointer;
    }
    .rlink:hover {
        color: skyblue;
	    text-shadow: #4faef2 0 0px 1rem;
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

    /* toggle switch */
    #lang-switch {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        justify-content: left;
        flex-direction: row;
        align-items: center;
        z-index: 0;
        transform: scale(1.5);
    }
    .lang {
        font-size: 12px;
    }
    /* Genel stil */
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
        margin: 10px;
    }

    /* Giriş stil */
    .toggle-switch .toggle-input {
        display: none;
    }

    /* Anahtarın stilinin etrafındaki etiketin stil */
    .toggle-switch .toggle-label {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 24px;
        background-color: #BC002D;
        border-radius: 34px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    /* Anahtarın yuvarlak kısmının stil */
    .toggle-switch .toggle-label::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        background-color: #fff;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s;
    }

    /* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
    .toggle-switch .toggle-input:checked + .toggle-label {
        background-color: #4faef2;
    }

    .toggle-switch .toggle-input:checked + .toggle-label::before {
        transform: translateX(16px);
    }

    /* Light tema */
    .toggle-switch.light .toggle-label {
        background-color: #BEBEBE;
    }

    .toggle-switch.light .toggle-input:checked + .toggle-label {
        background-color: #9B9B9B;
    }

    .toggle-switch.light .toggle-input:checked + .toggle-label::before {
        transform: translateX(6px);
    }

    /* Dark tema */
    .toggle-switch.dark .toggle-label {
        background-color: #4B4B4B;
    }

    .toggle-switch.dark .toggle-input:checked + .toggle-label {
        background-color: #717171;
    }

    .toggle-switch.dark .toggle-input:checked + .toggle-label::before {
        transform: translateX(16px);
    }

    span {
        font-size: .8em;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }

    /* sp表示 */
    @media screen and (max-width: 540px) {
        .logo img {
            width: 10rem;
        }
        .default-menu {
            display: none;
        }
        #lang-switch {
            display: flex;
            position: static;
            transform: scale(1.1);
        }
    }
</style>