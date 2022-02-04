console.log("start");
let n = false;
let p = new Promise(function (res, rej) {
  setTimeout(function () {
    if (n) {
      res("Resolved");
    } else {
      rej("Rejected");
    }
  }, 4000);
});

async function fun() {
  let result = "";
  try {
    console.log("This is try block");
    result = await p;
    console.log(result);
  } catch (error) {
    console.log("Error occured" + result);
  }
}
fun();

// p.then(function psuc(result) {
//   console.log("Then");
// })
//   .catch(function pfail(result) {
//     console.log("Catch");
//   })
//   .finally(() => {
//     console.log("Finally");
//   });


// console.log("start");
// let n = false;
// let p = new Promise(function (res, rej) {
//   setTimeout(function () {
//     if (n) {
//       res("Resolved");
//     } else {
//       rej("Rejected");
//     }
//   }, 4000);
// });

// async function fun() {
//   try {
//     console.log("This is try block");
//     let result = await p;
//   } catch (error) {
//     console.log("Error occured");
//   }
// }
// fun();

// // p.then(function psuc(result) {
// //   console.log("Then");
// // })
// //   .catch(function pfail(result) {
// //     console.log("Catch");
// //   })
// //   .finally(() => {
// //     console.log("Finally");
// //   });
