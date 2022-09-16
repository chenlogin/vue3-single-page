<template>
  <div>
    <HelloWorld msg="Vue 3 + TypeScript + Vite" @insert="showImage" />
    <el-radio-group v-model="radio1" class="ml-4" @change="radioChange">
      <el-radio label="0" size="large">Option 1</el-radio>
      <el-radio label="1" size="large">Option 2</el-radio>
    </el-radio-group>
    <img v-if="showPic" class="img" src="./assets/logo.png" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { get } from '@/common/request'
import HelloWorld from './components/HelloWorld.vue'

const radio1 = ref('1')
const showPic = ref(false)

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

const radioChange = (val: number) => {
  console.log(val)
}
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
</style>
