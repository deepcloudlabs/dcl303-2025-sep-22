export function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

export const version = "1.0.0";

export default function shout(s){
    return `${s.toUpperCase()}!!!`;
}

export class Account {
    constructor(iban,balance){
        this.iban = iban;
        this.balance = balance;
    }

    withdraw(amount){
        this.balance -= amount;
    }
    deposit(amount){
        this.balance += amount;
    }
}