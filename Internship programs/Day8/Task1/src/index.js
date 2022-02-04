let a = [1, 2, 3, 4, 5, 6, 7];
let a2 = a.map((i) => i + 5);
console.log(a);
console.log(a2);

let a3 = a2.filter((i) => i % 5 === 0);
console.log(a3);

let a4 = a2.reduce((result, i) => {
  return result + i;
}, 0);
console.log(a4);
