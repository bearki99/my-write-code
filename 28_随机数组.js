// 1. 简单版数组乱序
function generateRandomV1(num) {
  return num.sort(() => Math.random() - 0.5);
}
// 2. 复杂版
function generateRandom(len = 10, min = 1, max = 30) {
  if (max - min < len) return null;
  const hash = [];
  while (hash.length < len) {
    const num = Math.floor(Math.random() * max);
    if (num < min) continue;
    if (hash.indexOf(num) === -1) hash.push(num);
  }
  return hash;
}
const res = generateRandom();
console.log(res);
