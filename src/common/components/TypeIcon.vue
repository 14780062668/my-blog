<template>
	<svg class="icon" aria-hidden="true">
		<use v-if="tagId.includes(1)" xlink:href="#icon-JS"></use>
		<use v-else-if="tagId.includes(2)" xlink:href="#icon-tubiaozhizuomoban"></use>
		<use v-else-if="tagId.includes(3)" xlink:href="#icon-CSS"></use>
		<use v-else-if="tagId.includes(4)" xlink:href="#icon-nodejs-copy"></use>
		<use v-else-if="tagId.includes(5)" xlink:href="#icon-shenghuo"></use>
		<use v-else xlink:href="#icon-JS"></use>
	</svg>
</template>
<script>
export default {
	props: ['tagId']
};
</script>
