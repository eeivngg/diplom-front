import * as UserApi from '@/services/userService';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		allUsers: null,
		currentUser: null,
		organizationInviteCode: null,
		organizationCreator: null,
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
		async getOrganizationInviteCode(organizationId) {
			const response = await UserApi.getInviteCode(organizationId);
			this.organizationInviteCode = response.inviteCode;
		},
		async removeUser(userId) {
			await UserApi.removeUser(userId);
			this.removeUserLocally(userId);
		},
		async updateUser(data) {
			const response = await UserApi.updateUser(data);
			this.setCurrentUser(response);
		},
		async getOrganizationCreatorId(organizationId) {
			const response = await UserApi.getOrganizationCreatorId(organizationId);
			this.organizationCreator = response.creator;
		},
		async updateEmployee(data) {
			const response = await UserApi.updateUser(data);
			this.updateEmployeeLocally(response);
		},
		updateEmployeeLocally(data) {
			const employeeIndex = this.allUsers.findIndex(
				(employee) => employee._id === data._id
			);

			if (employeeIndex === -1) return;

			this.allUsers[employeeIndex] = data;
		},
		setCurrentUser(data) {
			localStorage.setItem('userToken', data.hash);
			localStorage.setItem('userEmail', data.email);
			this.currentUser = data;
		},
		removeUserLocally(userId) {
			const index = this.allUsers.findIndex((user) => user._id === userId);

			if (index === -1) return;

			this.allUsers.splice(index, 1);
		},
		logout() {
			localStorage.removeItem('userToken');
			localStorage.removeItem('userEmail');
			this.currentUser = null;
			this.allUsers = null;
		},
	},
});
