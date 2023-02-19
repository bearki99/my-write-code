Array.prototype.reduce = function (callback, args) {
  let pre = 0,
    start = 0;
  if (args.length) {
    pre = args;
    start = 0;
  } else {
    pre = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};
