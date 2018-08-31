/*
 * @Author: yl
 * @Date: 2018-08-29
 * @Last Modified by: yl
 * @Last Modified time: 2018-08-29
 * @Description: 将 axios 封装成 Vue 的插件使用
 */

import apiInterface from './interface';

const install = Vue => {
	if (install.installed) return;
	install.installed = true;

	Object.defineProperties(Vue.prototype, {
		$http: {
			get() {
				// PS: 这里没有区分命名空间
				return Object.assign(
					{},
					apiInterface
				);
				// 如果需要区分命令空间的话可以参考以下写法
				// {
				//     apiInterface,
				//     apiRegister,
				//     apiPublish
				// }
			}
		},
		post() {
			console.log(222);
		}
	});
};

export default install;
