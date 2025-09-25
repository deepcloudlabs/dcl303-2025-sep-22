const math = require("./number-utils");

for(const even of math.get_evens(1,2,3,4,5,6,7,8,9,10))
    console.log(even);

const jack = new math.Employee("Jack","jack@mail.com");
console.log(jack);
console.log(math.PI)
console.log(math.is_even(42))