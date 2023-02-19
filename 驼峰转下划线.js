function transform(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      res += "_" + str[i].toLowerCase();
    } else {
      res += str[i];
    }
  }

  return res;
}
console.log(transform("strAbc"));
