numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers[0]) // 4
console.log(numbers[-1]) // undefined
console.log(numbers[5]) // 42
console.log(numbers[6]) // undefined
console.log(numbers[7] === undefined)
if (numbers[7]) {
    console.log(numbers[7])
} else {
    console.log("it does not exist!")
}
numbers[7] = null;

if (numbers[7]) {
    console.log(numbers[7])
} else {
    console.log("it does not exist!")
}

numbers[8] = numbers[7] || 108;
console.log(numbers[8]) // 108
if (numbers[7])
    numbers[8] = numbers[7];
else
    numbers[8] = 108;