<template>
	<div class="container mx-auto px-4 py-8">
		<table class="min-w-full bg-white">
			<thead>
				<tr>
					<th
						class="w-1/4 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
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
					v-for="(row, index) in rows"
					:key="index"
					:class="{ 'bg-gray-100': index % 2 === 0 }"
				>
					<td class="px-4 py-4 border-b border-gray-300">{{ row.status }}</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ row.organization }}
					</td>
					<td class="px-4 py-4 border-b border-gray-300">{{ row.tasks }}</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ row.createdAt }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rows: [
				{
					status: 'Выполнено',
					organization: 'Организация 1',
					tasks: 'Задача 1, Задача 2',
					createdAt: '2023-01-01',
				},
				{
					status: 'В процессе',
					organization: 'Организация 2',
					tasks: 'Задача 3',
					createdAt: '2023-01-02',
				},
				{
					status: 'Не начато',
					organization: 'Организация 3',
					tasks: 'Задача 4, Задача 5',
					createdAt: '2023-01-03',
				},
				{
					status: 'Выполнено',
					organization: 'Организация 4',
					tasks: 'Задача 6',
					createdAt: '2023-01-04',
				},
				// добавьте больше строк по необходимости
			],
		};
	},
};
</script>

<style scoped>
/* ваши стили */
</style>
