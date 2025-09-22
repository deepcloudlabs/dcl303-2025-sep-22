numbers = [15, 8, 23, 16, 4, 42]
let includes_perfect_squre =
    numbers.some(function (n) {
        console.log(n);
        return Math.sqrt(n) * Math.sqrt(n) === n;
    });
includes_perfect_squre = numbers.some(n => Math.sqrt(n) * Math.sqrt(n) === n);
console.log(includes_perfect_squre);
numbers = [4, 8, 15, 16, 42];
console.log(numbers.every(function (n) {
    return n % 2 === 0;
}));
console.log(numbers.every(n => n % 2 === 0));