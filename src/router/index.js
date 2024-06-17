import App from '@/App.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import EmployeesApplications from '@/components/pages/EmployeesApplications.vue';
import EmployeesPage from '@/components/pages/EmployeesPage.vue';
import IncomingApplications from '@/components/pages/IncomingApplications.vue';
import LoginPage from '@/components/pages/LoginPage.vue';
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
  },
  {
    path: '/incoming-applications', component: IncomingApplications
  },
  {
    path: '/employees', component: EmployeesPage
  },
  {
    path: '/employees-applications', component: EmployeesApplications
  },
  {
    path: '/login', component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
