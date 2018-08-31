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
	}
};
</script>
