<template>
	<ModalBoxApplicationPropertiesVue
		v-if="isPropertiesOpened"
		@close="isPropertiesOpened = false"
	/>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Мои заявки" />
		<div
			@click="isPropertiesOpened = true"
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<ApplicationsTable />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import ApplicationsTable from '@/components/tables/ApplicationsTable.vue';
import ModalBoxApplicationPropertiesVue from '@/components/modalboxes/ModalBoxApplicationProperties.vue';
import { mapStores } from 'pinia';
import { useApplicationsStore } from '@/store/applicationsStore';

export default {
	components: {
		ApplicationsTable,
		Navbar,
		ModalBoxApplicationPropertiesVue,
	},
	computed: {
		...mapStores(useApplicationsStore),
	},
	data() {
		return {
			isPropertiesOpened: false,
		};
	},
};
</script>
