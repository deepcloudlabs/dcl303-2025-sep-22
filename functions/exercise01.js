function fun(x,y,z){ // 1
    return x + y * z;
}

let gun = function(x,y,z){ // 2 - anonymous function
    return x + y * z;
}

let sun = (x,y,z) => { // 3 - lambda expression
    return x + y * z;
}

let run = (x,y,z) => x + y * z; // 3 - short version: lambda expression

console.log(fun(10,20,30)); // 610
console.log(gun(10,20,30)); // 610
console.log(sun(10,20,30)); // 610