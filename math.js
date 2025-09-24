console.log("Math module is called!");

function printSum(a, b) {
  console.log(a + b);
}

const privateVar = 12;

let a = 12;
let b = 13;
let c = a + b;

module.exports = { printSum, privateVar, c };
