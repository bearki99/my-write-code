function myF(fun) {
  let flag = false;
  return function () {
    if (!flag) {
      flag = true;
      return fun.call(this, ...arguments);
    }
  };
}
function sayHi() {
  console.log("hi!");
}
const sayOnce = myF(sayHi);
sayOnce();
sayOnce();
