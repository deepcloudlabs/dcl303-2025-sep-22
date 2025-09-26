function is_even(n) {
    return n % 2 === 0;
}

const is_odd = (n) => n % 2 === 0;

function* get_evens(...numbers){
    for (const number of numbers){
        if (is_even(number)){
            yield number;
        }
    }
}

const PI = 3.141592652;

class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

module.exports = {
    is_even,
    is_odd,
    get_evens,
    PI,
    Employee
}