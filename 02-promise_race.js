function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  });
}
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
myRace([p1, p2, p3]).then((res) => {
  console.log(res);
});
