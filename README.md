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
6、element-plus，自动按需导入安装 unplugin-vue-components 和 unplugin-auto-import
手动按需导入 unplugin-element-plus
7、vue-tsc，对 vue 3 的一个类型检测工具,比较耗时，npx vue-tsc --help
--skipLibCheck,忽略 node_moudles
-noEmit 表示只验证类型，不输出编译结果
8、
prettier 是代码风格标准插件，eslint 是代码质量校验插件。eslint 其本身也包含代码格式化功能，但是相比于 prettier 专门为了代码格式化而生来说，eslint 有些情况下可能无法正确格式化，所以需要取两者之长，结合起来使用，在本项目中 prettier 主要负责代码格式化，而 eslint 则主要用于代码质量校验

yarn add eslint
npx eslint --init
https://juejin.cn/post/7142815651294511135

9、commitizen + husky
https://juejin.cn/post/6844904025868271629

10.Stylelint
