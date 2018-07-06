<template>
	<div class="search-box">
			<el-input
				placeholder="请输入内容"
				suffix-icon="el-icon-search"
				v-model="searchVal">
			</el-input>
		</div>
</template>
<script>
export default {
	data () {
		return {
			searchVal: ''
		};
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
