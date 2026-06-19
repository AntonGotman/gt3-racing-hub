import { createApp } from 'vue'
import App from './App.vue'

import store from './store'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import vuetify from './plugins/vuetify'
import router from './router'

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')