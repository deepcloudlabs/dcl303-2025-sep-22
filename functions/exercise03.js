function fun(x,y,z){ // 1
    x = x || 10;
    y = y || 20;
    z = z || 3;
    console.log(x,y,z);
    return x ** 2 + y ** z;
}

console.log(fun());
console.log(fun(2));
console.log(fun(2,5));
console.log(fun(2,5,8));
console.log(fun(2,5,8, 100));