<template>
	<ModalBox @close="closeModal" title="Свойства сотрудника">
		<div class="flex items-center gap-x-[30px] pt-[50px] pb-[20px]">
			<UserAvatar class="w-[110px] h-[110px]" :showAdmin="user?.role === 1" />
			<div class="flex flex-wrap">
				<div
					v-for="info in userInfo"
					:key="info.value"
					class="w-1/2 flex flex-col py-[10px] gap-y-[10px] gap-x-[20px]"
				>
					<span class="text-[16px] font-bold">{{ info.title }}</span>
					<span class="text-[14px]">{{ info.value }}</span>
				</div>
			</div>
		</div>

		<div v-if="showButtons" class="flex items-center justify-between">
			<div
				v-if="showSetAsAdmin && organizationCreator !== user?._id"
				@click="setRole(1)"
				class="h-[30px] cursor-pointer bg-green-300 flex items-center justify-center px-[5px] py-[3px] rounded-[6px]"
			>
				Сделать администратором
			</div>
			<div
				v-if="showRemoveRole && organizationCreator !== user?._id"
				@click="setRole(0)"
				class="h-[30px] cursor-pointer bg-slate-300 flex items-center justify-center px-[5px] py-[3px] rounded-[6px]"
			>
				Убрать роль
			</div>
			<div
				v-if="organizationCreator !== user?._id"
				@click="deleteUser"
				class="h-[30px] cursor-pointer bg-red-300 flex items-center justify-center px-[5px] py-[3px] rounded-[6px]"
			>
				Удалить
			</div>
		</div>
	</ModalBox>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';
import ModalBox from '@/components/modalboxes/ModalBox.vue';
import { useUserStore } from '@/store/userStore';
import { formatDate } from '@/utils/functions';
import { getRoleTitle } from '@/utils/userRoles';
import { mapStores } from 'pinia';
export default {
	components: {
		ModalBox,
		UserAvatar,
	},
	props: {
		user: {
			type: Object,
			default: null,
		},
	},
	emits: ['close', 'deleteUser', 'setRole'],
	methods: {
		closeModal() {
			this.$emit('close');
		},
		deleteUser() {
			this.$emit('deleteUser', this.user._id);
			this.closeModal();
		},
		setRole(role) {
			this.$emit('setRole', this.user._id, role);
			this.closeModal();
		},
	},
	computed: {
		...mapStores(useUserStore),
		currentUser() {
			return this.userStore.currentUser;
		},
		organizationCreator() {
			return this.userStore.organizationCreator;
		},
		userInfo() {
			const items = [
				{
					title: 'Имя',
					value: this.user.name,
				},
				{
					title: 'Email',
					value: this.user.email,
				},
				{
					title: 'В организации с',
					value: formatDate(this.user.createdAt),
				},
				{
					title: 'Роль',
					value: getRoleTitle(this.user.role),
				},
			];

			return items;
		},
		showButtons() {
			return (
				this.currentUser?.role === 1 && this.currentUser?._id !== this.user._id
			);
		},
		showSetAsAdmin() {
			return this.user?.role !== 1;
		},
		showRemoveRole() {
			return this.user?.role === 1;
		},
	},
};
</script>
