
import SnsView from '../components/snsView.vue';
<template>
  <div class="main">
    <h1>About</h1>
    <h2>Manato Yamashita</h2>
    <div class="howyoufeel">
      <div class="self-image">
        <img src="@/assets/ym.webp" alt="山下マナト">
        <SnsView />
        <h2>Profile</h2>
        <ul>
          <li><strong>Name</strong>: <a href="https://bento.me/ym/" target="_blank">Manato Yamashita<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          <li><strong>Sex</strong>: Man</li>
          <li><strong>Gender</strong>: Man</li>
          <li><strong>Birthday</strong>: 2002.04.17</li>
          <li><strong>Country</strong>: Japan（ja）</li>
          <li><strong>Live-in</strong>: Kanagawa | Tokyo | kumamoto</li>
          <li><strong>Study</strong>: <a href="https://informatics.tcu.ac.jp/" target="_blank">Tokyo-City University, Informatic / Systems<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          <li><strong>Research</strong>: <a href="https://www.comm.tcu.ac.jp/seki_lab/" target="_blank">SEKI Cyber Security Laboratory<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a></li>
          <li><strong>Like</strong>: Banana &#x1F34C;</li>
        </ul>
      </div>

      <div class="his">
        <h2>History</h2>
        <ul>
          <li><strong>2002</strong>: Born in Kumamoto prefecture</li>
          <li><strong>2003</strong>: Lived in Tokyo, Katsushika-ward</li>
          <li><strong>2015</strong>: Tateishi-junior-high school</li>
          <li><strong>2018</strong>: Hojo-high school</li>
          <li><strong>2021</strong>: Tokyo-City University</li>
          <li><strong>2021</strong>: Live in Kawasaki City, Miyamae-ward（Miyazakidai）</li>
          <li><strong>2023</strong>: <a href="https://www.ecu.edu.au/" target="_blank">Edith-Cowan University<fa :icon="['fas', 'arrow-up-right-from-square']" class="fa" /></a>（study abroad, Australia）</li>
          <li><strong>2023</strong>: Live in Kawasaki City, Miyamae-ward（Saginuma）</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.2rem;
  margin: 1rem 0;
}
img {
  width: 25%;
}
.fa {
  font-size: .6rem;
  margin-left: .2rem;
}

@media (max-width: 540px) {
}
</style>