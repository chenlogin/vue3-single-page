# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# 搭建Vue3+Vite3项目
1、初始化
```
yarn create vite
yarn create vite project_name --template vue
```
2、引用sass
vue-cli的时候，还要安装sass-loader、node-sass什么的，但是vite其实安装sass就可以了
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
3、request.ts 封装axios
4、vite alias配完后可以直接使用，但是编辑器会标红，需要修改 tsconfig.json，paths属性
5、html注入vconcole插件，vite-plugin-html
6、element-plus，自动按需导入安装unplugin-vue-components 和 unplugin-auto-import
 手动按需导入unplugin-element-plus
