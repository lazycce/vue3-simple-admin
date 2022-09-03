import { createApp } from 'vue'
import { createPinia } from 'pinia'

// element 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App.vue'

// 路由
import router from './router'
import { createPermission } from './router/permission'

import './assets/main.css'

Nprogress.configure({ showSpinner: false })

const app = createApp(App)
const permission = createPermission({ router, Nprogress })

app.use(createPinia())
app.use(router)
app.use(permission)
app.use(ElementPlus)

app.mount('#app')
