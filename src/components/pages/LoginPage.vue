<template>
	<div class="w-full flex h-screen justify-center items-center">
		<div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
			<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
				Авторизация
			</h2>
			<div class="flex flex-col gap-y-[30px]">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email
					</label>

					<input
						type="email"
						v-model="userEmail"
						id="email"
						autocomplete="email"
						required
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						placeholder="Email"
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
						placeholder="Пароль"
					/>
				</div>
				<span v-if="errorMessage" class="text-[14px] text-red-500">
					{{ errorMessage }}
				</span>
				<button
					@click="login"
					class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 focus:outline-none focus:ring-0"
				>
					Войти
				</button>
				<router-link to="/register">
					<button
						class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 focus:outline-none focus:ring-0"
					>
						Регистрация
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
			errorMessage: '',
		};
	},
	methods: {
		async login() {
			const data = {
				email: this.userEmail,
				password: this.userPassword,
			};

			try {
				await this.userStore.login(data);
			} catch (error) {
				if (error?.response?.data?.message === 'user not found') {
					this.errorMessage = 'Неправильный логин или пароль';
				} else {
					this.errorMessage = 'Произошла непредвиденная ошибка';
				}
			}
		},
	},
};
</script>
