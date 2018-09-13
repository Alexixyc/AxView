import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import pagination from '@/pages/pagination/index.vue'

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: require('../components/index'),
		children: [{
				path: 'pagination',
				name: 'pagination',
				component: pagination
			}, {
				path: 'demo',
				name: 'demo',
				component: require('../components/demo/demo')
			}]
	}]
})