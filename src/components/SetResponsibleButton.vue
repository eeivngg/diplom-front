<template>
	<Popper :arrow="true" placement="bottom">
		<div
			v-if="!responsibleUser"
			class="flex px-[10px] cursor-pointer justify-center items-center w-full h-[30px] rounded-[8px] bg-slate-200"
		>
			Поручить задачу
		</div>

		<div
			v-else
			class="flex flex-col items-start justify-center cursor-pointer px-[20px] w-full h-[50px] rounded-[8px] bg-slate-200"
		>
			<span class="text-[16px] font-bold">{{ responsibleUser.name }}</span>
			<span class="text-[14px]">{{ responsibleUser.email }}</span>
		</div>
		<template v-if="usersInOrganization.length" #content="{ close }">
			<div class="flex flex-col max-h-[350px] overflow-y-auto">
				<div
					@click="setResponsible(user, close)"
					v-for="user in usersInOrganization"
					:key="user"
					class="flex items-center gap-x-[10px] cursor-pointer hover:bg-slate-200 px-[10px] py-[2px] rounded-[6px]"
				>
					<UserAvatar class="h-[24px] w-[24px]" :showAdmin="user?.role === 1" />
					<div class="flex flex-col justify-start items-start">
						<span class="text-[16px]">{{ user.name }}</span>
						<span class="text-[14px] text-gray-500">{{ user.email }}</span>
					</div>
				</div>
			</div>
		</template>
	</Popper>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';
import { mapStores } from 'pinia';
import Popper from 'vue3-popper';
import { useUserStore } from '@/store/userStore';

export default {
	components: {
		Popper,
		UserAvatar,
	},
	props: {
		applicationId: {
			type: String,
			default: '',
		},
		responsibleUser: {
			type: Object,
			default: null,
		},
	},
	computed: {
		...mapStores(useUserStore),
		usersInOrganization() {
			return this.userStore.allUsers.filter(
				(user) => user._id !== this.responsibleUser?._id
			);
		},
	},
	emits: ['setResponsible'],
	methods: {
		setResponsible(user, close) {
			this.$emit('setResponsible', user, this.applicationId);
			close();
		},
	},
};
</script>

<style>
:root {
	--popper-theme-background-color: #ffffff;
	--popper-theme-background-color-hover: #ffffff;
	--popper-theme-text-color: #333333;
	--popper-theme-border-width: 1px;
	--popper-theme-border-style: solid;
	--popper-theme-border-color: #eeeeee;
	--popper-theme-border-radius: 6px;
	--popper-theme-padding: 8px;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
