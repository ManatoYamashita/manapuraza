<script setup>
  import SnsView from '@/components/snsView.vue';
  import HistoryView from '@/components/historyView.vue';
</script>

<template>
  <div class="main">
    <h1>About</h1>
    <h2>{{ $t('about.ym') }}</h2>
    
    <section class="howyoufeel">
      <div class="self-image">
        <img fetchpriority="high" src="@/assets/yamashitamanato.webp" alt="山下マナト">
      </div>
      <div id="message">
        <p>
          <strong id="howyoufeel">How you feel?</strong>
          <br>{{ $t('about.passage') }} &#x1F34C; </p>
        <SnsView id="sns" />
      </div>
      </section>

      <section class="profile">
        <h2>Profile</h2>
        <table>
          <tr>
            <th>{{ $t('about.name') }}</th>
            <td><a href="https://bento.me/ym/" target="_blank">{{ $t('about.name-co') }} <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>{{ $t('about.sex') }}</th>
            <td>{{ $t('about.sex-co') }}</td>
          </tr>
          <tr>
            <th>{{ $t('about.birth') }}</th>
            <td>{{ $t('about.birth-co') }}</td>
          </tr>
          <tr>
            <th>{{ $t('about.country') }}</th>
            <td>{{ $t('about.country-co') }}</td>
          </tr>
          <tr>
            <th>{{ $t('about.live') }}</th>
            <td>{{ $t('about.live-co') }}</td>
          </tr>
          <tr>
            <th>{{ $t('about.study') }}</th>
            <td><a href="https://informatics.tcu.ac.jp/" target="_blank">{{ $t('about.study-co') }} <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>{{ $t('about.research') }}</th>
            <td><a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank">{{ $t('about.research-co') }} <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>{{ $t('about.like') }}</th>
            <td>{{ $t('about.like-co') }} &#x1F34C;</td>
          </tr>
        </table>
      </section>
      
      <div class="his">
        <h2>History</h2>
        <HistoryView />
      </div>
  </div>
</template>

<style scoped>
  .main {
    width: 90%;
    margin: 0 auto;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 5rem;
  }
  .howyoufeel {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  #howyoufeel {
    font-size: 1.2rem;
    margin: 0;
    width: 100%;
  }
  .self-image {
    width: 30%;
    margin: 0;
  }
  img {
    width: 100%;
    border-radius: .5rem;
  }
  #message {
    width: 70%;
    padding: 0 0 0 2rem;
  }
  #message p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
  }
  .profile {
    margin: 0;
  }
  #sns {
    width: 100%;
  }
  table {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  tr {
    width: 100%;
    border-bottom: 1px solid #101010;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  th {
    width: 50%;
    text-align: left;
    padding: 1rem;
  }
  td {
    width: 50%;
    text-align: right;
    align-self: stretch;
    padding: 1rem;    
  }
  .his {
    padding-bottom: 10vh;
  }

  @media screen and (max-width: 540px) {
    .howyoufeel {
      flex-direction: column;
      align-items: center;
    }
    .self-image {
      width: 50%;
      margin: 0 auto;
    }
    #message {
      width: 90%;
      padding: 1rem 0;
    }
    td a {
      margin: 1rem 0;
    }
  }
</style>