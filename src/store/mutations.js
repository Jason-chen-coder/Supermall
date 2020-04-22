export default {
  addnewgood (state, goodobj) {
    state.goodlist.push(goodobj)
  },
  addcountgood (state, goodobj) {
    goodobj.count++
  }
}
