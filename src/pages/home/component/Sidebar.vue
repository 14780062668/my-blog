<template>
	<div class="hot-tag-box fr">
		<h3>热门标签</h3>
		<ul class="items">
			<router-link tag="li"
				v-for="item in $store.state.tags"
				:to="{name: 'TagIndex', params:{tagId: item.id }}"
				:key="item.id">
				<span>{{item.name}}</span>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	created() {
	},
	methods: {
	}
};
</script>
<style lang="stylus" scoped>
h3
	border-bottom 1px solid #eaeaea
	padding 10px 15px 12px
	text-align center
.items
	overflow hidden
	padding 20px 12px 10px
	li
		float left
		margin 0 0 10px 10px
		cursor pointer
		text-align center
		span
			color #1e94e5
			padding 0 10px
			&:hover
				text-decoration underline
</style>
