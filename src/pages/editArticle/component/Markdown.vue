<template>
	<mavon-editor id="editor" :source="content" />
</template>
<script>
import {mavonEditor} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
	components: {
		mavonEditor
	},
	data() {
		return {
			content: 'wws'
		};
	}
};
</script>
<style lang="stylus" scoped>
#editor
	height 600px
</style>
