<template>
  <div>{{ msg }}</div>
  <el-button type="primary" @click="buttonClick">ElButton</el-button>
  <el-tree-select v-model="value" :data="data" check-strictly show-checkbox multiple />
</template>

<script lang="ts" setup>
import { defineProps, reactive, nextTick, ref } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
})
const paperListTable = reactive({
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: '395px',
    },
    {
      title: '创建时间',
      dataIndex: 'ctime',
      width: '121px',
    },
    {
      title: '操作',
      dataIndex: 'op',
      width: '100px',
    },
  ],
  rows: [] as [],
  pagination: { currentPage: 1, size: 5, total: 0 },
})
const emit = defineEmits(['insert'])

const buttonClick = () => {
  emit('insert', 'showImage')
}

const value = ref()

const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
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
