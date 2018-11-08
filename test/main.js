import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// 发布前测试用
// import axView from '../build/ax-view'
// Vue.use(axView)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
