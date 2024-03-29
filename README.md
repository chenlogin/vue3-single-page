# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# 搭建 Vue3+Vite3 项目

1、初始化

```
yarn create vite
yarn create vite project_name --template vue
```

2、引用 sass
vue-cli 的时候，还要安装 sass-loader、node-sass 什么的，但是 vite 其实安装 sass 就可以了
yarn add sass

```
//全局引入
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/common/styles/base.scss" as *;`
      }
    }
  },
```

3、request.ts 封装 axios

4、vite alias 配完后可以直接使用，但是编辑器会标红，需要修改 tsconfig.json，paths 属性

5、html 注入 vconcole 插件，vite-plugin-html

6、element-plus 自动按需导入安装 unplugin-vue-components 和 unplugin-auto-import
手动按需导入 unplugin-element-plus

7、vue-tsc，对 vue 3 的一个类型检测工具,比较耗时，npx vue-tsc --help
--skipLibCheck,忽略 node_moudles
-noEmit 表示只验证类型，不输出编译结果

8、prettier 是代码风格标准插件，eslint 是代码质量校验插件。eslint 其本身也包含代码格式化功能，但是相比于 prettier 专门为了代码格式化而生来说，eslint 有些情况下可能无法正确格式化，所以需要取两者之长，结合起来使用，在本项目中 prettier 主要负责代码格式化，而 eslint 则主要用于代码质量校验

yarn add eslint vite-plugin-eslint @babel/core @babel/eslint-parser
npx eslint --init

yarn add prettier
yarn add eslint-config-prettier #eslint 兼容的插件
yarn add eslint-plugin-prettier #eslint 的 prettier

https://juejin.cn/post/7142815651294511135

9、husky + commitlint + commitizen
https://juejin.cn/post/6844904025868271629

10、Stylelint,stylelint-config-standard,stylelint-order,stylelint-scss,postcss-html,postcss-scss

11、router, yarn add vue-router@4
使用一个自定义组件 router-link 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL
router-view 将显示与 url 对应的组件
使用 /about 这样的静态路由和 /users/:userId 这样的动态路由，使用带有参数的路由时需要注意的是，当用户从 /users/johnny 导航到 /users/jolyne 时，相同的组件实例将被重复使用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会被调用。this.$router.push 导航到不同的 URL，这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。

12、pinia,
createPinia,defineStore
pinia-plugin-persistedstate #持久化,将 store 的 state 中的全部数据进行缓存，直接在 state 同级下面添加 persist 对象，默认将数据存放在浏览器的 SessionStorage 中

13、Composables 组合式函数，Vue3 composition API 案例，写类 Hooks 函数（vue3 成为组合式函数）实现 minxin 功能的
Vue2 minxins 混入器案缺点:
当使用了多个 minxins 时, property 来自哪个 mixin 变得不清晰,这使追溯实现和理解组件行为变得困难。
命名冲突会覆盖。
隐式的跨 minxin 交流:多个 minxin 需要依赖共享的 property 键名来进行相互作用,这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入,像普通函数那样。
