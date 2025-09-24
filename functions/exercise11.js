function fun([first, second,...rest]) {
    return first ** second + rest.length;
}

console.log(fun([2,4,6,8]));