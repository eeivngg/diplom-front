const allStatus = {
	noStatus: 0,
	inWork: 1,
	rejected: 2,
	completed: 3,
};

export default allStatus;

export function getStatusTitle(statusId) {
	switch (statusId) {
		case allStatus.completed:
			return 'Завершена';
		case allStatus.rejected:
			return 'Отклонена';
		case allStatus.inWork:
			return 'В работе';
		case allStatus.noStatus:
			return 'Новая заявка';
	}
}
