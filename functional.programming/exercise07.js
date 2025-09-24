function get_evens(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0)
            evens.push(number);
    }
    return evens;
}

numbers = [1,2,3,4,5,6,7,8,9,10];
for (const even of get_evens(numbers)) {
    console.log(even);
}