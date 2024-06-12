<template>
	<div>
		<div
			:class="[
				'fixed px-[20px] inset-y-0 transform transition-all duration-150 ease-in-out',
				{
					'w-[70px]': !isOpen,
					'w-[250px]': isOpen,
				},
			]"
			class="w-64 bg-[#ffffff] text-white shadow-lg"
		>
			<div class="flex justify-around items-center mt-[20px] py-[10px]">
				<span v-if="isOpen" class="text-[18px] font-bold text-[#1B1B1CCC]">
					Рекламное агенство
				</span>

				<svg
					v-if="!isOpen"
					@click="toggleSidebar"
					class="cursor-pointer top-4 right-4 text-xl flex-none"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 6H20M4 12H20M4 18H20"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<svg
					v-if="isOpen"
					@click="toggleSidebar"
					class="cursor-pointer top-4 right-4 text-xl flex-none"
					fill="#000000"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"
					/>
				</svg>
			</div>

			<div class="flex flex-col gap-y-[5px] mt-[20px] h-[87%]">
				<AsideMenuItem
					v-for="item in menuItems"
					:hideText="isOpen"
					:key="item"
					:link="item.link"
					:icon="item.icon"
					:title="item.title"
				/>
			</div>

			<AsideMenuItem :hideText="isOpen" link="/account" title="Борис Борисов">
				<template #custom-icon>
					<img
						src="https://static.kinoafisha.info/k/articles/1200/upload/articles/754987571881.jpg.webp"
						class="flex-none w-[24px] h-[24px] rounded-[6px]"
					/>
				</template>
			</AsideMenuItem>
		</div>
	</div>
</template>

<script>
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue';

export default {
	components: {
		AsideMenuItem,
	},
	data() {
		return {
			isOpen: true,
			menuItems: [
				{
					link: '/main',
					onlyForAdmin: false,
					title: 'Мои заявки',
					icon: 'main',
				},
				{
					link: '/incoming-applications',
					onlyForAdmin: true,
					title: 'Входящие заявки',
					icon: 'all-apps',
				},
				{
					link: '/employees',
					onlyForAdmin: true,
					title: 'Сотрудники',
					icon: 'employees',
				},
				{
					link: '/employees-applications',
					onlyForAdmin: true,
					title: 'Заявки сотрудников',
					icon: 'employees-apps',
				},
			],
		};
	},
	methods: {
		toggleSidebar() {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>
