<template>
	<PageLoader v-if="isPageLoading" />
	<div v-if="!isPageLoading" class="flex w-full">
		<AsideMenu v-if="showAsideMenu" />
		<router-view />
	</div>
</template>

<script>
import AsideMenu from '@/components/aside/AsideMenu.vue';
import { mapStores } from 'pinia';
import PageLoader from '@/components/PageLoader.vue';
import { useApplicationsStore } from './store/applicationsStore';
import { useUserStore } from './store/userStore';
export default {
	components: {
		AsideMenu,
		PageLoader,
	},
	data() {
		return {
			isPageLoading: false,
		};
	},
	computed: {
		...mapStores(useApplicationsStore, useUserStore),
		showAsideMenu() {
			const forbiddedRoutes = ['/login', '/register', '/landing'];
			if (forbiddedRoutes.includes(this.$route.path)) {
				return false;
			}

			if (!this.currentUser) {
				return false;
			}

			return true;
		},
		currentUser() {
			return this.userStore.currentUser;
		},
	},
	async mounted() {
		this.isPageLoading = true;
		const userEmail = localStorage.getItem('userEmail');
		const userPassword = localStorage.getItem('userToken');

		if (!userEmail || !userPassword) {
			this.isPageLoading = false;
			return;
		}

		const data = {
			email: userEmail,
			hash: userPassword,
		};

		try {
			await this.userStore.authWithHash(data);
			await this.userStore.getUsersInOrganization(
				this.currentUser.organizationId
			);
			await this.userStore.getOrganizationCreatorId(
				this.currentUser.organizationId
			);
		} catch (error) {
			console.log('error', error);
		} finally {
			this.isPageLoading = false;
		}
	},
};
</script>

<style>
:root {
	--popper-theme-background-color: #ffffff;
	--popper-theme-background-color-hover: #ffffff;
	--popper-theme-text-color: #333333;
	--popper-theme-border-width: 1px;
	--popper-theme-border-style: solid;
	--popper-theme-border-color: #eeeeee;
	--popper-theme-border-radius: 6px;
	--popper-theme-padding: 8px;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
