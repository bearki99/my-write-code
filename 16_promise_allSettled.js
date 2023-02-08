Promise.prototype.mySettled = function (promises) {
  return new Promise((resolve) => {
    const data = [],
      len = promises.length;
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      const promise = promises[i];
      Promise.resolve(promise)
        .then(
          (res) => {
            data[i] = { status: "fulfilled", value: res };
          },
          (error) => {
            data[i] = { status: "rejected", reason: error };
          }
        )
        .finally(() => {
          if (cnt === len) resolve(data);
        });
    }
  });
};
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise2, promise1];
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);
