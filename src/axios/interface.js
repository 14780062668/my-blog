import axios from 'axios';

const articleType = (params) => {
	return axios({
		url: '/articleType',
		methods: 'get',
		params
	});
};
const articleTag = (params) => {
	console.log('params', params);
	return axios.post('/articleTag', params);
};
export default {
	articleType,
	articleTag
};
