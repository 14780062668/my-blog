import Vue from 'vue';
import Router from 'vue-router';

// @共用 - 404
import NotFoundComponent from '@/pages/404.vue';

import Index from '@/pages/index';
import HomeIndex from '@/pages/home/index';
import NoteIndex from '@/pages/note/index';
import IntroductionIndex from '@/pages/introduction/index';

Vue.use(Router);

let router = new Router({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		return savedPosition || {x: 0, y: 0};
	},
	routes: [{
		// 路由首页
		path: '/',
		component: Index,
		children: [{
			path: '/home',
			component: HomeIndex
		}, {
			path: '/note',
			component: NoteIndex
		}, {
			path: '/introduction',
			component: IntroductionIndex
		}, {
			path: '*',
			component: NotFoundComponent
		}]
	}]
});

export default router;
