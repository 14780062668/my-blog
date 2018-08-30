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
		},
		message(state, obj) {
			/**
			 * tip
			 */
			const { type, message } = obj;
			switch (type) {
			case 'success':
				vm.$message({
					message,
					type
				});
				break;
			case 'warning':
				vm.$message({
					type,
					message
				});
				break;
			case 'error':
				vm.$message.error(message);
				break;
			default:
				vm.$message(message);
			}
		}
	}
});
export default store;
