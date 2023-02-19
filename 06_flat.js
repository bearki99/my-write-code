// Array.prototype.myFlat = function (deep) {
//   let res = [];
//   deep--;
//   this.forEach((item) => {
//     if (Array.isArray(item) && deep >= 0) {
//       res = res.concat(item.myFlat(deep));
//     } else {
//       res.push(item);
//     }
//   });
//   return res;
// };
const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];


Array.prototype.myFlat = function (deep = Infinity) {
  let res = [];
  deep--;
  this.forEach((item) => {
    if (Array.isArray(item) && deep >= 0) {
      res = res.concat(item.myFlat(deep));
    } else {
      res.push(item);
    }
  });
  return res;
};
console.log(arr.myFlat());