import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style.scss'

const app = createApp(App).use(router)
app.mount('#app')
console.log(import.meta.env)

// css,js,pic,html
// sass
// 插入base.scss
// axios
// 插入vconsole
// vue-tsc,ts
// eslint，prettier
// husky commitlint commitizen
// stylelint
// router，按需引入

// pinia，通信，监听
// 复合函数
