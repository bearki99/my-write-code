function checkOut(obj1, obj2) {
  if (obj1 === obj2) return true;
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) return false;
  for (const key in arr1) {
    if (typeof arr1[key] == "object" || typeof arr2[key] == "object") {
      return checkOut(arr1[key], arr2[key]);
    } else if (arr1[key] !== arr2[key]) return false;
  }
  return true;
}
Array.prototype.includesItem = function (item) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    if (checkOut(this[i], item)) {
      flag = true;
      break;
    }
  }
  return flag;
};
function uniqueArr(nums){
    const res = [];
    for(let i = 0; i < nums.length; i++){
        if(!res.includesItem(nums[i])) res.push(nums[i]);
    }
    return res;
}
let a = { a: 1 };
let b = { a: 1 };
let c = { b: 2 };
let nums = [a, b, c];

console.log(uniqueArr(nums));