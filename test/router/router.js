
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from 'test/pages/index'
import pagination from 'test/pages/pagination/index.vue'
import select from 'test/pages/select/index.vue'
import input from 'test/pages/input/index.vue'
import datePicker from 'test/pages/date-picker/index.vue'

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
			}, {
				path: 'date-picker',
				name: 'date-picker',
				component: datePicker
			}]
    }]
})