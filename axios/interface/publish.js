import axios from 'axios';

const articleType = (params) => {
	return axios({
		url: '/articleType',
		methods: 'get',
		params
	})
};
export default {
	articleType
};