<template>
	<div class="flex flex-col w-full">
		<!-- Навигационная панель -->
		<nav class="bg-gray-800 p-4">
			<div class="container mx-auto flex justify-between items-center">
				<div class="text-white text-2xl">Рекламное Агентство</div>
				<div class="space-x-4">
					<router-link to="/login">
						<button class="bg-blue-500 text-white px-4 py-2 rounded">
							Войти
						</button>
					</router-link>
					<router-link to="/register">
						<button class="bg-green-500 text-white px-4 py-2 rounded">
							Регистрация
						</button>
					</router-link>
				</div>
			</div>
		</nav>

		<!-- Секция о компании -->
		<section
			class="bg-cover bg-center h-screen text-white flex items-center justify-center"
			style="
				background-image: url('https://www.business.ru/images/15.jpg');
				background-attachment: fixed;
			"
		>
			<div class="bg-gray-800 bg-opacity-75 p-8 rounded">
				<h1 class="text-4xl font-bold mb-4">
					Добро пожаловать в наше рекламное агентство
				</h1>
				<p class="text-lg">
					Мы занимаемся продвижением вашего бизнеса с помощью современных
					рекламных технологий и стратегий.
				</p>
			</div>
		</section>

		<!-- Секция о том, зачем нужно продвижение -->
		<section class="bg-gray-100 py-16">
			<div class="container mx-auto text-center">
				<h2 class="text-3xl font-bold mb-8">Почему важно продвижение?</h2>
				<p class="text-lg mb-4">
					Продвижение помогает бизнесам находить своих клиентов и увеличивать
					продажи. Наши специалисты используют проверенные методы и новейшие
					технологии для достижения лучших результатов.
				</p>
				<p class="text-lg">
					С помощью правильного продвижения вы можете выделиться среди
					конкурентов, улучшить узнаваемость бренда и построить лояльную
					аудиторию.
				</p>
			</div>
		</section>

		<!-- Секция о том, кому нужно продвижение -->
		<section
			class="bg-cover bg-center py-16 text-white"
			style="
				background-image: url('https://burobiz-a.akamaihd.net/uploads/images/104483/large_3296598.jpg');
				background-attachment: fixed;
			"
		>
			<div
				class="bg-gray-800 bg-opacity-75 p-8 rounded container mx-auto text-center"
			>
				<h2 class="text-3xl font-bold mb-8">Кому нужно продвижение?</h2>
				<p class="text-lg mb-4">
					Продвижение необходимо всем, кто хочет развивать свой бизнес и
					достигать новых высот. Это актуально для:
				</p>
				<ul class="list-disc list-inside">
					<li>Малого и среднего бизнеса</li>
					<li>Крупных компаний</li>
					<li>Стартапов</li>
					<li>Онлайн-магазинов</li>
					<li>Индивидуальных предпринимателей</li>
				</ul>
			</div>
		</section>

		<!-- Секция с услугами -->
		<section
			class="bg-cover bg-center py-16 text-white"
			style="
				background-image: url('https://burobiz-a.akamaihd.net/uploads/images/153212/small_stablediffusion_d5804f78-879a-45fd-8db4-bbe2f8306bd9_1703682347.jpg');
				background-attachment: fixed;
			"
		>
			<div class="bg-gray-800 bg-opacity-75 p-8 rounded container mx-auto">
				<h2 class="text-3xl font-bold mb-8 text-center">Наши услуги</h2>
				<form @submit.prevent="submitForm">
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<div
							v-for="(service, index) in services"
							:key="index"
							class="flex items-center"
						>
							<input
								type="checkbox"
								:id="'service' + index"
								v-model="selectedServices"
								:value="service"
								class="mr-2"
							/>
							<label :for="'service' + index" class="text-lg">{{
								service
							}}</label>
						</div>
					</div>

					<input
						class="w-full h-[50px] px-[10px] py-[5px] rounded-[8px] text-black mt-[10px]"
						v-model="contact"
						maxlength="100"
						type="text"
						placeholder="Контактная информация (телефон, email или соцсети)"
					/>

					<div class="text-center mt-8">
						<button
							type="submit"
							class="bg-blue-500 text-white px-4 py-2 rounded"
						>
							Отправить
						</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
import { useApplicationsStore } from '@/store/applicationsStore';
import { TASK_SERVICES } from '@/utils/servicesTypes';
import { mapStores } from 'pinia';

export default {
	data() {
		return {
			services: [],
			selectedServices: [],
			contact: '',
		};
	},
	computed: {
		...mapStores(useApplicationsStore),
	},
	mounted() {
		this.services = TASK_SERVICES.map((service) => service.title);
	},
	methods: {
		submitForm() {
			const formattedTasks = [];

			for (let i = 0; i < this.selectedServices.length; i++) {
				const service = TASK_SERVICES.find(
					(service) => service.title === this.selectedServices[i]
				);
				formattedTasks.push(service.id);
			}

			this.applicationsStore.createApplication(formattedTasks, this.contact);
		},
	},
};
</script>

<style>
/* Дополнительные стили */
</style>
