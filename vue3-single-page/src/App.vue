<template>
  <div>
    <HelloWorld msg="Vue 3 + TypeScript + Vite" @insert="showImage" />
    <img v-if="showPic" class="img" src="./assets/logo.png" />
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { get } from '@/common/request'
import HelloWorld from './components/HelloWorld.vue'
import { storeToRefs } from 'pinia'
import { useStore } from './store/counter'

const showPic = ref(false)
const store = useStore()
//从 Store 中提取属性同时保持其响应式
const { counter, doubleCount } = storeToRefs(store)
store.updateName('cm')
store.increment()
console.log('store:', { name: store.name, counter: counter.value, doublePlusOne: store.doublePlusOne })

onMounted(async () => {
  try {
    const res = await get({
      url: '/student.api',
      params: {
        studentId: 'xxx',
      },
    })
    console.log(res)
  } catch (e) {
    console.log(e)
  }
})

const showImage = (val: string) => {
  console.log(val)
  showPic.value = !showPic.value
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}

.img {
  display: block;
  width: 100px;
}

a {
  display: inline-block;
  background-color: antiquewhite;
  text-align: center;
  width: 150px;
  margin: 5px 10px 5px 0;
}
</style>
