let numbers = [4, 8, 15, 16, 23, 42];
let dizi = [...numbers]; // cloning the array
dizi.push(56); // [4, 8, 15, 16, 23, 42, 56]
numbers.push(108); // [4, 8, 15, 16, 23, 42, 108]
console.log(dizi);
console.log(numbers);