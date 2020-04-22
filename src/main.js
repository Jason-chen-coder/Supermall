import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/utils/timefilter'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App), router, store
}).$mount('#app')
