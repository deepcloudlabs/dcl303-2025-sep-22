class Account {
    #iban;
    #balance;

    constructor(iban, balance = 0) {
        this.#iban = iban;
        this.#balance = balance;
    }
    // properties: iban: read-write, balance: read-only
    get balance() {
        return this.#balance;
    }

    get iban() {
        return this.#iban;
    }

    set iban(new_iban) {
        if (!/^TR\d{16}$/.test(new_iban))
            throw "Invalid iban";
        this.#iban = new_iban;
    }

    withdraw(amount) {
        if (!amount) throw new Error("Amount is required");
        if (amount <= 0) throw "Amount must be a positive number";
        if (amount > this.#balance) throw "Amount must be less than or equal to balance";
        this.#balance -= amount;
    }

    deposit(amount) {
        if (!amount) throw new Error("Amount is required");
        if (amount <= 0) throw "Amount must be a positive number";
        this.#balance += amount;
    }
}

let acc1 = new Account("TR1", 1_000_000);
acc1.withdraw(100_000);
acc1.withdraw(200_000);
acc1.withdraw(250_000);
acc1.withdraw(400_000);
acc1.iban = "TR0123456789123456";
console.log(acc1.balance);
console.log(acc1.iban, acc1.balance);
