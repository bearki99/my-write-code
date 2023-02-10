function get(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(index);
      resolve();
    }, 1000);
  });
}
async function my() {
  for (let i = 1; i <= 5; i++) {
    await get(i);
  }
}
my();