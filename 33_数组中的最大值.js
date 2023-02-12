const arr = [1, 3, 55, 77, 1000];
// 1. 调用Math
let res = Math.max(...arr);
// 2. 排序
arr.sort((a, b) => a - b)[arr.length - 1];
// 3. 可以采用快排
// 4. 直接获取最大值
function getMax(arr){
    let res = -Infinity;
    for(let i = 0; i < arr.length; i++){
        res = Math.max(res, arr[i]);
    }
    return res;
}