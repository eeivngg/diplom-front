<template>
	<ModalBoxApplicationProperties
		@deleteApplication="onDeleteApplication"
		v-if="isPropertiesOpened"
		:application="selectedApplication"
		@closeModal="isPropertiesOpened = false"
	/>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Мои заявки" />
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
				<span> У вас нет задач </span>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import ApplicationsTable from '@/components/Tables/ApplicationsTable.vue';
import ModalBoxApplicationProperties from '@/components/modalboxes/ModalBoxApplicationProperties.vue';
import { mapStores } from 'pinia';
import { useApplicationsStore } from '@/store/applicationsStore';
import { useUserStore } from '@/store/userStore';

export default {
	components: {
		ApplicationsTable,
		Navbar,
		ModalBoxApplicationProperties,
	},
	computed: {
		...mapStores(useApplicationsStore, useUserStore),
		currentUser() {
			return this.userStore.currentUser;
		},
		applications() {
			return this.applicationsStore.applications;
		},
	},
	methods: {
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
	async mounted() {
		await this.applicationsStore.getMyApplications(this.currentUser._id);
		this.showTable = true;
	},
	data() {
		return {
			isPropertiesOpened: false,
			showTable: false,
			selectedApplication: null,
		};
	},
};
</script>
