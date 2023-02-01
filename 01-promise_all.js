function myAll(promises) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let idx = 0;
    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        (res) => {
          ans[index] = res;
          idx++;
          if (idx === promises.length) resolve(ans);
        },
        (err) => reject(err)
      );
    });
  });
};
let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(3);
  }, 1500);
});
myAll([p1, p2, p3]).then((res) => {
  console.log(res);
});
