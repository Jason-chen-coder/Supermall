export default {
  addgood (context, newgood) {
    // 检查state中的goodlist是否存在元素有相同的iid属性
    var oldgood = null
    context.state.goodlist.forEach(item => {
      if (item.iid === newgood.iid) {
        oldgood = item
      }
    })
    if (oldgood) {
      // oldgood.count += 1
      context.commit('addcountgood', oldgood)
    } else {
      newgood.count = 1
      // context.state.goodlist.push(newgood)
      context.commit('addnewgood', newgood)
    }
  }
}