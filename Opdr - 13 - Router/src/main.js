import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// De router wordt toegevoegd met .use(router).
createApp(App).use(router).mount('#app')
