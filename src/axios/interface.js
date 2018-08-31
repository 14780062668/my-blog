import axios from 'axios';

const articleType = (params) => {
	return axios({
		url: '/articleType',
		methods: 'get',
		params
	});
};
const articleList = (params) => {
	console.log('params', params);
	return axios.post('/articleList', params);
};
export default {
	articleType,
	articleList
};
