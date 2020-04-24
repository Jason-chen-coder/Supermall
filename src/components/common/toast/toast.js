// 导入toast组件
import Toast from './toast.vue'
const obj = {}
obj.install = function (Vue) {
  // 1.创建组件的构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.new 的方式,根据组件构造器,创建出来一个组件对象toast
  const toast = new toastConstructor()
  // 3.将组建对象,手动挂载到某一个元素上(如div)
  toast.$mount(document.createElement('div'))
  // 4.现在toast.$el对应的就是div(即toast组件和div融合起来)
  document.body.appendChild(toast.$el)
  // 在Vue原型对象中添加toast组件对象
  Vue.prototype.$toast = toast
}
export default obj