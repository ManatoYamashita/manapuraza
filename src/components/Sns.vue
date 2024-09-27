<!-- SnsIcons.vue -->
<template>
    <div id="icons">
      <a
        v-for="(icon, index) in icons"
        :key="icon.id"
        :href="icon.href"
        :id="icon.id"
        ref="iconRefs"
        class="icon-link"
      >
        <font-awesome-icon :icon="icon.icon" class="sns" />
      </a>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  // アイコンの情報を定義
  const icons = [
    {
      id: 'bento',
      href: 'https://bento.me',
      icon: ['fas', 'link'],
    },
    {
      id: 'mail',
      href: 'mailto:g2172117@tcu.ac.jp',
      icon: ['fas', 'envelope'], // メールアイコン
    },
    {
      id: 'github',
      href: 'https://github.com/ManatoYamashita',
      icon: ['fab', 'github'],
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/yamashitamanato/',
      icon: ['fab', 'linkedin'],
    },
    {
      id: 'twitter',
      href: 'https://manapuraza.com/twitter',
      icon: ['fab', 'twitter'],
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/manapuraza_com/',
      icon: ['fab', 'instagram'],
    },
    {
      id: 'discord',
      href: 'https://discord.com/users/915241588060475402',
      icon: ['fab', 'discord'],
    },
  ];
  
  // refs を格納する配列
  const iconRefs = ref([]);
  
  onMounted(() => {
    // アニメーションの設定
    gsap.fromTo(iconRefs.value, {
      y: 50,
    },
    {
      y: 0,
      ease: 'power2.out',
      stagger: 0.1,
    });
  });
</script>
  
<style scoped>
  #icons {
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;
    margin: 1rem 0;
    overflow-y: hidden;
  }
  .sns {
    font-size: 1.7rem;
    color: #2E2E2E;
    transition: color .2s;
  }
  .sns:hover {
    color: var(--primary-color);
  }
</style>
  