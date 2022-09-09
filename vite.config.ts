import { defineConfig, loadEnv } from 'vite'
import { name } from './package.json'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  const config = loadEnv(mode, process.cwd())
  console.log('=======', { command, mode, name, config })
  return { 
    base: command === 'serve' ? '/' : config.VITE_CDN_URL,
    define: {
      __DEV__: command === 'serve'
    },
    build: {
      minify: mode === 'production' ? 'esbuild' : false,
      emptyOutDir: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/common/styles/base.scss" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: mode === 'production',
        inject: {
          data: {
            title: 'Vue3单页面应用',
            injectVconsole: mode !== 'production' ? `<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>` : '',
            executeVconsole: mode !== 'production' ? '<script>new VConsole()</script>' : ''
          },
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      port: 3000,
      open: true,
      host: '0.0.0.0',
      proxy: {
        '/saas/wrongbook/': {
          target: config.VITE_MAIN_SITE_DOMAIN,
          changeOrigin: true,
          rewrite: _path => {
            console.log('proxy', _path)
            return _path
          }
        }
      }
    }
  }
})
