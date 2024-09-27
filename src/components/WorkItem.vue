<template>
  <li class="work-item">
    <a :href="url" target="_blank">
      <div class="img-cover">
        <img :src="thumbnail" :alt="title" loading="lazy" />
      </div>
      <h3>{{ title }} <fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
      <p>{{ description }}</p>
    </a>
  </li>
</template>

<script>
  import { gsap } from 'gsap';

  export default {
    name: 'WorkItem',
    props: {
      url: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      thumbnail: { type: String, required: true },
      index: { type: Number, required: true }, // indexをpropsとして受け取る
    },
    mounted() {
      gsap.from(this.$el, {
        y: 200,
        duration: 1,
        delay: this.index * 0.2,
        ease: 'power4.out',
      });
    },
  };
</script>

<style scoped>
  .work-item {
    margin: 1rem 0;
    overflow: hidden; /* overflow-yをoverflowに変更 */
  }

  .img-cover {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 0.5rem;
  }

  .img-cover img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* 高さを100%に設定 */
    object-fit: cover;
    border-radius: 0.5rem;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .img-cover img:hover {
    transform: scale(1.1); /* 拡大率を調整 */
  }

  .fa {
    font-size: 0.8rem;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgb(10, 10, 10);
  }

  a:hover {
    color: rgb(67, 153, 187);
    text-decoration: underline;
  }

  @media screen and (max-width: 540px) {
    .fa {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }
</style>
