<template>
	<header>
		<div class="header-box">
			<router-link class="logo fl" to="/home">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-pic-blog"></use>
				</svg>
				{{$store.state.name}}的博客
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
				<router-link to="/edit_article">
					写文章
				</router-link>
			</nav>
		</div>
	</header>
</template>
<script>
export default {
	name: 'Header',
	data() {
		return {
		};
	},
	methods: {
	}
};
</script>

<style lang="stylus" scoped>
	.logo
		width 20%
		svg
			font-size 40px
	nav
		overflow hidden
		a
			float left
			padding 0 36px
			&:hover
				background #037cce
		.router-link-active
			background #037cce
</style>
