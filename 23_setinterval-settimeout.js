function _setTimeout(fn, delay, ...args) {
  const timer = setInterval(() => {
    fn.call(this, ...args);
    clearInterval(timer);
  }, delay);
}
