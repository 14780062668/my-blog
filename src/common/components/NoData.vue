<template>
	<div class="no_data">
		{{emptyText || '暂无数据!'}}
	</div>
</template>
<script>
export default {
	props: ['emptyText'],
	data() {
		return {};
	}
};
</script>
<style lang="stylus" scoped>
.no_data
	line-height 100px
	text-align center
	color #999
</style>
