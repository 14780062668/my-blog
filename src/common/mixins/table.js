export default {
	data() {
		return {
			currentPage: 1,
			pageSize: 10,
			defaultCurrent: 6,
			total: 0
		};
	},
	methods: {
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
			this.initData();
		}
	}
};
