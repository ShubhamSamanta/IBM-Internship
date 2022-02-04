console.log("start");
let n = false;
let p = new Promise(function (res, rej) {
  if (n) {
    res("Resolved");
  } else {
    rej("Rejected");
  }
});
p.then(function psuc(result) {
  console.log("Then");
})
  .catch(function pfail(result) {
    console.log("Catch");
  })
  .finally(() => {
    console.log("Finally");
  });
