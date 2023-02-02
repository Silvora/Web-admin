import { ConfigEnv, defineConfig,loadEnv } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import WindiCss from "vite-plugin-windicss"

function pathResolve(dir: string) {
  //return resolve(__dirname, dir);
  return resolve(process.cwd(),dir)
}

function pathENV(mode:string){
  return loadEnv(mode, process.cwd())
}

// https://vitejs.dev/config/
export default ({mode}:ConfigEnv)=>defineConfig({

  plugins: [vue(),WindiCss()],
  resolve: {
    alias: {
      '@': pathResolve("./src"),
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{
          'primary-color': '#0960bd',
          'info-color': '#0960bd',
          'processing-color': '#0960bd',
          'success-color': '#55D187', //  Success color
          'error-color': '#ED6F6F', //  False color
          'warning-color': '#EFBD47', //   Warning color
          //'border-color-base': '#EEEEEE',
          'font-size-base': '14px', //  Main font size
          'border-radius-base': '2px', //  Component/float fillet
          'link-color': '#0960bd', //   Link color
          'app-content-background': '#fafafa', // 
        },
        javascriptEnabled: true,
      }
    }
  },
  server: {
    host: pathENV(mode).VITE_HOST,
    port: Number(pathENV(mode).VITE_PORT),
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    base: pathENV(mode).VITE_BASE_URL,
},
})
