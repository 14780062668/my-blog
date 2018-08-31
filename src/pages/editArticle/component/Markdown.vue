<template>
	<div class="editor_box">
		<mavon-editor id="editor"
			ref=md
			:source="content"
			@save="save" />
		<el-button type="primary" class="save fr">保 存</el-button>
	</div>
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
			content: 'wws',
			value: 'ee'
		};
	},
	methods: {
		save(val) {
			console.log(val);
		}
	}
};
</script>
<style lang="stylus" scoped>
#editor
	height 600px
.editor_box
	overflow hidden
	.save
		margin-top 20px
</style>
