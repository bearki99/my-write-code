function getSum(num) {
  if (num === 1) return 1;
  return num + getSum(num - 1);
}
console.log(getSum(100));
