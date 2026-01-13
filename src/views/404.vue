<template>
    <main class="error-page">
        <div class="container">
            <div class="error">
                <div class="content">
                    <h1>{{ $t('404.title') }}</h1>
                    <h2>{{ $t('404.notfound') }}</h2>
                    <p>{{ $t('404.message') }}</p>
                    <br>
                    <button class="goback">
                        <a href="https://www.yamashitamana.to">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Back to Home</span>
                        </a>
                    </button>
                    </div>
            </div>
        </div>
    </main>
</template>

<style lang="css" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error .content {
        width: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 2rem;
    }

    .error .content h1 {
        font-size: 6rem;
        font-weight: 900;
        color: #000;
    }

    .error .content h2 {
        font-size: 2.5rem;
        margin: 1rem 0;
        font-weight: 700;
        color: #000;
    }

    .error .content p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #000;
    }

    button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    margin-top: 2rem;
    font-size: inherit;
    font-family: inherit;
    }

    button.goback {
    width: 13rem;
    height: auto;
    }

    button.goback .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: var(--manapuraza-acsent);
    border-radius: 1.625rem;
    }

    button.goback .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    }

    button.goback .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
    }

    button.goback .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
    }

    button.goback .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: .5rem;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 2rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
    }

    button:hover .circle {
    width: 100%;
    }

    button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
    }

    button:hover .button-text {
    color: #fff;
    }

    @media (max-width: 768px) {
        .error .content h1 {
            font-size: 3rem;
        }

        .error .content h2 {
            font-size: 1.5rem;
        }

        .error .content p {
            font-size: 1rem;
        }
    }
</style>
