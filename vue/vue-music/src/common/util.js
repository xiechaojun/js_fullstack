export function debounce (func,delay){   //防止重复点击  防抖？
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}