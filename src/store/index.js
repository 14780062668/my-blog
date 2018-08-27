import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		increment(state) {
			state.count++;
			console.log(`state.count===${state.count}`);
		}
	}
});
export default store;
