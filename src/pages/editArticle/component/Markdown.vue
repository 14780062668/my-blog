<template>
	<div class="editor_box">
		<mavon-editor id="editor"
			ref=md
			@save="save" />
		<save-article ref="saveArticle"
			:content="content" />
	</div>
</template>
<script>
import {mavonEditor} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import SaveArticle from './SaveArticle.vue';
export default {
	components: {
		mavonEditor,
		SaveArticle
	},
	data() {
		return {
			content: ''
		};
	},
	methods: {
		save(val) {
			if(val){
				this.content = val;
				console.log('content====', this.content);
				this.$refs.saveArticle.dialogVisible = true;
			}else{
				this.$store.commit('message', {
					type: 'warning',
					message: '文章不能为空'
				});
			}
		}
	}
};
</script>
<style lang="stylus" scoped>
#editor
	height 600px
.editor_box
	overflow hidden
</style>
