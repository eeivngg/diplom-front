<template>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Входящие заявки" />
		<div
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<ApplicationsTable v-if="showTable" :applications="applications" />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import ApplicationsTable from '@/components/tables/ApplicationsTable.vue';
import { useApplicationsStore } from '@/store/applicationsStore';
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';

export default {
	components: {
		ApplicationsTable,
		Navbar,
	},
	data() {
		return {
			showTable: false,
		};
	},
	computed: {
		...mapStores(useApplicationsStore, useUserStore),
		applications() {
			return this.applicationsStore.applications;
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
};
</script>
