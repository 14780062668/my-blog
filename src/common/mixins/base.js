export default {
	data() {
		return {
			dialogVisible: false,
			articleType: []
		};
	},
	created() {
	},
	methods: {
		getArticleTag() {
			this.$get('/api/articleTag').then(res => {
				if(res.status === '200') {
					this.$store.commit('changeTags', res.list);
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
		},
		getArticleType() {
			this.$get('/api/articleType').then(res => {
				if(res.status === '200') {
					this.articleType = res.list;
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
		},
		closeDialog() {
			this.dialogVisible = false;
		}
	}
};
