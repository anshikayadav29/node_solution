// Linear Search
let arr2 = [5, 8, 12, 3, 9];
let key = 12;
let found = false;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === key) {
    found = true;
    break;
  }
}

console.log(found);
