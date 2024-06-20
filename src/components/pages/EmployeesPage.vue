<template>
	<ModalBoxEmployee
		@close="showEmployeeModal = false"
		@deleteUser="onDeleteUser"
		@setRole="onSetRole"
		:user="selectedUser"
		v-if="showEmployeeModal"
	/>
	<div class="flex w-full flex-col px-[20px] py-[25px]">
		<NavBar title="Сотрудники" />
		<div
			v-if="showTable && allUsers?.length"
			class="w-full mt-[20px] flex flex-col gap-y-[10px] h-[calc(100vh-10vh)] overflow-y-auto"
		>
			<EmployeeItem
				@showEmployeeProperties="openEmployeeModal"
				v-for="user in allUsers"
				:key="user"
				:user="user"
			/>
		</div>
		<div v-else class="w-full flex">
			У вас пока нет сотрудников. Чтобы добавить их в организацию - отправьте им
			пригласительный код из настроек аккаунта
		</div>
	</div>
</template>

<script>
import ModalBoxEmployee from '@/components/modalboxes/ModalBoxEmployee.vue';
import NavBar from '@/components/NavBar.vue';
import EmployeeItem from '@/components/EmployeeItem.vue';
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';

export default {
	components: {
		NavBar,
		EmployeeItem,
		ModalBoxEmployee,
	},
	data() {
		return {
			showTable: false,
			showEmployeeModal: false,
			selectedUser: null,
		};
	},
	computed: {
		...mapStores(useUserStore),
		allUsers() {
			const allUsers = this.userStore.allUsers;

			return allUsers.filter((user) => user?._id);
		},
		currentUser() {
			return this.userStore.currentUser;
		},
	},
	async mounted() {
		await this.userStore.getUsersInOrganization(
			this.currentUser.organizationId
		);
		this.showTable = true;
	},
	methods: {
		openEmployeeModal(user) {
			this.showEmployeeModal = true;
			this.selectedUser = user;
		},
		async onSetRole(userId, role) {
			const user = this.allUsers.find((user) => user._id === userId);

			const data = {
				...user,
				role: role,
			};

			await this.userStore.updateEmployee(data);
		},
		async onDeleteUser(userId) {
			await this.userStore.removeUser(userId);
			this.showEmployeeModal = false;
		},
	},
};
</script>
