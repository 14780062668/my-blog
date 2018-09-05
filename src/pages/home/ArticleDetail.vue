<template>
	<div>
		<div class="blog-list fl article_detail">
			<div class="top">
				<h1>
					<span v-if="articleData.hasOriginal">原</span>
					<span v-else>转</span>
					{{articleData.title}}
				</h1>
				<p class="info">
					<span>{{articleData.createTime | formatTime}}</span>
				</p>
			</div>
			<section v-html="articleData.content"></section>
		</div>
		<sidebar />
		{{articleData}}
	</div>
</template>
<script>
import Sidebar from './component/Sidebar';
export default {
	components: {
		Sidebar
	},
	data() {
		return {
			content: 'ssss',
			articleData: {}
		};
	},
	created() {
		this.getArticleDetail();
	},
	methods: {
		getArticleDetail() {
			this.$post('/api/articleDetail', {
				id: this.$route.params.id
			}).then(res => {
				if(res.status === '200') {
					this.articleData = res.result.length === 1 ? res.result[0] : {};
				} else {
					this.articleData = {};
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
.article_detail
	.top
		border-bottom 1px solid #eaeaea
		padding 20px
		h1
			text-align center
			span
				font-size 12px
				line-height 24px
				height 24px
				display inline-block
				border 1px solid #f00
				border-radius 50%
				color #f00
				width 24px
				text-align center
				vertical-align middle
		.info
			color #9199a1
	section
		padding 20px
</style>
