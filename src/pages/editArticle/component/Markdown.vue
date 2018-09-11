<template>
	<div class="editor_box">
		<mavon-editor id="editor"
			ref=md
			@imgAdd="imgAdd"
			@imgDel="imgDel"
			v-model="content"
			@save="save" />
		<save-article ref="saveArticle"
			:content="content" />
	</div>
</template>
<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import SaveArticle from './SaveArticle.vue';
export default {
	components: {
		mavonEditor,
		SaveArticle
	},
	data() {
		return {
			content: '',
			vals: 'w'
		};
	},
	methods: {
		save() {
			if(this.content) {
				this.$refs.saveArticle.dialogVisible = true;
			} else {
				this.$store.commit('message', {
					type: 'warning',
					message: '文章不能为空'
				});
			}
		},
		imgAdd(filename, file) {
			// 第一步.将图片上传到服务器.
			let formdata = new FormData();
			formdata.append('file', file, file.name);
			console.log(formdata);
			this.$post('/api/uploadImg', formdata).then(res => {
				if(res.status === '200') {
					// 更改图片内文章上传地址
					this.$refs.editor.$img2Url(filename, res.body.data);
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
			// axios({
			// 	url: "server url",
			// 	method: "post",
			// 	data: formdata,
			// 	headers: { "Content-Type": "multipart/form-data" }
			// }).then(url => {
			// 	// 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
			// 	// $vm.$img2Url 详情见本页末尾
			// 	$vm.$img2Url(pos, url);
			// });
		},
		imgDel() {
			console.log(222);
		}
	}
};
</script>
<style lang="stylus" scoped>
#editor {
	height: 600px;
}

.editor_box {
	overflow: hidden;
}
</style>
