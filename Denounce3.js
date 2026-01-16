// debounce-throttle.js
function smartLimit(fn, delay) {
  let last = 0, timer;
  return (...args) => {
    const now = Date.now();
    clearTimeout(timer);
    if (now - last > delay) {
      last = now;
      fn(...args);
    } else {
      timer = setTimeout(() => fn(...args), delay);
    }
  };
}
