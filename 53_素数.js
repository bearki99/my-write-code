function judgeIs(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) cnt++;
  }
  return cnt === 2;
}
