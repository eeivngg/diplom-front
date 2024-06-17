<template>
	<div class="mt-[25px] h-full w-full flex flex-col">
		<Navbar class="px-4" title="Заявки сотрудников" />
		<div
			class="flex w-full max-h-[calc(100vh-10vh)] overflow-x-hidden overflow-y-auto"
		>
			<EmployeesTasksTable />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import EmployeesTasksTable from '@/components/tables/EmployeesTasksTable.vue';

export default {
	components: {
		EmployeesTasksTable,
		Navbar,
	},
};
</script>
