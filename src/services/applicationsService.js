import axios from 'axios';

export async function getMyApplications(userId) {
	try {
		const response = await axios.get('http://localhost:3000/my-applications', {
			params: {
				userId: userId,
			},
		});

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getEmployeesApplications(organizationId) {
	try {
		const response = await axios.get(
			'http://localhost:3000/get-employees-applications',
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

export async function getIncomingApplications(organizationId) {
	try {
		const response = await axios.get(
			'http://localhost:3000/incoming-applications',
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

export async function updateApplication(
	status,
	responsibleUserId,
	applicationId
) {
	try {
		const response = await axios.patch(
			'http://localhost:3000/update-application',
			{
				status: status,
				applicationId: applicationId,
				responsibleUserId: responsibleUserId,
			}
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function removeApplication(applicationId) {
	try {
		const response = await axios.post(
			'http://localhost:3000/remove-application',
			{
				applicationId: applicationId,
			}
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function createApplication(tasks, title) {
	try {
		const response = await axios.post(
			'http://localhost:3000/create-application',
			{
				organizationId: '667228d04ea3c87805b24f40',
				tasks: tasks,
				organizationTitle: title,
			}
		);

		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}
