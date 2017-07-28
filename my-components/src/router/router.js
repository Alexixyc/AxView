import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: require('../components/index'),
		children: [{
				path: 'pagination',
				name: 'pagination',
				component: require('../components/pagination/pagination')
			}]
			// ,
			// children: [{
			// 	path: 'pagination ',
			// 	name: 'pagination',
			// 	component: pagination
			// }]
	}]
})