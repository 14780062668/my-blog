import Vue from 'vue';
import Router from 'vue-router';

// @共用 - 404
import NotFoundComponent from '@/pages/404.vue';

import Index from '@/pages/index';
import HomeIndex from '@/pages/home/index';
import ArticleDetail from '@/pages/home/ArticleDetail';
import NoteIndex from '@/pages/note/index';
import LiveIndex from '@/pages/live/index';
import IntroductionIndex from '@/pages/introduction/index';
import TagIndex from '@/pages/tag/index';
import EditArticleIndex from '@/pages/editArticle/index';

Vue.use(Router);
let router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || {x: 0, y: 0};
	},
	routes: [{
		// 路由首页
		path: '/',
		component: Index,
		children: [{
			path: '/home',
			name: 'HomeIndex',
			component: HomeIndex
		}, {
			path: '/article_detailte',
			name: 'ArticleDetail',
			component: ArticleDetail
		}, {
			path: '/note',
			name: 'NoteIndex',
			component: NoteIndex
		}, {
			path: '/live',
			name: 'LiveIndex',
			component: LiveIndex
		}, {
			path: '/tag/:tagId',
			name: 'TagIndex',
			component: TagIndex
		}, {
			path: '/introduction',
			name: 'IntroductionIndex',
			component: IntroductionIndex
		}, {
			path: '/edit_article',
			name: 'EditArticleIndex',
			component: EditArticleIndex
		}, {
			path: '*',
			component: NotFoundComponent
		}]
	}]
});

export default router;
