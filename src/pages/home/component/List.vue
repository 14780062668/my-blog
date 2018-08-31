<template>
	<div class="blog-list fl">
		<div class="title">
			<h2>{{titleObj[this.$route.name]}}</h2>
		</div>
		<ul class="list-box">
			<li v-for="item in num" :key="item">
				<h3>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-JS"></use>
					</svg>
					TypeScript免费视频教程 ，Deno前置知识
				</h3>
				<p class="note">第01节：初识TypeScript Deno都要来了，还不学TypeScript？ 近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ ...</p>
				<p class="meta">
					<time><i class="el-icon-time"></i>2018-06-27</time>
					<span class="author">
						<i class="iconfont icon-yonghu"></i>
						<a href="http://jspang.com/author/jspang001/">技术胖</a>
					</span>
					<span class="pv"><i class="el-icon-view"></i>阅读(7682)</span>
					<a class="pc" href="#">
						<i class="iconfont icon-pinglun"></i>评论(29)
					</a>
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			num: 10,
			titleObj: {
				HomeIndex: '最新博文',
				NoteIndex: '前端笔记',
				LiveIndex: '生活日记',
				TagIndex: `标签: ${this.$route.params.tagName}`
			}
		};
	},
	created() {
		console.log(this.$route);
		this.getArticleList();
	},
	methods: {
		getArticleList() {
			this.$post('/api/articleList', {
				id: 1
			}).then(res => {
				res = res.data;
				if (res.status === '200') {
					res = res.result;
					this.tags = res.list;
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
