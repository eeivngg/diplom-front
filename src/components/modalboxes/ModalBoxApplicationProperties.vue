<template>
	<ModalBox @close="closeModal" title="Свойства заявки">
		<div class="w-full flex flex-col">
			<div class="flex w-full flex-wrap gap-y-[20px] mt-[20px] justify-between">
				<div
					v-for="item in applicationProperties"
					:key="item"
					class="flex w-1/2 flex-col gap-y-[10px]"
				>
					<span class="text-[16px] font-bold">{{ item.title }}</span>
					<span class="text-[14px]">{{ item.value }}</span>
				</div>
			</div>

			<div class="flex flex-col mt-[40px]">
				<span class="text-[16px] font-bold"> Задачи </span>
				<div class="flex flex-col gap-y-[10px] mt-[10px]">
					<span
						class="text-[14px]"
						v-for="task in applicationTasks"
						:key="task"
					>
						{{ getTaskTitle(task) }}
					</span>
				</div>
			</div>

			<div class="w-full flex mt-[20px]" v-if="canDeleteApplication">
				<div
					@click="deleteApplication"
					class="h-[30px] rounded-[8px] bg-red-300 flex items-center px-[10px] py-[5px] cursor-pointer"
				>
					Удалить заявку
				</div>
			</div>
		</div>
	</ModalBox>
</template>

<script>
import ModalBox from '@/components/modalboxes/ModalBox.vue';
import { TASK_SERVICES } from '@/utils/servicesTypes';
import { getStatusTitle } from '@/utils/taskStatus';

export default {
	props: {
		application: {
			type: Object,
			default: () => ({}),
		},
		canDeleteApplication: {
			type: Boolean,
			default: true,
		},
	},
	components: {
		ModalBox,
	},
	emits: ['closeModal', 'deleteApplication'],
	computed: {
		applicationTasks() {
			return this.application.tasks;
		},
		applicationProperties() {
			const items = [
				{
					title: 'Контакты',
					value: this.application.title,
				},
				{
					title: 'Исполнитель',
					value: this.application.responsibleUser?.email,
				},
				{
					title: 'Статус',
					value: getStatusTitle(this.application.status),
				},
				{
					title: 'Заявка создана',
					value: this.application.createdAt,
				},
			];

			return items;
		},
	},
	methods: {
		closeModal() {
			this.$emit('closeModal');
		},
		getTaskTitle(taskId) {
			const service = TASK_SERVICES.find((item) => item.id === taskId);
			return service.title;
		},
		deleteApplication() {
			this.$emit('deleteApplication', this.application);
		},
	},
};
</script>
