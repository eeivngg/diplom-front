import App from '@/App.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import MainPage from '@/components/pages/MainPageView.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/', component: App
  },
  {
    path: '/main', component: MainPage
  },
  {
    path: '/account', component: AccountPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
