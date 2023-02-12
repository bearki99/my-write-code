function extandStr(str) {
    let num = "";
    let res = "";
    let curStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") num += str[i];
      else if (i + 1 < str.length && str[i + 1] >= "0" && str[i + 1] <= "9") {
        curStr += str[i];
        num = parseInt(num);
        res += curStr.repeat(num);
        console.log(num, curStr);
        num = "";
        curStr = "";
      } else {
        curStr += str[i];
      }
    }
    if(curStr && num){
      res += curStr.repeat(parseInt(num));
    }
    return res;
  }
