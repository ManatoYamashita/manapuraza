<!-- <template>
    <div id="main">
        <nav class="snsmenu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
        <label class="menu-open-button" for="menu-open">
          <span class="hamburger hamburger-1"></span>
          <span class="hamburger hamburger-2"></span>
          <span class="hamburger hamburger-3"></span>
        </label>
        
        <a href="https://bento.me/ym/" target="_blank" class="menu-item"><i class="fa fab fa-solid fa-user"></i></a>
        <a href="https://github.com/ManatoYamashita/" target="_blank" class="menu-item"><i class="fa fab fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yamashitamanato/" target="_blank" class="menu-item"> <i class="fa fab fa-brands fa-linkedin"></i></a>
        <a href="https://manapuraza.com/twitter" target="_blank" class="menu-item"><i class="fa fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/tmana.sub.jp/" target="_blank" class="menu-item"> <i class="fa fab fa-brands fa-instagram"></i> </a>
        <a href="mailto:info@manapuraza.com" target="_blank" class="menu-item"><i class="fa fab fa-envelope"></i></a>
        <a href="tel:08021509014" class="menu-item"><i class="fa fab fa-solid fa-phone"></i></a>
        </nav>
        
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
                
                <fegaussianblur in="SourceGraphic" result="blur" stdDeviation="10" />
                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <fegaussianblur in="goo" stdDeviation="3" result="shadow" />
                <fecolormatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                <feoffset in="shadow" dx="1" dy="1" result="shadow" />
                <fecomposite in2="shadow" in="goo" result="goo" />
                <fecomposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <fegaussianblur in="SourceGraphic" result="blur" stdDeviation="10" />
                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <fecomposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
    </div>
</template>

<style lang="css" scoped>
  .snsmenu {
    filter: url('#shadowed-goo');
      position: absolute;
    left: 2%;
    bottom: 7vh;
    width: 650px;
    box-sizing: border-box;
    font-size: 20px;
    text-align: left;
  }

  .menu-item, .menu-open-button {
    background: #fcd62a;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 0;
      margin: 2%;
    color: white;
    text-align: center;
    line-height: 60px;
    transform: translate3d(0, 0, 0);
    transition: transform ease-out 200ms;
  }
  .menu-open {
    display: none;
  }
  .hamburger {
    width: 25px;
    height: 3px;
    background: white;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    transition: transform 200ms;
  }
  .hamburger-1 {
    transform: translate3d(0, -8px, 0);
  }
  .hamburger-2 {
    transform: translate3d(0, 0, 0);
  }
  .hamburger-3 {
    transform: translate3d(0, 8px, 0);
  }
  .menu-open:checked + .menu-open-button .hamburger-1 {
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  .menu-open:checked + .menu-open-button .hamburger-2 {
    transform: translate3d(0, 0, 0) scale(0.1, 1);
  }
  .menu-open:checked + .menu-open-button .hamburger-3 {
    transform: translate3d(0, 0, 0) rotate(-45deg);
  }
  .menu-item:hover {
    background: white;
    color: #4faef2;
  }
  .menu-item:nth-child(3) {
    transition-duration: 180ms;
  }
  .menu-item:nth-child(4) {
    transition-duration: 180ms;
  }
  .menu-item:nth-child(5) {
    transition-duration: 180ms;
  }
  .menu-item:nth-child(6) {
    transition-duration: 180ms;
  }
  .menu-item:nth-child(7) {
      transition-duration: 180ms;
  }
  .menu-item:nth-child(8) {
      transition-duration: 180ms;
  }
  .menu-item:nth-child(9) {
      transition-duration: 180ms;
  }
  .menu-open-button {
    z-index: 2;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
  }
  .menu-open-button:hover {
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }
  .menu-open:checked + .menu-open-button {
    transition-timing-function: linear;
    transition-duration: 200ms;
    transform: scale(0.8, 0.8) translate3d(0, 0, 0);
  }
  .menu-open:checked ~ .menu-item {
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .menu-open:checked ~ .menu-item:nth-child(3) {
    transition-duration: 170ms;
    transform: translate3d(60px, 0, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(4) {
    transition-duration: 250ms;
    transform: translate3d(120px, 0, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(5) {
    transition-duration: 330ms;
    transform: translate3d(180px, 0, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(6) {
    transition-duration: 410ms;
    transform: translate3d(240px, 0, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(7) {
    transition-duration: 490ms;
    transform: translate3d(300px, 0, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(8) {
    transition-duration: 570ms;
    transform: translate3d(360px, 0, 0);
  } 
  .menu-open:checked ~ .menu-item:nth-child(9) {
    transition-duration: 650ms;
    transform: translate3d(420px, 0, 0);
  }

/* スマートフォンの表示 */
@media screen and (max-width: 480px) {
  .menu-open-button, .menu-item {
		font-size: 1em;
		width: 45px;
		height: 45px;
		line-height: 45px;
		margin: 0;
	}
	.menu-open:checked ~ .menu-item {
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
   }
	.menu-open:checked ~ .menu-item:nth-child(3) {
		transition-duration: 170ms;
		transform: translate3d(45px, 0, 0);
   }
	.menu-open:checked ~ .menu-item:nth-child(4) {
		transition-duration: 250ms;
		transform: translate3d(90px, 0, 0);
   }
	.menu-open:checked ~ .menu-item:nth-child(5) {
		transition-duration: 330ms;
		transform: translate3d(135px, 0, 0);
   }
	.menu-open:checked ~ .menu-item:nth-child(6) {
		transition-duration: 410ms;
		transform: translate3d(180px, 0, 0);
   }
	.menu-open:checked ~ .menu-item:nth-child(7) {
	  transition-duration: 490ms;
	  transform: translate3d(225px, 0, 0);
   }
	.menu-open:checked ~ .menu-item:nth-child(8) {
	  transition-duration: 570ms;
	  transform: translate3d(270px, 0, 0);
   } 
	.menu-open:checked ~ .menu-item:nth-child(9) {
	  transition-duration: 650ms;
	  transform: translate3d(315px, 0, 0);
   }
   .credit {
	font-size: .5em;
   }
}
</style> -->