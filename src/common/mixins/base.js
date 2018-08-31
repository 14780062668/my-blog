export default {
	data() {
		return {};
	},
	created() {
		if(this.$store.state.tags.length === 0) {
			this.getArticleType();
		}
	},
	methods: {
		getArticleType() {
			this.$get('/api/articleType').then(res => {
				res = res.data;
				if(res.status === '200') {
					res = res.result;
					this.$store.commit('changeTags', res.list);
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
