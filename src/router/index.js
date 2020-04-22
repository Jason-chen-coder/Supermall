import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'
import profile from '../views/profile/index.vue'
import category from '../views/category/index.vue'
import cart from '../views/cart/index.vue'
import detail from '../views/detail/detail.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  }, {
    path: '/cart',
    component: cart
  }, {
    path: '/category',
    component: category
  }, {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail',
    component: detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router