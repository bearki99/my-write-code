function interval(fn, delay, ...args) {
  let cancel = false;
  const task = () => {
    setTimeout(() => {
      fn.apply(this, args);
      task();
    }, delay);
  };
  task();
  return () => {
    cancel = true;
  };
}
