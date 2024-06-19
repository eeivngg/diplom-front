import * as ApplicationsApi from '@/services/applicationsService';
import { defineStore } from 'pinia';

export const useApplicationsStore = defineStore('applications', {
	state: () => ({
		applications: null,
	}),
	actions: {
		async getMyApplications(userId) {
			const response = await ApplicationsApi.getMyApplications(userId);
			this.applications = response;
		},
		async getEmployeesApplications(organizationId) {
			const response = await ApplicationsApi.getEmployeesApplications(
				organizationId
			);

			console.log('response is', response);
			this.applications = response;
		},
		async getIncomingApplications(organizationId) {
			const response = await ApplicationsApi.getIncomingApplications(
				organizationId
			);
			this.applications = response;
		},
		async updateApplication(status, responsibleUserId, applicationId) {
			const response = await ApplicationsApi.updateApplication(
				status,
				responsibleUserId,
				applicationId
			);
			console.log('change response', response);
		},
		async removeApplication(applicationId) {
			const response = await ApplicationsApi.removeApplication(applicationId);
			console.log('remove app resp', response);
		},
		async createApplications() {
			const response = await ApplicationsApi.createApplication();
			console.log('response', response);
		},
	},
});
