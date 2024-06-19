import * as UserApi from '@/services/userService';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		allUsers: null,
		currentUser: null,
	}),
	actions: {
		async login(data) {
			const response = await UserApi.login(data);
			this.setCurrentUser(response);
		},
		async authWithHash(data) {
			const response = await UserApi.authWithHash(data);
			this.setCurrentUser(response);
		},
		async registerWithoutCode(data) {
			const response = await UserApi.registerWithoutCode(data);
			this.setCurrentUser(response);
		},
		async registerWithCode(data) {
			const response = await UserApi.registerWithCode(data);
			this.setCurrentUser(response);
		},
		async getUsersInOrganization(organizationId) {
			const response = await UserApi.getUsersInOrganization(organizationId);
			this.allUsers = response;
		},
		setCurrentUser(data) {
			localStorage.setItem('userToken', data.hash);
			localStorage.setItem('userEmail', data.email);
			this.currentUser = data;
		},
	},
});
