function g() {
  let pe = new Promise(function (resolve, reject) {
    if (true) {
      resolve("Ful");
    } else {
      reject("Not");
    }
  });
  console.log(pe);
}
setTimeout(g, 4000);
