<template>
	<AdminIcon v-if="showAdmin" />
	<EmployeeIcon v-else />
</template>

<script>
import AdminIcon from '@/components/AdminIcon.vue';
import EmployeeIcon from '@/components/EmployeeIcon.vue';

export default {
	components: {
		AdminIcon,
		EmployeeIcon,
	},
	props: {
		showAdmin: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
