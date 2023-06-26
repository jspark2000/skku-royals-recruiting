import './style.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)

app.use(router)
loadFonts()
app.mount('#app')
