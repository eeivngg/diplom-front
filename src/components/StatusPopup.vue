<template>
	<Popper class="!m-0 !border-0" :arrow="true" placement="right">
		<div
			class="!h-[20px] cursor-pointer flex flex-none items-center justify-center bg-white !w-[20px] border-solid border-[#111012] border-[1px] rounded-[6px]"
		>
			<StatusIcon v-if="!showNoStatus" :status="localStatus" />
		</div>
		<template #content="{ close }">
			<div class="flex flex-col gap-y-[5px]">
				<div
					@click="selectStatus(item.status, close)"
					v-for="item in availableStatuses"
					:key="item.status"
					class="flex items-center gap-x-[8px] py-[5px] px-[8px] hover:bg-gray-100 rounded-[8px] cursor-pointer"
				>
					<div
						class="!h-[20px] cursor-pointer flex flex-none items-center justify-center bg-white !w-[20px] border-solid border-[#111012] border-[1px] rounded-[6px]"
					>
						<StatusIcon :status="item.status" />
					</div>

					<span class="text-[14px] leading-[17px] select-none">
						{{ item.name }}
					</span>
				</div>
			</div>
		</template>
	</Popper>
</template>

<script>
import Popper from 'vue3-popper';
import StatusIcon from '@/components/StatusIcon.vue';
import allStatus from '@/utils/taskStatus';

export default {
	components: {
		Popper,
		StatusIcon,
	},
	props: {
		currentStatus: {
			type: Number,
			default: 0,
		},
		applicationId: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			localStatus: 0,
		};
	},
	emits: ['selectStatus'],
	mounted() {
		this.localStatus = this.currentStatus;
	},
	computed: {
		showNoStatus() {
			return this.localStatus === allStatus.noStatus;
		},
		availableStatuses() {
			const statusWithLabel = [
				{
					name: 'Без статуса',
					status: allStatus.noStatus,
				},
				{
					name: 'В работе',
					status: allStatus.inWork,
				},
				{
					name: 'Выполнено',
					status: allStatus.completed,
				},
				{
					name: 'Отклонено',
					status: allStatus.rejected,
				},
			];

			return statusWithLabel.filter((item) => item.status !== this.localStatus);
		},
	},
	methods: {
		selectStatus(status, closePopper) {
			this.localStatus = status;
			closePopper();
			this.$emit('selectStatus', {
				applicationId: this.applicationId,
				status: this.localStatus,
			});
		},
	},
};
</script>

<style scoped></style>
