let arr = [1, 2, 3, 4, 5];
// 1. 直接把length清空
arr.length = 0;
// 2. shift/pop
while(arr.length) arr.pop();
while(arr.length) arr.shift();
// 3. splice
arr.splice(0, arr.length);
