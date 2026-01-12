<template>
    <section id="about-infomations">
      <h2>Infomations</h2>
      <table class="about-infomations-table">
        <tbody>
          <tr
            v-for="(item, index) in infomationItems"
            :key="index"
            ref="rows"
            class="table-row"
          >
            <th>{{ t(item.label) }}</th>
            <td>
              <a v-if="item.hasLink" :href="item.linkHref" target="_blank" class="profile-link">
                {{ item.content }}
                <font-awesome-icon :icon="faArrowUpRightFromSquare" />
              </a>
              <span v-else v-html="item.content"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

  const { t } = useI18n();

  // 表示するインフォメーション項目を定義
  const infomationItems = [
    {
      label: 'about.name',
      content: t('about.name-co'),
      hasLink: true,
      linkHref: 'https://bento.me/ym/',
    },
    {
      label: 'about.sex',
      content: t('about.sex-co'),
      hasLink: false,
    },
    {
      label: 'about.birth',
      content: t('about.birth-co'),
      hasLink: false,
    },
    {
      label: 'about.country',
      content: t('about.country-co'),
      hasLink: false,
    },
    {
      label: 'about.live',
      content: t('about.live-co'),
      hasLink: false,
    },
    {
      label: 'about.study',
      content: t('about.study-co'),
      hasLink: true,
      linkHref: 'https://informatics.tcu.ac.jp/',
    },
    {
      label: 'about.research',
      content: t('about.research-co'),
      hasLink: true,
      linkHref: 'https://www.comm.tcu.ac.jp/seki_lab/',
    },
    {
      label: 'about.like',
      content: `${t('about.like-co')} &#x1F34C;`,
      hasLink: false,
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
  /* === ベーススタイル（モバイル: ~480px） === */
  #about-infomations {
    width: 100%;
    padding: 2rem;
  }

  h2 {
    font-size: 1.6rem;
    margin: 0 0 1.5rem 0;
  }

  table.about-infomations-table {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .table-row {
    transition: all 0.3s ease;
    border-radius: 8px;
  }

  .table-row:hover {
    transform: translateY(-2px);
  }

  th,
  td {
    padding: 1rem 1.2rem;
  }

  th {
    text-align: left;
    font-weight: 600;
    color: #333;
    position: relative;
    white-space: nowrap;
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
    color: #000;
    text-shadow: 0 0 8px rgba(240, 211, 0, 0.7);
    text-decoration: underline;
    text-decoration-color: rgba(240, 211, 0, 0.8);
    text-underline-offset: 0.2em;
  }

  /* モバイルレイアウト（~480px） */
  table.about-infomations-table {
    display: block;
    border-spacing: 0;
  }

  tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding: 1rem;
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

  /* === タブレット（481px-768px） === */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    h2 {
      font-size: 2.0rem;
    }

    table.about-infomations-table {
      max-width: 700px;
      display: table;
      border-spacing: 0 10px;
    }

    tr {
      display: table-row;
      margin-bottom: 0;
      padding: 0;
    }

    th, td {
      display: table-cell;
      width: auto;
      padding: 1rem 1.2rem;
    }

    th {
      text-align: left;
    }

    td {
      text-align: right;
      border-top: none;
      padding-top: 1rem;
    }
  }

  /* === デスクトップ（769px~） === */
  @media screen and (min-width: 769px) {
    h2 {
      font-size: 2.2rem;
    }

    table.about-infomations-table {
      max-width: 800px;
      display: table;
      border-spacing: 0 10px;
    }

    tr {
      display: table-row;
      margin-bottom: 0;
      padding: 0;
    }

    th, td {
      display: table-cell;
      width: auto;
      padding: 1rem 1.2rem;
    }

    th {
      text-align: left;
    }

    td {
      text-align: right;
      border-top: none;
      padding-top: 1rem;
    }
  }
</style>
