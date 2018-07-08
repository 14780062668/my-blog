<template>
	<div id="page-container">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	created() {
		if (this.$route.path === '/' || this.$route.path === '') {
			this.$router.push({ path: '/home' });
		}
	},
	mounted() {
		let browserHeight = window.innerHeight;
		let footerHeight = document.querySelector('#footer').clientHeight;
		let containerDom = document.querySelector('#page-container');
		let minHeight = browserHeight - containerDom.offsetTop - footerHeight - 22 + 'px';
		containerDom.style.minHeight = minHeight;
	}
};
</script>
