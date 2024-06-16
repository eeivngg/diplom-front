<template>
	<div class="flex w-full flex-col px-[50px] py-[25px]">
		<NavBar title="Аккаунт" />
		<div class="flex justify-start gap-x-[50px] mt-[25px]">
			<div class="flex gap-y-[15px] flex-col items-center">
				<img
					class="h-[250px] w-[250px] rounded-[8px] object-cover bg-center"
					src="https://static.kinoafisha.info/k/articles/1200/upload/articles/754987571881.jpg.webp"
				/>

				<button
					class="bg-gray-100 w-full text-[#1B1B1CCC] text-[14px] h-[30px] rounded-[6px]"
				>
					Изменить аватар
				</button>
			</div>

			<div class="flex gap-y-[50px] flex-col">
				<div
					v-for="item in accountItems"
					:key="item"
					class="flex flex-col gap-y-[10px]"
				>
					<div class="text-[16px] font-bold">{{ item.title }}</div>
					<div class="text-[14px]">{{ item.value }}</div>
					<div
						v-if="item.changeButtonText"
						class="text-[14px] text-gray-400 cursor-pointer"
					>
						{{ item.changeButtonText }}
					</div>
				</div>

				<button
					class="bg-gray-100 w-full text-[#1B1B1CCC] text-[14px] h-[50px] rounded-[6px]"
				>
					Выйти из аккаунта
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import allInputTypes from '@/utils/accountChangeTypes.js';

export default {
	components: {
		NavBar,
	},
	computed: {
		accountItems() {
			const items = [
				{
					title: 'Тип аккаунта',
					value: 'Администратор',
					type: allInputTypes.textOnly,
					changeButtonText: '',
				},
				{
					title: 'Имя',
					value: 'Борис Бритва',
					type: allInputTypes.nameInput,
					changeButtonText: 'Изменить имя',
				},
				{
					title: 'Email',
					value: 'undefined@mail.ru',
					type: allInputTypes.emailInput,
					changeButtonText: 'Изменить email',
				},
				{
					title: 'Номер телефона',
					value: '880553535',
					type: allInputTypes.phoneInput,
					changeButtonText: 'Изменить номер телефона',
				},
			];
			return items;
		},
	},
};
</script>
