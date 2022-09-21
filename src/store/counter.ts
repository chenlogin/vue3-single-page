import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('useInfo', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      id: 1,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  //Getter 完全等同于 Store 状态的 计算值
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1
    },
    getUserName: (state) => {
      return (userId: number) => {
        let name = ''
        if (state.id === userId) {
          name = state.name
        }
        return name
      }
    },
  },
  // Actions 相当于组件中的 methods
  // 通过 actions 去修改 state
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
    updateName(name: string) {
      this.name = name
    },
  },
  persist: {
    storage: localStorage,
    paths: ['counter', 'name'],
  },
})
