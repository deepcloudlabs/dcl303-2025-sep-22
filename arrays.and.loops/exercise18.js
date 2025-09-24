numbers = [4, 8, 15, 16, 23, 42];
console.log(numbers.every(number => {
    console.log(`every runs the predicate function with parameter: ${number}`);
    return number % 2 === 0;
}));
console.log(numbers.some(number => {
    console.log(`some runs the predicate function with parameter: ${number}`);
    return number % 2 === 0;
}));