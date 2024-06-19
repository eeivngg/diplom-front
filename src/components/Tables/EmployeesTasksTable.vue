<template>
	<div class="container mx-auto px-4 py-8">
		<table class="min-w-full bg-white">
			<thead>
				<tr>
					<th
						class="w-1/6 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
					>
						Статус
					</th>
					<th
						class="w-1/4 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
					>
						Организация
					</th>
					<th
						class="w-1/4 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
					>
						Ответственный
					</th>
					<th
						class="w-1/4 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
					>
						Задачи
					</th>
					<th
						class="w-1/4 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
					>
						Дата создания
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(application, index) in formattedApplications"
					:key="index"
					:class="{ 'bg-gray-100': index % 2 === 0 }"
				>
					<td
						class="w-1/4 px-4 py-4 border-b border-gray-300 flex items-center justify-center"
					>
						<StatusPopup />
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ application.title }}
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ application.responsibleUserId }}
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						<div class="flex flex-col gap-y-[30px]">
							<span v-for="task in application.tasks" :key="task">
								{{ task.title }}
							</span>
						</div>
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ application.createdAt }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import StatusPopup from '@/components/StatusPopup.vue';
import { formatTasksArray } from '@/utils/servicesTypes';

export default {
	components: {
		StatusPopup,
	},
	props: {
		applications: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		formattedApplications() {
			const formattedTasks = [];

			for (let i = 0; i < this.applications.length; i++) {
				const data = {
					...this.applications[i],
					tasks: formatTasksArray(this.applications[i].tasks),
				};

				formattedTasks.push(data);
			}

			return formattedTasks;
		},
	},
};
</script>
