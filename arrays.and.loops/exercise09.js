numbers = [42, 8, 16, 15, 23, 4]
console.log(numbers);
function numeric_order(x,y){ // partial order
    if (x<y) return -1;
    if (x === y) return 0;
    if (x > y) return +1;
}
function numeric_order_short_version(x,y){ // partial order
    return x-y;
}
function numeric_desc_order(x,y){ // partial order
    return y-x;
}

numbers.sort(numeric_desc_order); // dictionary order -> numeric order
console.log(numbers);
numbers.sort((x,y) => y-x);
console.log(numbers);
