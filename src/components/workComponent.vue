<template>
    <li>
        <a :href="href" target="_blank">
        <div class="img-cover">
            <img :src="imgSrc" alt="work" />
        </div>
        <h3>{{ title }}&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
        <p>{{ description }}</p>
        </a>
    </li>
</template>

<script>
    export default {
        props: {
            href: {
                type: String,
                required: true,
            },
            imgSrc: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped>
  .img-cover {
    overflow: hidden;
    position: relative;
    width: 100%; /* コンテナの幅を100%に設定 */
    padding-top: 56.25%; /* 16:9の比率を維持 */
    border-radius: .3rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: .3rem;
    box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, 0.2);
  }
    img:hover {
      transform: scale(1.3);
      transition: .5s;
      border-radius: 0;
    }
  .fa {
    font-size: .8rem;
    margin-left: 0;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: rgb(67, 153, 187);
  }
  h2 {
    font-size: 1.7rem;
    margin: 3rem 0 0 0;
  }
  h3 {
    font-size: 1.1rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin: .7rem 0;
  }
</style>