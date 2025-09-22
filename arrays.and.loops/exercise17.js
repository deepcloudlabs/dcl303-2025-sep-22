let numbers = [4, 8, 15, 16, 23, 42];
let [first, second, ...others] = numbers;
console.log(first); // 4
console.log(second); // 8
console.log(others); // [15,16,23,42]