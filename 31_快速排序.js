function quick_sort(q, l, r) {
  if (l >= r) return;
  let i = l - 1,
    j = r + 1,
    x = q[(i + j) >> 1];
  while (i < j) {
    do i++;
    while (q[i] < x);
    do j--;
    while (q[j] > x);
    if (i < j) {
      [q[i], q[j]] = [q[j], q[i]];
    }
  }
  quick_sort(q, l, j), quick_sort(q, j + 1, r);
}
const num = [3, 4, 2, 1, 6, 7, 4];
quick_sort(num, 0, num.length - 1);
console.log(num);
