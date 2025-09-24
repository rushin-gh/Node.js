console.log("Math module is called!");

export function printSum(a, b) {
  console.log(a + b);
}

export const privateVar = 12;

let a = 12;
let b = 13;
export let c = a + b;

// module.exports = { printSum, privateVar, c };
