export function fangdou (callback, wait) {
  var timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback()
    }, wait)
  }
}