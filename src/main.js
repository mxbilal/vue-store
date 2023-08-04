import './assets/main.css'
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import store from './store';
import router from './router';
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})
app.use(router)

app.use(vuetify)
app.use(store)
app.mount("#app")
