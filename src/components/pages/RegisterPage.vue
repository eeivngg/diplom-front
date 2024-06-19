<template>
	<div class="w-full flex h-screen justify-center items-center">
		<div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
			<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
				Регистрация
			</h2>
			<div class="flex flex-col gap-y-[30px]">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email
					</label>

					<input
						v-model="userEmail"
						type="email"
						id="email"
						autocomplete="email"
						required
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Ваш email"
					/>
				</div>
				<div>
					<label for="nickname" class="block text-sm font-medium text-gray-700">
						Имя в системе
					</label>

					<input
						v-model="userName"
						type="text"
						id="nickname"
						autocomplete="nickname"
						required
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Имя в системе"
					/>
				</div>
				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">
						Пароль
					</label>
					<input
						v-model="userPassword"
						type="password"
						id="password"
						autocomplete="current-password"
						required
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Придумайте пароль"
					/>
				</div>
				<div>
					<label for="code" class="block text-sm font-medium text-gray-700">
						Пригласительный код организации
					</label>
					<input
						v-model="inviteCode"
						type="text"
						id="code"
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Пригласительный код организации (если есть)"
					/>
				</div>
				<span v-if="errorMessage" class="text-[14px] text-red-500">
					{{ errorMessage }}
				</span>
				<button
					@click="register"
					class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 focus:outline-none focus:ring-0"
				>
					Зарегистрироваться
				</button>
				<router-link to="/login">
					<button
						class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 focus:outline-none focus:ring-0"
					>
						Войти
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { useUserStore } from '@/store/userStore';
import { mapStores } from 'pinia';

export default {
	computed: {
		...mapStores(useUserStore),
	},
	data() {
		return {
			userEmail: '',
			userPassword: '',
			userName: '',
			inviteCode: '',
			errorMessage: '',
		};
	},
	methods: {
		async register() {
			if (!this.inviteCode) {
				const data = {
					name: this.userName,
					email: this.userEmail,
					password: this.userPassword,
				};

				try {
					await this.userStore.registerWithoutCode(data);
					this.$router.push('/main');
				} catch (error) {
					if (error?.response?.data?.message === 'user already exists') {
						this.errorMessage = 'Пользователь с таким email уже существует';
					} else {
						this.errorMessage = 'Произошла непредвиденная ошибка';
					}
				}
			} else {
				const data = {
					name: this.userName,
					email: this.userEmail,
					password: this.userPassword,
					inviteCode: this.inviteCode,
				};

				try {
					await this.userStore.registerWithCode(data);
					this.$router.push('/main');
				} catch (error) {
					console.log('error is', error);
					if (error?.response?.data?.message === 'invite code not found') {
						this.errorMessage = 'Пригласительный код нейдействителен';
					} else {
						this.errorMessage = 'Произошла непредвиденная ошибка';
					}
				}
			}
		},
	},
};
</script>
