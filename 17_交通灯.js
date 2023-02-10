function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
function task(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light == "red") {
        red();
      } else if (light == "yellow") {
        yellow();
      } else {
        green();
      }
      resolve();
    }, timer);
  });
}

const step = () => {
  task(3000, "red")
    .then(() => {
      task(1000, "green");
    })
    .then(() => {
      task(2000, "yellow");
    })
    .then(() => {
      step();
    });
};

async function handle() {
  await task(2000, "red");
  await task(3000, "green");
  await task(1000, "yellow");
  handle();
}
// step();
handle();
