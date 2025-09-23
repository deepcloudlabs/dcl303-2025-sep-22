class Employee {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        //this.sayHello = this.sayHello.bind(this);
    }

    sayHello = () => {
        console.log(`Hello ${this.lastName}, ${this.firstName}`);
    }
}

let jack = new Employee('Jack', 'Shephard', 'jack.shephard@example.com');
jack.sayHello()
setInterval(jack.sayHello, 1_000);
