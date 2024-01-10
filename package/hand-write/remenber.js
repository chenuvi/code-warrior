function debounce(cb, wait = 3000) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    let context = this;
    return setTimeout((...args) => {
      cb.apply(context, args);
    }, wait);
  };
}
function throttle(cb, wait = 3000) {
  let previous = 0;
  return function (...args) {
    let now = Date.now();
    const context = this;
    if (now - previous > wait) {
      cb.apply(context, args);
      previous = now;
    }
  };
}
