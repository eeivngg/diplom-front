<template>
	<AsideMenu />
	<router-view />
</template>

<script>
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue';
import TasksTable from '@/components/Tables/TasksTable.vue';
export default {
	components: {
		AsideMenu,
		TasksTable,
	},
};
</script>

<style></style>
