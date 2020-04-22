import Vue from 'vue'
import dayjs from 'dayjs'
// 定义过滤
Vue.filter('timefilter', function (value) {
  return dayjs(dayjs.unix(value)).format("YYYY-MM-DD")
})