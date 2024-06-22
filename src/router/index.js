import App from '@/App.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import EmployeesApplications from '@/components/pages/EmployeesApplications.vue';
import EmployeesPage from '@/components/pages/EmployeesPage.vue';
import IncomingApplications from '@/components/pages/IncomingApplications.vue';
import LandingPage from '@/components/pages/LandingPage.vue';
import LoginPage from '@/components/pages/LoginPage.vue';
import MainPage from '@/components/pages/MainPageView.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { checkIsUserLogged } from './checkers/checkIsUserLogged';
import { useUserStore } from '@/store/userStore';

const routes = [
	{
		path: '/',
		component: App,
		redirect: '/main',
	},
	{
		name: 'LandingPage',
		path: '/landing',
		component: LandingPage,
	},
	{
		name: 'MainPage',
		path: '/main',
		component: MainPage,
	},
	{
		name: 'Account',
		path: '/account',
		component: AccountPage,
	},
	{
		name: 'IncomingApplications',
		path: '/incoming-applications',
		component: IncomingApplications,
	},
	{
		name: 'Employees',
		path: '/employees',
		component: EmployeesPage,
	},
	{
		name: 'EmployeesApplications',
		path: '/employees-applications',
		component: EmployeesApplications,
	},
	{
		name: 'Login',
		path: '/login',
		component: LoginPage,
	},
	{
		name: 'Register',
		path: '/register',
		component: RegisterPage,
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/login',
		beforeEnter: checkIsUserLogged,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('userToken') || null;

	if (
		!isAuthenticated &&
		to.path !== '/login' &&
		to.path !== '/register' &&
		to.path !== '/landing'
	) {
		next('/login');
	} else if (
		isAuthenticated &&
		(to.path === '/login' || to.path === '/register')
	) {
		next('/incoming-applications')
	} else {
		next();
	}
});

export default router;
