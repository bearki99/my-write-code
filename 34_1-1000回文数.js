function isReverse(num) {
  let newNum = num + "";
  let l = 0,
    r = newNum.length - 1;
  while (l < r) {
    if (newNum[l] !== newNum[r]) return false;
    l++;
    r--;
  }
  return true;
}
const res = [];
for (let i = 1; i <= 1000; i++) {
  if (isReverse(i)) res.push(i);
}
console.log(res);
