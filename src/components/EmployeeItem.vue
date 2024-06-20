<template>
	<div
		@click="showEmployeeProperties"
		class="flex gap-x-[10px] cursor-pointer items-center w-full border-[0.5px] border-solid border-gray-600 rounded-[8px] py-[10px]"
	>
		<UserAvatar
			:showAdmin="user?.role === 1"
			class="ml-[10px] w-[24px] h-[24px]"
		/>

		<div class="flex flex-col">
			<span class="text-[14px] leading-[17px] font-bold">
				{{ user.name }} {{ showYou }}
			</span>
			<span class="text-[14px] leading-[17px] font-bold text-gray-500">
				{{ user.email }}
			</span>
		</div>
	</div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';
export default {
	components: {
		UserAvatar,
	},
	props: {
		user: {
			type: Object,
			default: () => ({}),
		},
	},
	emits: ['showEmployeeProperties'],
	computed: {
		...mapStores(useUserStore),
		currentUser() {
			return this.userStore.currentUser;
		},
		showYou() {
			if (this.user?._id === this.currentUser?._id) {
				return '(Это вы)';
			}

			return '';
		},
	},
	methods: {
		showEmployeeProperties() {
			this.$emit('showEmployeeProperties', this.user);
		},
	},
};
</script>
