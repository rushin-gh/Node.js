const https = require("https");
const fs = require("fs");

console.log("Async ran");

let a = 1234;
let b = 5678;

https.get("https://google.com", (response) => {
  console.log("Http response received ", typeof response);
  response.resume();
});

fs.readFile("./dummy.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File read : ", data);
  }
});

setTimeout(() => {
  console.log("Timeout called");
}, 3000);

function Add(x, y) {
  return x + y;
}

console.log("Addition = " + Add(a, b));

console.log("Completed, Not really!");
