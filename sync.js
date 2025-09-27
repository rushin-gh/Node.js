console.log("Sync ran");

let a = 1234;
let b = 5678;

function Product(x, y) {
  return x * y;
}

function Add(x, y) {
  return x + y;
}

console.log("Addition = " + Add(a, b));
console.log("Product = ", Product(a, b));
