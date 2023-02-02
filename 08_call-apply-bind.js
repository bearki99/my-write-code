Function.prototype._myCall = (thisArg, ...args) => {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  let fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};
Function.prototype._myapply = (thisArg, args = []) => {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  let fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};
Function.prototype._mybind = (thisArg, ...args) => {
  let fn = this;
  return (...args) => {
    return fn._myCall(thisArg, ...args);
  };
};
