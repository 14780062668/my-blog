import Vue from 'vue';

// 时间戳格式化成 0000-00-00 00:00:00
Vue.filter('formatTime', val => {
	val = new Date(val * 1);
	let year = val.getFullYear();
	let month = (val.getMonth() + 1).toString().padStart(2, '0');
	let day = val.getDate().toString().padStart(2, '0');
	let hour = val.getHours().toString().padStart(2, '0');
	let minutes = val.getMinutes().toString().padStart(2, '0');
	let seconds = val.getSeconds().toString().padStart(2, '0');
	return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds;
});
