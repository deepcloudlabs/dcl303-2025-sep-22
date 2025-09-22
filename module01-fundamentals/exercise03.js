x = 0 / 0;
console.log(x);
x = 0 * x;
console.log(x);
console.log(x === NaN);
console.log(x === x);
console.log(Number.isNaN(x));
console.log(Number.isFinite(x));
console.log(Number.isInteger(x));