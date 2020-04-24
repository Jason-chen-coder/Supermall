import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/utils/timefilter'
import store from './store/index'
import toast from './components/common/toast/toast'
// 导入fastclick
import FastClick from 'fastclick'
import "./assets/css/base.css";
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 安装自己写的toast插件
Vue.use(toast)
//调用fastclick方法
FastClick.attach(document.body)
document.title = '购物街'
new Vue({
  render: h => h(App), router, store
}).$mount('#app')
