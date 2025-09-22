x = 3.1415; // number: int, floating-point
console.log(typeof(x));

x = 2 + 2 === 4; // boolean
console.log(typeof(x));

x = "kate austen"; // string
console.log(typeof(x));

x = [4, 8, 15, 16, 23, 42]; // object
console.log(typeof(x));

// object
x = {fullname:"jack shephard", salary: 100_000, iban: "TR1"};
console.log(typeof(x));

// function
x = function(n){ return n%2 === 0;}
console.log(typeof(x));

// lambda expression -> function
x = n => n%2 === 0;
console.log(typeof(x));

