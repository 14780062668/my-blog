import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '../../store/index.js';
import VueLazyload from 'vue-lazyload';
import '@/static/css/default.styl';
import api from '../../axios';

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../../static/iconfont/iconfont.js';

// 引入filter
import '../../tools/vue.filter.js';

Vue.use(ElementUI);
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
