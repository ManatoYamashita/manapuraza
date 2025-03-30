<template>
    <section class="profile-table">
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
  
  // onMounted(() => {
  //   // テーブル行の要素を取得
  //   const rowElements = rows.value;
  
  //   // アニメーションの設定
  //   gsap.from(rowElements, {
  //     opacity: 0,
  //     y: 20,
  //     duration: 1,
  //     ease: 'power2.out',
  //     stagger: 0.2,
  //   });
  // });
</script>
  
<style scoped>
  .profile-table {
    margin: 0;
  }
  
  h2 {
    font-size: 2.2rem;
    margin: 3rem 0 1.5rem 0;
    position: relative;
    display: inline-block;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(67, 153, 187, 0.8) 0%, rgba(67, 153, 187, 0.2) 100%);
  }
  
  table {
    width: 100%;
    margin: 0;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .table-row {
    transition: all 0.3s ease;
    border-radius: 8px;
  }

  .table-row:hover {
    background-color: rgba(67, 153, 187, 0.1);
    transform: translateY(-2px);
  }
  
  th,
  td {
    padding: 1rem 1.5rem;
  }
  
  th {
    text-align: left;
    font-weight: 600;
    color: #333;
    position: relative;
  }
  
  td {
    text-align: right;
  }
  
  td a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
  
  td a:hover {
    color: rgb(67, 153, 187);
  }

  td a i {
    font-size: 0.8rem;
  }
  
  @media screen and (max-width: 540px) {
    table {
      display: block;
      border-spacing: 0;
    }
    
    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    th, td {
      width: 100%;
      text-align: left;
      padding: 0.5rem 0;
    }
    
    td {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      padding-top: 0.8rem;
    }
  }
</style>
