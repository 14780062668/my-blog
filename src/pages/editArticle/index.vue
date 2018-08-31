<template>
	<div>
		<search />
		<markdown />
	</div>
</template>
<script>
import Search from '../component/Search.vue';
import Markdown from './component/Markdown.vue';
export default {
	components: {
		Search,
		Markdown
	},
	data() {
		return {
		};
	}
};
</script>
