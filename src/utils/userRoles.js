export const USER_ROLES = {
	admin: 1,
	employee: 0,
};

export function getRoleTitle(roleId) {
	if (USER_ROLES.admin === roleId) {
		return 'Администратор';
	}

	return 'Сотрудник';
}
