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

export async function getCurrentUser() {}

export async function getAllUsers() {}

export async function checkUserExistence() {
	try {
		const response = await axios.get('http://localhost:3000/check-user', {
			params: {
				id: '667090d6187a14ce6e3c913b',
			},
		});

		console.log('response is', response);
	} catch (error) {
		console.log('existence error', error);
	}
}

export async function removeUser() {}

export async function updatePassword() {}

export async function updateName() {}

export async function updateEmail() {}
