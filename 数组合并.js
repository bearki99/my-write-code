const arr1 = [1, 3, 5];
const arr2 = [2, 4, 5, 6];

// 1. 并集
const arr3 = [...new Set(arr1.concat(arr2))];

// 2. 交集
const set = new Set(arr1);
const res = [];
for (let i = 0; i < arr2.length; i++) {
  if (set.has(arr2[i]) && res.indexOf(arr2[i]) === -1) {
    res.push(arr2[i]);
  }
}
console.log(res);

// 3. 差集 这里求的是除了交集之外的
const res2 = [...new Set(arr1.concat(arr2))];
for(let i = 0; i < res2.length; i++){
    if(res.indexOf(res2[i])!== -1) res2.splice(i, 1);
}
console.log(res2);