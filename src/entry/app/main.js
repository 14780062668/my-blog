import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '../../store/index.js';
import VueLazyload from 'vue-lazyload';
import '@/static/css/default.styl';
import api from '../../axios';

// 引入element-ui组件
import { Input, pagination, message } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import '../../../static/iconfont/iconfont.js';

// 引入filter
import '../../tools/vue.filter.js';

Vue.use(Input);
Vue.use(pagination);
Vue.prototype.$message = message;
Vue.use(VueLazyload, {
	error: 'dist/error.png',
	loading: 'dist/loading.gif'
});

Vue.config.productionTip = false;
// axios 请求类型 代理到vue上
for(let key in api) {
	Vue.prototype['$' + key] = api[key];
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
