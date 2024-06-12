import App from '@/App.vue'
import router from '@/router/index'
import { createApp } from 'vue'


import './index.css'
import './reset.css'

createApp(App).use(router).mount('#app')
