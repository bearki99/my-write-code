const obj1 = { a: "11", b: { c: "22" } };
const obj2 = { a: "11", b: { c: "22" } };
function isEqual(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) return false;
  for (const k in arr1) {
    if (typeof obj1[k] == "object" || typeof obj2[k] == "object") {
      return isEqual(obj1[k], obj2[k]);
    } else if (obj1[k] !== obj2[k]) return false;
  }
  return true;
}
console.log(isEqual(obj1, obj2));
