<!-- Loader.vue -->
<template>
	<div
		class="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50"
	>
		<div
			class="loader ease-linear rounded-[8px] border-4 bg-gray-600 border-t-4 border-gray-200 h-12 w-12"
		></div>
	</div>
</template>

<style scoped>
.loader {
	border-top-color: #3498db; /* Цвет верхней полосы лоадера */
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
