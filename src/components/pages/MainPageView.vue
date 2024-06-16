<template>
	<div class="mt-[25px] w-full flex flex-col">
		<Navbar class="px-4" title="Мои заявки" />
		<div class="flex w-full h-full overflow-x-hidden overflow-y-auto">
			<TasksTable />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import TasksTable from '@/components/tables/TasksTable.vue';

export default {
	components: {
		TasksTable,
		Navbar,
	},
};
</script>
