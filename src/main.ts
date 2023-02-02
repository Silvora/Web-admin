import { createApp } from 'vue'
//import "ant-design-vue/dist/antd.css"
import "ant-design-vue/dist/antd.less"
import "virtual:windi.css"
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"

dayjs.locale('zh-cn');

async function bootstrap() {
    const app = createApp(App)
    
    //配置路由
    app.use(router)

    //配置store
    app.use(store)

    //页面渲染
    app.mount('#app')
}

bootstrap()

