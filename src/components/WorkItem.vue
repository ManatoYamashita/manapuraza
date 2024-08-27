<template>
  <li>
    <a :href="url" target="_blank">
      <div class="img-cover">
        <img :src="thumbnail" :alt="title">
      </div>
      <h3>{{ title }}&nbsp;<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></h3>
      <p>{{ description }}</p>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'WorkItem',
    props: {
      url: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .img-cover {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    border-radius: .5rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: .5rem;
    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  img:hover {
    transform: scale(1.3);
  }
  .fa {
    font-size: .8rem;
    margin-left: 0;
  }
  h3 {
    font-size: 1.2rem;
    margin: .5rem 0;
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
      font-size: .8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }
</style>