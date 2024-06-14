<template>
	<svg
		v-if="showRejectedStatus"
		fill="none"
		viewBox="0 0 8 8"
		width="8"
		height="8"
		class="flex-none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			class=""
			fill="currentColor"
			d="M7.9 6.4L5.7 4.1L7.9 1.9C8.3 1.5 8.3 0.8 7.9 0.3C7.7 0.1 7.5 0 7.2 0C6.9 0 6.6 0.1 6.4 0.3L4.1 2.6L1.9 0.3C1.7 0.1 1.4 0 1.1 0C0.8 0 0.5 0.1 0.3 0.3C-0.1 0.7 -0.1 1.4 0.3 1.9L2.5 4.1L0.3 6.4C0.1 6.6 0 6.9 0 7.2C0 7.5 0.1 7.8 0.3 8C0.5 8.2 0.8 8.3 1.1 8.3C1.4 8.3 1.7 8.2 1.9 8L4.1 5.8L6.3 8C6.5 8.2 6.8 8.3 7.1 8.3C7.4 8.3 7.7 8.2 7.9 8C8.1 7.8 8.2 7.5 8.2 7.2C8.3 6.9 8.2 6.6 7.9 6.4Z"
		></path>
	</svg>

	<svg
		v-if="showInWorkStatus"
		fill="none"
		viewBox="0 0 8 10"
		width="8"
		height="10"
		class="flex-none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			class=""
			fill="green"
			d="M7.58614 4.30655C8.13796 4.62461 8.13795 5.37539 7.58614 5.69344L1.32645 9.87776C0.746696 10.2119 0 9.82156 0 9.18432L0 0.815681C0 0.178442 0.746696 -0.211918 1.32645 0.122236L7.58614 4.30655Z"
		></path>
	</svg>

	<svg
		v-if="showCompletedStatus"
		fill="none"
		viewBox="0 0 12 9"
		width="12"
		height="9"
		class="flex-none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			class=""
			fill="currentColor"
			d="M11.6471 2.12003L5.30532 8.63607C4.83473 9.12131 4.07283 9.12131 3.60224 8.63607L0.352941 5.26252C-0.117647 4.77728 -0.117647 3.99166 0.352941 3.50642C0.823529 3.02118 1.58543 3.02118 2.05602 3.50642L4.45378 6.00193L9.94398 0.363928C10.4146 -0.121309 11.1765 -0.121309 11.6471 0.363928C12.1176 0.849166 12.1176 1.63479 11.6471 2.12003Z"
		></path>
	</svg>
</template>

<script>
import allStatus from '@/utils/taskStatus';

export default {
	props: {
		status: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		showRejectedStatus() {
			return this.status === allStatus.rejected;
		},
		showInWorkStatus() {
			return this.status === allStatus.inWork;
		},
		showCompletedStatus() {
			return this.status === allStatus.completed;
		},
	},
};
</script>
