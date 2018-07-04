<template>
	<div class="blog-list fl">
		<div class="title">
			<h2>最新博文</h2>
		</div>
		<ul class="list-box">
			<li v-for="item in num" :key="item">
				<a href="javascript:void(0)" class="list-img fl">
					<img src="http://jspang.com/wp-content/uploads/2018/06/typescriptlogo.jpg" />
				</a>
				<div class="fl list-msg">
					<h3>TypeScript免费视频教程 ，Deno前置知识 </h3>
					<p class="meta">
						<time><i class="fa fa-clock-o"></i>2018-06-27</time>
						<span class="author"><i class="fa fa-user"></i><a href="http://jspang.com/author/jspang001/">技术胖</a></span>
						<span class="pv"><i class="fa fa-eye"></i>阅读(7682)</span>
						<a class="pc" href="http://jspang.com/2018/06/27/typescript/#comments">
							<i class="fa fa-comments-o"></i>评论(29)
						</a>
					</p>
					<p class="note">第01节：初识TypeScript Deno都要来了，还不学TypeScript？ 近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ ...</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data () {
		return {
			num: 10
		};
	}
};
</script>
