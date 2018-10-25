
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/pages/index'
import pagination from '@/pages/pagination/index.vue'
import select from '@/pages/select/index.vue'
import input from '@/pages/input/index.vue'

export default new Router ({
    routes: [{
        path: '/',
		name: 'index',
		component: index,
		children: [{
				path: 'pagination',
				name: 'pagination',
				component: pagination
			}, {
				path: 'select',
				name: 'select',
				component: select
			}, {
				path: 'input',
				name: 'input',
				component: input
			}]
    }]
})