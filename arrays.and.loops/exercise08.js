numbers = [4, 8, 15, 16, 23, 42];
numbers[10] = 10;

// external loop #1
console.log("external loop #1")
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (!number) continue;
    console.log(number);
}

// external loop #2
console.log("external loop #2")
for (let i in numbers) {
    let number = numbers[i];
    console.log(number);
}

// external loop #3
console.log("external loop #3")
for (let number of numbers) {
    if (number) // guard!
       console.log(number);
}
// internal loop # 4
console.log("internal loop # 4")
numbers.forEach((number,index) => console.log(`number[${index}]: ${number}`));