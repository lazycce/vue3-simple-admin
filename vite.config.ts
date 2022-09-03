import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { viteMockServe } from 'vite-plugin-mock'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const baseUrl = process.env.VITE_BASE_URL

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/dev-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        },
      }
    },
  
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({ resolvers: [ElementPlusResolver()] }), 
      Components({ resolvers: [ElementPlusResolver()] }), 
      viteMockServe({
        mockPath: "./mock",
        localEnabled: true,
        supportTs: true
      })
    ],
  
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})