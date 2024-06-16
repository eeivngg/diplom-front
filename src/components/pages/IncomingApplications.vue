<template>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Входящие заявки" />
		<div
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<TasksTable />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import TasksTable from '@/components/Tables/TasksTable.vue';

export default {
	components: {
		TasksTable,
		Navbar,
	},
};
</script>
