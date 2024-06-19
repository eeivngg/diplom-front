<template>
	<div
		@click="closeModal"
		class="fixed inset-0 flex items-center justify-center z-50"
	>
		<div class="fixed inset-0 bg-black opacity-50"></div>
		<div @click.stop class="bg-white rounded-lg shadow-lg p-6 z-10">
			<button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
				&times;
			</button>
			<div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$emit('close');
		},
	},
};
</script>

<style scoped></style>
