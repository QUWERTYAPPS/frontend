import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Dark, Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
Dark.set(true)