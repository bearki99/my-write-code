function removeStr(str) {
  const stk = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b") continue;
    else if (!stk.length) stk.push(str[i]);
    else {
      if (stk.length && str[i] === "a" && stk[stk.length - 1] == "c") stk.pop();
      else if (stk.length && str[i] === "c" && stk[stk.length - 1] == "a") stk.pop();
      else stk.push(str[i]);
    }
  }
  return stk.join("");
}
console.log(removeStr("cccbbaaa"));
