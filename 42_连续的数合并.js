const arr = [0, 1, 2, 4, 5, 7, 13, 15, 16];
const res = [];
let l = 0,
  r = 1;
while (r < arr.length) {
  if (arr[r] === arr[r - 1] + 1) r++;
  else {
    if (r - l + 1 > 1) {
      res.push(l + "->" + r);
    } else {
      res.push(l + "");
    }
    l = r;
    r++;
  }
}
console.log(res);
