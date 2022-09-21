import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './style.scss'

const app = createApp(App).use(router).use(store)
app.mount('#app')
console.log(import.meta.env)
