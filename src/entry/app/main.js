import Vue from 'vue';
import App from './App';
import router from '@/router';
import axios from 'axios';
import '@/static/css/default.styl';

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/static/iconfont/iconfont.css';

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
