import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts/LayoutDefault.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '',
        component: HelloWorld,
        name: 'helloworld',
        meta: {
          title: '首页',
          showSelect: false,
        },
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    meta: {
      title: '关于',
    },
    children: [
      {
        path: '',
        component: () => import('@/components/AboutPage.vue'),
        name: 'about',
        meta: {
          title: '关于',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(__DEV__ ? '.' : `.`),
  routes,
})

export default router
