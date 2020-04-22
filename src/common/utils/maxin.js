import { fangdou } from './utils.js'
export const itemListenerMixin = {
  data () {
    return {
      itemimglistener: null
    }
  },
  mounted () {
    let debouce = fangdou(this.$refs.scroll.refreshscroll, 100)
    this.itemimglistener = function() {
      debouce()
    }
    this.$bus.$on('imageloaded', this.itemimglistener)
  }
}