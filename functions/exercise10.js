function create_power(n) { // higher-order function
    return function(x){
        return x ** n;
    }
}

let square_fun = create_power(2);
let cube_fun = create_power(3);
console.log(square_fun(10));
console.log(cube_fun(10));
