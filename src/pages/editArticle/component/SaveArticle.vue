<template>
	<el-dialog
		title="保存文章"
		:visible.sync="dialogVisible"
		width="600px">
		<el-form :model="ruleForm"
			:rules="rules" ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm">
			<el-form-item label="文章名称" prop="title">
				<el-input v-model="ruleForm.title"></el-input>
			</el-form-item>
			<el-form-item label="文章分类:" prop="typeId">
				<el-radio-group v-model="ruleForm.typeId">
					<el-radio v-for="item in articleType"
						:key="item.id"
						:label="item.id">{{item.name}}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="标签:" prop="tagList">
				<el-checkbox-group v-model="ruleForm.tagList">
					<el-checkbox v-for="item in tags"
						:key="item.id" :label="item.id">{{item.name}}</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="原创:" prop="hasOriginal">
				<el-radio-group v-model="ruleForm.hasOriginal">
					<el-radio :label="true">是</el-radio>
					<el-radio :label="false">否</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button @click="closeDialog">取 消</el-button>
			<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		</span>
	</el-dialog>
</template>
<script>
import Base from '../../../common/mixins/base.js';
import marked from 'marked';
export default {
	mixins: [Base],
	props: ['content'],
	data() {
		return {
			ruleForm: {
				title: '',
				typeId: '',
				tagList: [],
				hasOriginal: ''
			},
			rules: {
				title: [
					{ required: true, message: '请输入文章名称', trigger: 'blur' },
					{ min: 3, max: 32, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				typeId: [
					{ required: true, message: '请选择文章分类', trigger: 'change' }
				],
				tagList: [
					{ type: 'array', required: true, message: '请至少选择一个文章标签', trigger: 'change' }
				],
				hasOriginal: [
					{ required: true, message: '请选择是否原创', trigger: 'change' }
				]
			}
		};
	},
	computed: {
		tags() {
			return this.$store.state.tags;
		}
	},
	mounted() {
		this.getArticleType();
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if(valid) {
					console.log('success submit!');
					this.savearticle();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		savearticle() {
			const nowDate = new Date().getTime();
			const createTime = nowDate.toString();
			const content = marked(this.content);
			const { title, typeId } = this.ruleForm;
			this.$post('/api/addArticle', {
				title,
				tagId: this.ruleForm.tagList,
				typeId,
				author: this.$store.state.name,
				content,
				createTime,
				editTime: createTime
			}).then(res => {
				if(res.status === '200') {
					res = res.result;
					this.closeDialog();
					this.$store.commit('message', {
						type: 'success',
						message: '发布成功'
					});
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
		}
	}
};
</script>
<style lang="stylus" scoped>
</style>
