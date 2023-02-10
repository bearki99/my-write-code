function myPromise(promise) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject("error");
      }, 1000);
    }),
  ]);
}
