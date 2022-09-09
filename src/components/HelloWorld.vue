<template>
  <div>{{ msg }}</div>
  <el-button type="primary" @click="buttonClick">ElButton</el-button>
</template>

<script lang="ts" setup>
import { defineProps, reactive, nextTick } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
const paperListTable = reactive({
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: '395px'
    },
    {
      title: '创建时间',
      dataIndex: 'ctime',
      width: '121px'
    },
    {
      title: '操作',
      dataIndex: 'op',
      width: '100px'
    }
  ],
  rows: [] as [],
  pagination: { currentPage: 1, size: 5, total: 0 }
})
const emit = defineEmits(['insert'])

const buttonClick = () => {
  emit('insert', 'showImage')
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
