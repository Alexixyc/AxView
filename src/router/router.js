
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/pages/index'
import pagination from '@/pages/pagination/index.vue'

export default new Router ({
    routes: [{
        path: '/',
		name: 'index',
		component: index,
		children: [{
				path: 'pagination',
				name: 'pagination',
				component: pagination
			}]
    }]
})