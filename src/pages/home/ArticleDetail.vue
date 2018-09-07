<template>
	<div>
		<div class="blog-list fl article_detail">
			<div class="top">
				<h1>
					<span v-if="articleData.hasOriginal">原</span>
					<span v-else>转</span>
					{{articleData.title}}
				</h1>
			</div>
			<section v-html="articleData.content"></section>
			<p class="info">
				<time>
					<i class="el-icon-time"></i>
					{{articleData.createTime | formatTime}}
				</time>
				<span class="readNumber">
					<i class="el-icon-view"></i>阅读 ( {{articleData.readNumber}} )
				</span>
				<span class="author fr">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-yonghu"></use>
					</svg>
					{{articleData.author}}
				</span>
			</p>
		</div>
		<sidebar />
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
	section
		padding 20px
		min-height 400px
	.info
		padding 20px
		overflow hidden
		color #999
		.readNumber
			margin-left 20px
</style>
