<template>
	<div class="flex w-full items-center">
		<span class="text-[20px] font-bold leading-[18px]">{{ title }}</span>
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
};
</script>
