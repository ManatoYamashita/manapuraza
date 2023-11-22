import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/navbar.vue'
import MetaBall from './components/MetaBall.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUpRightFromSquare)

const app = createApp(App)
const navbar = createApp(Navbar)
const metaball = createApp(MetaBall)
app.component('fa', FontAwesomeIcon)

navbar.use(router)
metaball.use(router)
app.use(router)

app.mount('#app')
navbar.mount('#navbar')
metaball.mount('#back')