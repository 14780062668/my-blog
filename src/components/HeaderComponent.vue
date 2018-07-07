<template>
	<div class="header-box">
		<header>
			<router-link class="logo fl" to="/home">
				<i class="iconfont icon-pic-blog"></i>老猿的博客
			</router-link>
			<nav class="fr">
				<router-link to="/home">
					首页
				</router-link>
				<router-link to="/note">
					前端笔记
				</router-link>
				<router-link to="/live">
					生活日记
				</router-link>
				<router-link to="/introduction">
					自我介绍
				</router-link>
			</nav>
		</header>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data () {
		return {
			count: 10
		};
	},
	methods: {
		add () {
			this.count++;
			console.log(this.count);
		}
	}
};
</script>

<style lang="stylus" scoped>
	.logo
		width 20%
		i
			font-size 40px
			vertical-align middle
	nav
		float right
		overflow hidden
		a
			float left
			padding 0 40px
			&:hover
				background #037cce
		.router-link-active
			background #037cce
</style>
