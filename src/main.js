import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUpRightFromSquare)

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
=======
const app = createApp(App)
>>>>>>> 509c494 (Initial commit)

app.use(router)

app.mount('#app')
