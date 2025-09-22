numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers.indexOf(16)); // 3
console.log(numbers.indexOf(56)); // -1
console.log(numbers.indexOf(16) !== -1); // true
console.log(numbers.indexOf(56) !== -1); // false
console.log(numbers.includes(16)); // true
console.log(numbers.includes(56)); // false