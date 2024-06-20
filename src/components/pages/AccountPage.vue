<template>
	<div v-if="currentUser" class="flex w-full flex-col px-[50px] py-[25px]">
		<NavBar title="Аккаунт" />
		<div class="flex justify-start gap-x-[50px] mt-[25px]">
			<div class="flex gap-y-[15px] flex-col items-center">
				<UserAvatar
					:showAdmin="currentUser.role === 1"
					class="h-[250px] w-[250px]"
				/>
			</div>

			<div class="flex gap-y-[50px] flex-col">
				<div
					v-for="item in accountItems"
					:key="item"
					class="flex flex-col gap-y-[10px]"
				>
					<div class="text-[16px] font-bold">{{ item.title }}</div>
					<div v-if="activeInputType !== item.type" class="text-[14px]">
						{{ item.value }}
					</div>
					<div class="flex flex-col" v-if="activeInputType === item.type">
						<input
							v-model="inputValue"
							type="text"
							maxlength="100"
							class="outline-none border-[1px] border-solid h-[30px] rounded-[6px] px-[5px]"
						/>
						<div class="flex w-full justify-between mt-[10px]">
							<div
								@click="saveValue"
								class="flex bg-green-200 py-[5px] px-[10px] rounded-[6px]"
							>
								Сохранить
							</div>
							<div
								@click="cancelSave"
								class="flex bg-slate-200 py-[5px] px-[10px] rounded-[6px]"
							>
								Отмена
							</div>
						</div>
					</div>

					<div
						@click="showInput(item.type)"
						v-if="item.changeButtonText && activeInputType !== item.type"
						class="text-[14px] text-gray-400 cursor-pointer"
					>
						{{ item.changeButtonText }}
					</div>
				</div>

				<button
					@click="logout"
					class="bg-gray-100 w-full px-[10px] text-[#1B1B1CCC] text-[14px] h-[50px] rounded-[6px]"
				>
					Выйти из аккаунта
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { useUserStore } from '@/store/userStore';
import UserAvatar from '@/components/UserAvatar.vue';
import allInputTypes from '@/utils/accountChangeTypes.js';
import { getRoleTitle } from '@/utils/userRoles';
import { mapStores } from 'pinia';

export default {
	components: {
		NavBar,
		UserAvatar,
	},
	data() {
		return {
			activeInputType: null,
			inputValue: '',
		};
	},
	async mounted() {
		await this.userStore.getOrganizationInviteCode(
			this.currentUser.organizationId
		);
	},
	computed: {
		...mapStores(useUserStore),
		currentUser() {
			return this.userStore.currentUser;
		},
		inviteCode() {
			return this.userStore.organizationInviteCode;
		},
		accountItems() {
			const items = [
				{
					title: 'Тип аккаунта',
					value: getRoleTitle(this.currentUser.role),
					type: allInputTypes.textOnly,
					changeButtonText: '',
				},
				{
					title: 'Имя',
					value: this.currentUser.name,
					type: allInputTypes.nameInput,
					changeButtonText: 'Изменить имя',
				},
				{
					title: 'Email',
					value: this.currentUser.email,
					type: allInputTypes.emailInput,
					changeButtonText: 'Изменить email',
				},
			];

			if (this.currentUser.role) {
				items.push({
					title: 'Пригласительный код',
					value: this.inviteCode,
				});
			}
			return items;
		},
	},
	methods: {
		logout() {
			this.userStore.logout();
			this.$router.push('/login');
		},
		showInput(type) {
			this.activeInputType = type;

			if (this.activeInputType === allInputTypes.emailInput) {
				this.inputValue = this.currentUser.email;
			}

			if (this.activeInputType === allInputTypes.nameInput) {
				this.inputValue = this.currentUser.name;
			}
		},
		async saveValue() {
			let changedProperty;

			if (this.activeInputType === allInputTypes.emailInput) {
				changedProperty = {
					email: this.inputValue,
				};
			}

			if (this.activeInputType === allInputTypes.nameInput) {
				changedProperty = {
					name: this.inputValue,
				};
			}

			const data = {
				...this.currentUser,
				...changedProperty,
			};

			await this.userStore.updateUser(data);

			this.activeInputType = null;
			this.inputValue = null;
		},
		cancelSave() {
			this.activeInputType = null;
			this.inputValue = null;
		},
	},
};
</script>
