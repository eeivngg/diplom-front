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
						class="w-1/6 px-4 py-4 border-b-2 border-gray-300 bg-gray-100 text-left"
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
					@click="openProperties(application)"
					v-for="(application, index) in formattedApplications"
					:key="index"
					:class="{ 'bg-gray-100': index % 2 === 0 }"
				>
					<td
						class="w-1/4 px-4 py-4 border-b border-gray-300 flex items-center justify-center"
					>
						<StatusPopup
							@click.stop
							class="!ml-[30px]"
							:key="application._id"
							@selectStatus="onSelectNewStatus"
							:currentStatus="application.status"
							:applicationId="application._id"
						/>
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ application.title }}
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						<SetResponsibleButton
							@click.stop
							@setResponsible="onSetResponsible"
							:applicationId="application._id"
							:responsibleUser="application.responsibleUser"
						/>
					</td>
					<td class="px-4 py-4 border-b border-gray-300">
						{{ application.tasks }}
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
import { useUserStore } from '@/store/userStore';
import { formatDate } from '@/utils/functions';
import { mapStores } from 'pinia';
import SetResponsibleButton from '@/components/SetResponsibleButton.vue';
import { useApplicationsStore } from '@/store/applicationsStore';

export default {
	components: {
		StatusPopup,
		SetResponsibleButton,
	},
	props: {
		applications: {
			type: Array,
			default: () => [],
		},
	},
	emits: ['openProperties'],
	computed: {
		...mapStores(useUserStore, useApplicationsStore),
		currentUser() {
			return this.userStore.currentUser;
		},
		allUsers() {
			return this.userStore.allUsers;
		},
		formattedApplications() {
			const formattedTasks = [];

			for (let i = 0; i < this.applications.length; i++) {
				const data = {
					...this.applications[i],
					tasks: this.applications[i].tasks.length,
					createdAt: formatDate(this.applications[i].createdAt),
					responsibleUser: this.allUsers.find(
						(user) => user._id === this.applications[i].responsibleUser
					),
				};

				formattedTasks.push(data);
			}

			return formattedTasks;
		},
	},
	methods: {
		async onSelectNewStatus(data) {
			const application = this.applications.find(
				(application) => application._id === data.applicationId
			);

			let responsibleUserId = application.responsibleUser;

			if (!responsibleUserId) {
				responsibleUserId = this.currentUser._id;
			}

			await this.applicationsStore.updateApplication(
				data.status,
				responsibleUserId,
				data.applicationId
			);
		},
		async onSetResponsible(user, applicationId) {
			const application = this.applications.find(
				(application) => application._id === applicationId
			);

			await this.applicationsStore.updateApplication(
				application.status,
				user._id,
				applicationId
			);

			this.applicationsStore.removeApplicationLocally(applicationId);
		},
		openProperties(application) {
			this.$emit('openProperties', application);
		},
	},
};
</script>
