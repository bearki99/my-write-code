const getData = async (num) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, num);
  });
};
const order = async (nums) => {
  for (const num of nums) {
    const res = await getData(num);
    console.log(res);
  }
};
const nums = [2000, 1000, 3000, 5000, 2000];
order(nums);
