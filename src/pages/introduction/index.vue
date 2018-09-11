<template>
	<div class="my-introduction">
		<h2 class="key-point">付出不亚于任何人的努力</h2>
		<h3>我的资料</h3>
		<p>2013年毕业四川农业大学计算机科学与技术专业。从一开始接触web前端，就对前端开发有浓烈的兴趣!</p>
		<h3>专业技能</h3>
		<ul class="list-skill hiddens">
			<li>
				<img src="../../static/img/html5.png" alt="HTML+CSS3" />
				<h5>HTML+CSS3</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/javascript.png" alt="JS" />
				<h5>JS</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/jquery.png" alt="jQuery" />
				<h5>jQuery</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/vue.jpg" alt="Vue" />
				<h5>Vue</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/react.png" alt="React" />
				<h5>React</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/node.png" alt="node" />
				<h5>node</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
			<li>
				<img src="../../static/img/mongodb.png" alt="mongodb" />
				<h5>mongodb</h5>
				<span class="key-point">熟练度:95%</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
		};
	}
};
</script>
<style lang="stylus" scoped>
	.my-introduction
		background #fff
		border 1px solid #eaeaea
		padding 20px
		.key-point
			text-align center
		h3
			margin 30px 0 20px
		p
			text-indent 20px
		.list-skill
			li
				float left
				width 7%
				margin-bottom 20px
				&:nth-child(n+2)
					margin-left 30px
				text-align center
</style>
