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

			this.updateApplicationLocally(response);
		},
		async removeApplication(applicationId) {
			await ApplicationsApi.removeApplication(applicationId);
			this.removeApplicationLocally(applicationId);
		},
		async createApplication(tasks, organizationTitle) {
			await ApplicationsApi.createApplication(tasks, organizationTitle);
		},
		updateApplicationLocally(data) {
			const applicationIndex = this.applications.findIndex(
				(application) => application._id === data._id
			);

			if (applicationIndex === -1) {
				return;
			}

			this.applications[applicationIndex] = data;
		},
		removeApplicationLocally(applicationId) {
			const applicationIndex = this.applications.findIndex(
				(application) => application._id === applicationId
			);

			if (applicationIndex === -1) {
				return;
			}

			this.applications.splice(applicationIndex, 1);
		},
	},
});
