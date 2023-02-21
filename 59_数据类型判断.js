function getType(o) {
  const res = Object.prototype.toString.call(o);
  let str = Array.from(res.split(" ")[1]);
  str.pop();
  return str.join('');
}
console.log(getType(1));
