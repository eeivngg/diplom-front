<template>
	<ModalBoxApplicationProperties
		@deleteApplication="onDeleteApplication"
		v-if="isPropertiesOpened"
		:application="selectedApplication"
		@closeModal="isPropertiesOpened = false"
	/>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Заявки сотрудников" />
		<div
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<ApplicationsTable
				v-if="showTable && applications.length"
				:applications="applications"
				@openProperties="onOpenProperties"
			/>
			<div v-else class="w-full flex h-screen items-center justify-center">
				<span>
					У ваших сотрудников нет ни одной заявки. Поручите их в разделе
					"Входящие заявки"
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import { useApplicationsStore } from '@/store/applicationsStore';
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';
import ApplicationsTable from '@/components/Tables/ApplicationsTable.vue';
import ModalBoxApplicationProperties from '@/components/modalboxes/ModalBoxApplicationProperties.vue';

export default {
	components: {
		ApplicationsTable,
		Navbar,
		ModalBoxApplicationProperties,
	},
	data() {
		return {
			showTable: false,
			isPropertiesOpened: false,
			selectedApplication: null,
		};
	},
	computed: {
		...mapStores(useApplicationsStore, useUserStore),
		applications() {
			return this.applicationsStore.applications.filter(
				(application) => application.responsibleUser !== this.currentUser?._id
			);
		},
		currentUser() {
			return this.userStore.currentUser;
		},
	},
	async mounted() {
		await this.applicationsStore.getEmployeesApplications(
			this.currentUser.organizationId
		);
		this.showTable = true;
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
};
</script>
