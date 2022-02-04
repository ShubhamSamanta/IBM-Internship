console.log("This is Start");
let t1 = ["Hello", "Hi", "How", "Are", "You"];
let [t1x, t2x] = t1;
console.log(t1x, t2x);

const t2 = {
  fname: "Shubham",
  lname: "Samanta",
  age: 22
};
let { fname: f, lname: l, age = 69 } = t2;
console.log(f, l, age);

let [t3x, , , , t3y] = t1;
console.log(t3x, t3y);

t4("Hello", "Hi", "How", "Are", "You");
function t4(t4x, t4y, ...args) {
  console.log("This is inside t4");
  console.log(t4x);
  console.log(t4y);
  console.log(args);
}

let t5 = [1, 2, 3, ...t1, 4, 5, 6];
console.log(t5);
