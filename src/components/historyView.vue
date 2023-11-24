<template>
    <div id="main">
      <div class="timeline">
        <div class="entry animation">
         <div class="title">
            <h3>2002</h3>
          </div>
          <div class="body p1">
            <h3>{{ $t('his.02') }}</h3>
            <p>{{ $t('his.02-de') }}</p>
          </div>
        </div>
        <div class="entry animation">
          <div class="title">
            <h3>2003</h3>
          </div>
          <div class="body p2">
            <h3>{{ $t('his.03') }}</h3>
            <p>{{ $t('his.03-de') }}</p>
          </div>
        </div>
        <div class="entry animation">
          <div class="title">
            <h3>2015</h3>
          </div>
          <div class="body p3">
            <h3>{{ $t('his.15') }}</h3>
            <p>{{ $t('his.15-de') }}</p>
          </div>
        </div>
        <div class="entry animation">
          <div class="title">
            <h3>2018</h3>
          </div>
          <div class="body p4">
            <h3>{{ $t('his.18') }}</h3>
            <p>{{ $t('his.18-de') }}</p>
          </div>
        </div>
        <div class="entry animation">
          <div class="title">
            <h3>2021</h3>
          </div>
          <div class="body p5">
            <h3>{{ $t('his.21') }}</h3>
            <p>{{ $t('his.21-de') }}</p>

            <h3>{{ $t('his.21-2') }}</h3>
            <p>{{ $t('his.21-2-de') }}</p>
          </div>
        </div>
        <div class="entry animation">
          <div class="title">
            <h3>2022</h3>
          </div>
          <div class="body p6">
            <h3>{{ $t('his.22') }}</h3>
            <p>{{ $t('his.22-de') }}</p>
          </div>
          <div class="entry animation">
          <div class="title">
            <h3>2023</h3>
          </div>
          <div class="body p7">
            <h3>{{ $t('his.23') }}</h3>
            <p>{{ $t('his.23-de') }}</p>

            <h3>{{ $t('his.23-2') }}</h3>
            <p>{{ $t('his.23-2-de') }}</p>
          </div>
        </div>
        
        </div>
      </div>
    </div>
</template>

<style scoped>
* {
  pointer-events: all;
}
#main {
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
}
.timeline {
  width: 100%;
  height: 100%;
  padding: 2rem 0 5rem 0;
  position: relative;
  margin-bottom: 50vh;
}
.timeline:before {
  /* タイムラインの縦線 */
  content: '';
  position: absolute;
  left: calc(33% + 15px);
  top: calc(3rem + 3px);
  bottom: 0;
  width: 4px;
  background: #101010;
}
.timeline:after {
  content: "";
  display: table;
  clear: both;
}
.entry {
  clear: both;
  text-align: left;
  position: relative;
}
.title {
  float: left;
  width: 33%;
  padding-right: 30px;
  text-align: right;
  position: relative;
}
.title:before {
  /* point of timeline */
  content: '';
  position: absolute;
  width: 1rem;
  border: .5rem solid black;
  border-radius: 100%;
  top: 15%;
  right: calc(-1.5rem - 1px);
}
h3 {
  margin: 0;
  font-size: 120%;
}
p {
  margin: 0;
  font-size: small;
}
.body {
  float: right;
  width: 66%;
  padding-left: 2rem;
  margin: 0;
}
.p1 {
  margin-bottom: 1rem;
}
.p2 {
  margin-bottom: 6rem;
}
.p3 {
  margin-bottom: 2rem;
}
.p4 {
  margin-bottom: 2rem;
}
.p5 {
  margin-bottom: 2rem;
}
.p6 {
  margin-bottom: 2rem;
}
.p7 {
  margin-bottom: 2rem;
}

.animation {
  opacity: 0;
  position: sticky;
  animation: scroll-anime ease forwards; 
  animation-timeline: view();
  animation-range: contain 0% end 100%;
}
@keyframes scroll-anime {
  /* 要素を上から下へスライドさせる */
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>