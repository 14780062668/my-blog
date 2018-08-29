import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '../../store/index.js';
import VueLazyload from 'vue-lazyload';
import '@/static/css/default.styl';
import api from '../../../axios';

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/static/iconfont/iconfont.css';

Vue.use(ElementUI);
Vue.use(VueLazyload, {
	error: 'dist/error.png',
	loading: 'dist/loading.gif'
});

Vue.config.productionTip = false;
Vue.use(api);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
