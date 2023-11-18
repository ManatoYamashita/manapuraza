<script setup>
  import SnsView from '@/components/SnsView.vue';
  import HistoryView from '../components/historyView.vue';
</script>

<template>
  <div class="main">
    <h1>About</h1>
    <h2>Manato Yamashita</h2>
    
    <section class="howyoufeel">
      <div class="self-image">
        <img src="@/assets/ym_photo.jpg" alt="山下マナト">
      </div>
      <div id="message">
        <p>
          <strong id="howyoufeel">How you feel?</strong>
          <br>I'm Manato Yamashita. studying computer science at the Department of Informatics,
           at Tokyo City University. My hobbies are create digital contents(ex: illustration, animation, web and so on...) and reading.
            my favorite writer is Sayaka Murata.This site is for my portfolio named MANAPURAZA.COM from Manato(my name) + Tamaplaza(the station near my living)
             I love all of creative activities! and banana.&#x1F34C;
        </p>
        <SnsView id="sns" />
      </div>
      </section>

      <section class="profile">
        <h2>Profile</h2>
        <table>
          <tr>
            <th>Name</th>
            <td><a href="https://bento.me/ym/" target="_blank">Manato Yamashita <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>Sex</th>
            <td>Man</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>Man</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td>2002.04.17</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>Japan（ja）</td>
          </tr>
          <tr>
            <th>Live-in</th>
            <td>Kanagawa | Tokyo | Kumamoto</td>
          </tr>
          <tr>
            <th>Study</th>
            <td><a href="https://informatics.tcu.ac.jp/" target="_blank">Tokyo-City University, Informatic / Systems <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>Research</th>
            <td><a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank">SEKI Cyber Security Laboratory <i class="fas fa-arrow-up-right-from-square"></i></a></td>
          </tr>
          <tr>
            <th>Like</th>
            <td>Banana 🍌</td>
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
  img {
    width: 15rem;
    border-radius: .5rem;
  }
  .howyoufeel {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  #howyoufeel {
    font-size: 1.2rem;
    margin: 0;
  }
  #message {
    padding: 0 0 0 2rem
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
  }
  th {
    width: 50%;
    text-align: left;
    align-self: stretch;
    padding: 1rem;
    border-bottom: 1px solid #101010;

  }
  td {
    text-align: left;
    border-bottom: 1px solid #101010;
  }

  /* SP */
  @media (max-width: 540px) {
  }
</style>