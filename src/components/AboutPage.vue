<template>
  <el-radio-group v-model="radio1" class="ml-4" @change="radioChange">
    <el-radio label="0" size="large">Option 1</el-radio>
    <el-radio label="1" size="large">Option 2</el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radio1 = ref('1')

const radioChange = (val: number) => {
  console.log(val)
}
</script>
