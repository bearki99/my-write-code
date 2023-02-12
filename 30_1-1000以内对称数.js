const res = [];
function getSymNum() {
  for (let i = 1; i <= 10000; i++) {
    let str1 = i + "";
    if (judgeSym(str1)) res.push(i);
  }
}
function judgeSym(str) {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    r--;
    l++;
  }
  return true;
}
getSymNum();
console.log(res);
