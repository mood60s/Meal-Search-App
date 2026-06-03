import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Pinia Config,
import { createPinia } from 'pinia'
const pinia = createPinia()
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})
const app = createApp(App)
import '../src/CSS/main.css'
app.use(router).use(pinia).use(vuetify)
app.mount('#app')
