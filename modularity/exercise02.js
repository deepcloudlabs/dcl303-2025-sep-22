import yuksekSesleSoyle, {Account, capitalize, version} from "./string-utils.js";

const greeting = "hello mars";

console.log(yuksekSesleSoyle(greeting));
console.log(capitalize("jack"));
console.log(`version is ${version}`);
const acc1 = new Account("TR1", 1_000_000);
acc1.withdraw(500_000);
acc1.deposit(200_000);
console.log(acc1)