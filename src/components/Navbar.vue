<template>
    <div class="navbar">
        <div class="logo">
                <RouterLink to="/" aria-current="page" aria-label="ホームページに戻る">
                    <transition name="slide" mode="out-in" aria-current="page">
                        <img 
                            src="@/assets/logo-low.webp" 
                            alt="manapuraza.com logo" 
                            loading="lazy" 
                            decoding="async"
                            width="250"
                            height="50"
                            class="logo" 
                            v-show="currentPath !== '/'"
                            @error="handleLogoError"
                        />
                    </transition>
                </RouterLink>
        </div>
        
        <nav class="default-menu">
            <RouterLink to="/about" class="rlink" :class="{ 'nav-animate': isInitialLoad }">About</RouterLink>
            <RouterLink to="/creatives" class="rlink" :class="{ 'nav-animate': isInitialLoad }">Creatives</RouterLink>
            <RouterLink to="/contact" class="rlink" :class="{ 'nav-animate': isInitialLoad }">Contact</RouterLink>
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
                isInitialLoad: true,
            };
        },
        watch: {
            $route(to, from) {
                try {
                    if (to && to.path) {
                        this.currentPath = to.path;
                        console.log(`Navbar: Route updated to ${to.path}`);
                    } else {
                        console.warn('Navbar: Invalid route object received');
                    }
                } catch (error) {
                    console.error('Navbar: Route watcher failed:', error);
                    // フォールバック: デフォルトパスを設定
                    this.currentPath = '/';
                }
            },
        },
        mounted() {
            try {
                // 初回アニメーション実行後、フラグをリセット
                setTimeout(() => {
                    this.isInitialLoad = false;
                }, 2000); // アニメーション完了後にフラグ解除
            } catch (error) {
                console.error('Navbar: Mount animation setup failed:', error);
                this.isInitialLoad = false; // フォールバック
            }
        },
        // ナビゲーションエラーハンドリング強化
        errorCaptured(err, instance, info) {
            console.error('Navbar: Component error captured:', {
                error: err,
                instance: instance?.$options?.name || 'Unknown',
                info
            });
            
            // エラーが発生してもコンポーネントを継続動作させる
            return false;
        },
        methods: {
            toggleLanguage() {
                try {
                    if (this.$i18n && this.$i18n.locale) {
                        this.$i18n.locale = this.$i18n.locale === 'en' ? 'ja' : 'en';
                        console.log(`Navbar: Language switched to ${this.$i18n.locale}`);
                    } else {
                        console.warn('Navbar: i18n not available for language toggle');
                    }
                } catch (error) {
                    console.error('Navbar: Language toggle failed:', error);
                    // ユーザーに視覚的フィードバックを提供
                    const toggleLabel = document.querySelector('.toggle-label');
                    if (toggleLabel) {
                        toggleLabel.style.backgroundColor = '#ff4444';
                        setTimeout(() => {
                            toggleLabel.style.backgroundColor = '';
                        }, 1000);
                    }
                }
            },
            handleLogoError(event) {
                try {
                    console.warn('Navbar: Logo image failed to load, hiding logo');
                    event.target.style.display = 'none';
                    // ロゴが読み込めない場合、テキストフォールバックを表示
                    const logoContainer = event.target.parentElement?.parentElement;
                    if (logoContainer) {
                        logoContainer.innerHTML = '<span class="logo-fallback">manapuraza</span>';
                    }
                } catch (error) {
                    console.error('Navbar: Logo error handler failed:', error);
                }
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
        height: 100%;
        position: relative;
        z-index: 10;
        pointer-events: auto !important;
    }
    .logo {
        display: block;
        width: 55%;
        min-width: 200px;
        overflow: hidden;
        cursor: alias;
    }
    img {
        height: 100%;
    }
    .rlink {
        text-decoration: none;
        color: #000;
        font-size: 1.4rem;
        font-weight: bold;
        padding: 0 .5rem;
        cursor: pointer;
        position: relative;
        z-index: 11;
        pointer-events: auto !important;
    }
    .default-menu {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        pointer-events: auto;
    }
    /* 初回アニメーション */
    .nav-animate {
        opacity: 0;
        transform: translateY(-20px);
        animation: navFadeInUp 0.8s ease-out 1s forwards;
    }

    .nav-animate:nth-child(2) {
        animation-delay: 1.2s; /* Creatives リンク用の追加遅延 */
    }

    .nav-animate:nth-child(3) {
        animation-delay: 1.4s; /* Contact リンク用の追加遅延 */
    }

    @keyframes navFadeInUp {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .rlink:hover {
        color: skyblue;
        text-shadow: #4faef2 0 0px 1rem;
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow .3s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            text-shadow: #4faef2 0 0px 1rem;
        }
        to {
            text-shadow: #4faef2 0 0px 2rem, #4faef2 0 0px 3rem;
        }
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
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        transform: scale(1.2);
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
            flex-direction: row;
            align-items: center;
        }
    }
</style>