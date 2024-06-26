export const TASK_SERVICES = [
	{ id: 1, title: 'Настройка рекламы ВК' },
	{ id: 2, title: 'Настройка рекламы Яндекс Директ' },
	{ id: 3, title: 'Настройка рекламы Инстаграм' },
	{ id: 4, title: 'Продвижение в Телеграм' },
	{ id: 5, title: 'Маркетинговое ведение' },
	{ id: 6, title: 'Оформление сообщества/страницы' },
	{ id: 7, title: 'Продвижение на Авито' },
	{ id: 8, title: 'Комплексное ведение бизнеса' },
	{ id: 9, title: 'Финансовый аудит' },
	{ id: 10, title: 'Разработка маркетинговой стратегии' },
	{ id: 11, title: 'Разработка и внедрение CRM-систем' },
	{ id: 12, title: 'Подбор и обучение персонала' },
	{ id: 13, title: 'Управление корпоративной культурой' },
	{ id: 14, title: 'Оценка стоимости бизнеса' },
	{ id: 15, title: 'Планирование и управление бюджетом' },
	{ id: 16, title: 'Оптимизация затрат' },
	{ id: 17, title: 'Тренинги по продажам' },
	{ id: 18, title: 'Исследование и анализ конкурентного окружения' },
	{ id: 19, title: 'Консалтинг по вопросам выхода на новые рынки' },
	{ id: 20, title: 'Разработка продуктов и услуг' },
	{ id: 21, title: 'Бизнес-коучинг и менторство' },
	{ id: 22, title: 'Реализация программ лояльности' },
];

export function formatTasksArray(tasks) {
	const formattedTasksArray = [];

	for (let i = 0; i < tasks.length; i++) {
		formattedTasksArray.push(
			TASK_SERVICES.find((service) => service.id === tasks[i])
		);
	}

	return formattedTasksArray;
}
