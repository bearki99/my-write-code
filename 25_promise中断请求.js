function myFunction() {
  Promise.resolve().then(() => {
    console.log("1");
    return new Promise(() => {});
  });
}
