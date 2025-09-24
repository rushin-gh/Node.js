let arr = [1, 3, 2, 3, 6, 4, 5, 9];
let evenArr = [];

for (let item of arr) {
  if (item % 2 && !evenArr.includes(item)) {
    evenArr.push(item);
  }
}

console.log(evenArr);
