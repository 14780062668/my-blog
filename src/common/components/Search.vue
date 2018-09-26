<template>
	<div class="search-box">
			<a-input-search
				placeholder="请输入内容"
				@search="search"
				v-model="searchVal"
				enterButton
			/>
		</div>
</template>
<script>
export default {
	data() {
		return {
			searchVal: ''
		};
	},
	methods: {
		search() {
			this.$store.commit('changeSearch', this.searchVal);
			console.log(this.searchVal);
		}
	},
	destroyed() {
		this.$store.commit('changeSearch', '');
	}
};
</script>
<style lang="stylus" scoped>
.search-box
	overflow hidden
	margin-bottom 20px
	.el-input
		float right
		width 30%
</style>
