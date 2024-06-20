<template>
	<div
		@click="closeModal"
		class="fixed inset-0 flex items-center justify-center z-50"
	>
		<div class="fixed inset-0 bg-black opacity-50"></div>
		<div @click.stop class="bg-white w-auto rounded-lg shadow-lg p-6 z-10">
			<div class="flex w-full items-center justify-between">
				<div class="text-[16px] font-bold">{{ title }}</div>
				<button
					@click="closeModal"
					class="ml-auto text-gray-500 hover:text-gray-700"
				>
					&times;
				</button>
			</div>

			<div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
	methods: {
		closeModal() {
			this.$emit('close');
		},
	},
};
</script>

<style scoped></style>
