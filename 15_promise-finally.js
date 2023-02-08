Promise.prototype.myfinally = function (onSettled) {
  return this.then(
    (data) => {
      onSettled();
      return data;
    },
    (reason) => {
      onSettled();
      return reason;
    }
  );
};
