<template>
	<div class="container mx-auto p-6">
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
						<input
							type="checkbox"
							v-model="item.selected"
							class="form-checkbox h-4 w-4 text-blue-600"
						/>
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
export default {
	data() {
		return {
			tasks: [
				{
					selected: false,
					organization: 'Организация 1',
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
				// Добавьте здесь больше задач по необходимости
			],
		};
	},
};
</script>

<style scoped>
.container {
	max-width: 800px;
}
</style>
