<template>
	<div class="hot-tag-box fr">
		<h3>热门标签</h3>
		<ul class="items">
			<router-link tag="li"
				v-for="item in tags"
				:to="{name: 'TagIndex', params:{tagName: item.id}}"
				:key="item.id">
				{{item.name}}
			</router-link>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tags: []
		};
	},
	created() {
		this.getArticleType();
	},
	methods: {
		getArticleType() {
			this.$get('/api/articleType').then(res => {
				res = res.data;
				if (res.status === '200') {
					res = res.result;
					this.tags = res.list;
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
		}
	}
};
</script>
<style lang="stylus" scoped>
h3 {
	color: #666;
	border-bottom: 1px solid #eaeaea;
	background: #fbfbfb;
	margin: 0;
	padding: 10px 15px 12px;
}

.items {
	overflow: hidden;
	padding: 14px;

	li {
		background: #f6f6f6;
		float: left;
		width: 32.3%;
		margin: 0 1% 1% 0;
		padding: 6px 0;
		text-indent: 10px;
		cursor: pointer;
	}
}
</style>
