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
			<MainPageTable />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import MainPageTable from '@/components/tables/MainPageTable.vue';
import ModalBoxApplicationPropertiesVue from '@/components/modalboxes/ModalBoxApplicationProperties.vue';

export default {
	components: {
		MainPageTable,
		Navbar,
		ModalBoxApplicationPropertiesVue,
	},
	data() {
		return {
			isPropertiesOpened: false,
		};
	},
};
</script>
