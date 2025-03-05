import './assets/main.css'
import './assets/tailwind.css'

import { createVuetify } from "vuetify";
import "vuetify/styles"; // Importa los estilos de Vuetify

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import vuetify from './plugins/vuetify' // 👈 Importa la configuración de Vuetify


app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
