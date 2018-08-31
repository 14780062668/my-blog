<template>
	<div class="search-box">
			<el-input
				placeholder="请输入内容"
				@keyup.enter.native="search"
				v-model="searchVal">
				<i slot="suffix" class="el-input__icon el-icon-search"
					@click="search"></i>
			</el-input>
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
