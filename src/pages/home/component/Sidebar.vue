<template>
	<div class="hot-tag-box fr">
		<h3>热门标签</h3>
		<ul class="items">
			<router-link tag="li"
				v-for="item in tags"
				:to="{name: 'TagIndex', params:{tagName: item}}"
				:key="item" >
				{{item}}
			</router-link>
		</ul>
	</div>
</template>
<script>
import './base.js';
export default {
	data() {
		return {
			tags: ['Git', 'jQuery', 'ES6', 'node']
		};
	},
	created() {
		this.axiosGet();
		// this.axiosPost();
	},
	methods: {
		axiosGet() {
			this.$axios.get('/articleType')
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		axiosPost() {
			this.$axios.post('../index.html', {
				id: 1
			})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
};
</script>
<style lang="stylus" scoped>
h3
	color #666
	border-bottom 1px solid #eaeaea
	background #fbfbfb
	margin 0
	padding 10px 15px 12px
.items
	overflow hidden
	padding 14px
	li
		background #f6f6f6
		float left
		width 32.3%
		margin 0 1% 1% 0
		padding 6px 0
		text-indent 10px
		cursor pointer
</style>
