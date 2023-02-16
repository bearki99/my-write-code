function formatTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = (time.getMonth() + 1) <= 9;
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
}
console.log(formatTime());
