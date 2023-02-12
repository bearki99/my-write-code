function _end() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 5000);
  });
}
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 10000);
});
let promise2 = _end();
Promise.race([promise2, promise1])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
