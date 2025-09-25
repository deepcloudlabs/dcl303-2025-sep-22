const {get_evens, Employee, PI,is_odd} = require("./number-utils");

for(const even of get_evens(1,2,3,4,5,6,7,8,9,10))
    console.log(even);

const jack = new Employee("Jack","jack@mail.com");
console.log(jack);
console.log(PI)
console.log(is_odd(23))