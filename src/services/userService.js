import axios from 'axios';

export async function registerWithoutCode(data) {
	try {
		const response = await axios.post(
			'http://localhost:3000/register-with-organization',
			data
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function authWithHash(data) {
	try {
		const response = await axios.post('http://localhost:3000/hash-auth', data);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getInviteCode(organizationId) {
	try {
		const response = await axios.get('http://localhost:3000/get-invite-code', {
			params: {
				organizationId: organizationId,
			},
		});

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function registerWithCode(data) {
	try {
		const response = await axios.post(
			'http://localhost:3000/register-with-invite',
			data
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function login(data) {
	try {
		const response = await axios.post('http://localhost:3000/login', data);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getUsersInOrganization(organizationId) {
	try {
		const response = await axios.get(
			'http://localhost:3000/users-in-organization',
			{
				params: {
					organizationId: organizationId,
				},
			}
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function removeUser(userId) {
	try {
		const response = await axios.post('http://localhost:3000/delete-user', {
			id: userId,
		});

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function updateUser(data) {
	try {
		const response = await axios.patch(
			'http://localhost:3000/update-user',
			data
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getOrganizationCreatorId(organizationId) {
	try {
		const response = await axios.get(
			'http://localhost:3000/organization-creator-id',
			{
				params: {
					organizationId: organizationId,
				},
			}
		);

		console.log('response', response);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function updatePassword() {}

export async function updateName() {}

export async function updateEmail() {}
