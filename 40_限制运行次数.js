function before(num, fn) {
  let cnt = 0;
  let ans;
  return function (...args) {
    if (num > cnt) {
      ans = fn(...args);
    }
    cnt++;
    return ans;
  };
}
