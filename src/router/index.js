import App from '@/App.vue';
import MainPage from '@/components/pages/MainPage.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/', component: App
  },
  {
    path: '/main', component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
