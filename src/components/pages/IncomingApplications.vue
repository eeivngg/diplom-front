<template>
	<ModalboxApplicationProperties
		@deleteApplication="onDeleteApplication"
		v-if="isPropertiesOpened"
		:application="selectedApplication"
		@closeModal="isPropertiesOpened = false"
	/>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Входящие заявки" />
		<div
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<ApplicationsTable
				@click.stop
				@openProperties="onOpenProperties"
				v-if="showTable"
				:applications="applications"
			/>
			<div v-else class="w-full flex h-screen items-center justify-center">
				<span> У вас нет входящих заявок </span>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import ApplicationsTable from '@/components/tables/ApplicationsTable.vue';
import ModalboxApplicationProperties from '@/components/modalboxes/ModalBoxApplicationProperties.vue';
import { useApplicationsStore } from '@/store/applicationsStore';
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';

export default {
	components: {
		ApplicationsTable,
		ModalboxApplicationProperties,
		Navbar,
	},
	data() {
		return {
			showTable: false,
			selectedApplication: null,
			isPropertiesOpened: false,
		};
	},
	computed: {
		...mapStores(useApplicationsStore, useUserStore),
		applications() {
			return this.applicationsStore.applications || [];
		},
		filteredApplications() {
			return this.applications.filter(
				(application) =>
					application?.status === 0 && !application?.responsibleUser
			);
		},
		currentUser() {
			return this.userStore.currentUser;
		},
		organizationId() {
			return this.currentUser?.organizationId;
		},
	},
	async mounted() {
		await this.applicationsStore.getIncomingApplications(this.organizationId);
		this.showTable = true;
	},
	methods: {
		onCloseModal() {
			this.showProperties = false;
			this.selectedApplication = null;
		},
		onOpenProperties(application) {
			this.selectedApplication = application;
			this.isPropertiesOpened = true;
		},
		async onDeleteApplication(application) {
			await this.applicationsStore.removeApplication(application._id);
			this.selectedApplication = null;
			this.isPropertiesOpened = false;
		},
	},
};
</script>
