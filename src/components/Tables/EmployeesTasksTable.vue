<template>
	<div class="w-full h-full mx-auto p-6">
		<table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
			<thead class="bg-gray-100">
				<tr>
					<th class="border-b border-gray-200 px-4 py-2 text-left">Выбор</th>
					<th class="border-b border-gray-200 px-4 py-2 text-left">
						Название организации
					</th>
					<th class="border-b border-gray-200 px-4 py-2 text-left">Задача</th>
					<th class="border-b border-gray-200 px-4 py-2 text-left">
						Ответственный
					</th>
					<th class="border-b border-gray-200 px-4 py-2 text-left">
						Дата создания задачи
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in tasks"
					:key="index"
					class="even:bg-gray-50 hover:bg-gray-100 py-[10px]"
				>
					<td class="border-b border-gray-200 px-4 py-2">
						<div class="flex w-full justify-start items-center">
							<StatusPopup />
						</div>
					</td>
					<td class="border-b border-gray-200 px-4 py-2">
						{{ item.organization }}
					</td>
					<td class="border-b border-gray-200 px-4 py-2">{{ item.task }}</td>
					<td class="border-b border-gray-200 px-4 py-2">
						{{ item.responsible }}
					</td>
					<td class="border-b border-gray-200 px-4 py-2">{{ item.date }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import StatusPopup from '@/components/StatusPopup.vue';

export default {
	components: {
		StatusPopup,
	},
	data() {
		return {
			tasks: [
				{
					selected: false,
					organization: 'Организация 1sdflksfjslkfsdjlfksdjflskjf',
					task: 'Задача 1',
					responsible: 'Иван Иванов',
					date: '2023-06-01',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				{
					selected: false,
					organization: 'Организация 2',
					task: 'Задача 2',
					responsible: 'Петр Петров',
					date: '2023-06-02',
				},
				// Добавьте здесь больше задач по необходимости
			],
		};
	},
};
</script>
