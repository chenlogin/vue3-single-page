import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './style.scss'

const app = createApp(App).use(router).use(store)
app.mount('#app')
console.log(import.meta.env)

// css,js,pic,html
// sass
// 插入base.scss

// vue-tsc,ts
// eslint，prettier
// husky commitlint commitizen
// stylelint

// axios
// 插入vconsole

// router
// pinia

// Composables组合式函数
