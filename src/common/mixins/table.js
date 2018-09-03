export default {
	data() {
		return {
			sizes: [10],
			layout: 'sizes, prev, pager, next',
			currentPage: 1,
			pageSize: 10,
			total: 0
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.currentPage = 1;
			this.initData();
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.initData();
		}
	}
};
