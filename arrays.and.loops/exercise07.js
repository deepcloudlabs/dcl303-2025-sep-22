numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers.length) // 6
numbers[-1] = -1;
console.log(numbers.length) // 6
numbers["-10"] = -10; // object syntax
console.log(numbers.length) // 6
numbers[100] = "one hundred"; // object -> array
console.log(numbers.length); // 101
console.log(numbers[-1]); // -1
console.log(numbers[-10]); // -10
console.log(numbers["-1"]); // -1
console.log(numbers["-10"]); // -10
