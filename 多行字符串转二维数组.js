const str = ` 1 21    3
4 5  6
7   8 9 `; /* 多行字符串要用反引号 */
var arr = str.split("\n"); /* 根据换行符分割 */
const res = [];
for (const subarr of arr) {
  let line = subarr.split(" ").filter((e) => e !== " " && e !== '');
  res.push(line);
}
console.log(res);
