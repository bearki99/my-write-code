function ShortenStr(str) {
  const stk = [];
  let cnt = 0;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (stk.length == 0) {
      stk.push(str[i]);
      cnt++;
    }
    else if (str[i] === stk[stk.length - 1]) {
      cnt++;
    } else {
      let currentStr = stk.pop();
      res += currentStr + cnt;
      cnt = 1;
      stk.push(str[i]);
    }
  }
  if (stk.length) res += stk.pop() + cnt;
  return res;
}
console.log(ShortenStr("abbccccaaa"));
