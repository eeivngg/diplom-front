<template>
	<div class="flex w-full flex-col px-[50px] py-[20px]">
		<NavBar title="Сотрудники" />
		<div
			class="w-full mt-[20px] flex flex-col gap-y-[20px] h-[calc(100vh-10vh)] overflow-y-auto"
		>
			<EmployeeItem v-for="i in 30" :key="i" />
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import EmployeeItem from '@/components/EmployeeItem.vue';

export default {
	components: {
		NavBar,
		EmployeeItem,
	},
};
</script>
