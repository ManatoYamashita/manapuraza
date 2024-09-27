<template>
    <section class="profile">
      <h2>Profile</h2>
      <table>
        <tbody>
          <tr
            v-for="(item, index) in profileItems"
            :key="index"
            ref="rows"
            class="table-row"
          >
            <th>{{ t(item.label) }}</th>
            <td v-html="item.content"></td>
          </tr>
        </tbody>
      </table>
    </section>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { gsap } from 'gsap';
  
  const { t } = useI18n();
  
  // プロフィール項目を定義
  const profileItems = [
    {
      label: 'about.name',
      content: `<a href="https://bento.me/ym/" target="_blank">${t('about.name-co')} <i class="fas fa-arrow-up-right-from-square"></i></a>`,
    },
    {
      label: 'about.sex',
      content: t('about.sex-co'),
    },
    {
      label: 'about.birth',
      content: t('about.birth-co'),
    },
    {
      label: 'about.country',
      content: t('about.country-co'),
    },
    {
      label: 'about.live',
      content: t('about.live-co'),
    },
    {
      label: 'about.study',
      content: `<a href="https://informatics.tcu.ac.jp/" target="_blank">${t('about.study-co')} <i class="fas fa-arrow-up-right-from-square"></i></a>`,
    },
    {
      label: 'about.research',
      content: `<a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank">${t('about.research-co')} <i class="fas fa-arrow-up-right-from-square"></i></a>`,
    },
    {
      label: 'about.like',
      content: `${t('about.like-co')} &#x1F34C;`,
    },
  ];
  
  // テーブル行の参照を格納する配列
  const rows = ref([]);
  
  onMounted(() => {
    // テーブル行の要素を取得
    const rowElements = rows.value;
  
    // アニメーションの設定
    gsap.from(rowElements, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    });
  });
</script>
  
<style scoped>
  .profile {
    margin: 0;
  }
  
  table {
    width: 100%;
    margin: 0;
  }
  
  tr {
    border-bottom: 2px solid #101010;
  }

  th,
  td {
    padding: 1rem;
  }
  
  th {
    text-align: left;
  }
  
  td {
    text-align: right;
  }
  
  td a {
    color: inherit;
    text-decoration: none;
  }
  
  @media screen and (max-width: 540px) {
    table {
      display: block;
    }
    tr {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    th,
    td {
      width: 100%;
      text-align: center;
    }
  }
</style>
