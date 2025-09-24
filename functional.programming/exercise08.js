function* get_evens(numbers) {
    console.log("get_evens() is just started!");
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(`get_evens() is yielding: ${number}.`);
            yield number;
        }
    }
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = get_evens(numbers); // lazy
do {
    let {value, done} = result.next();
    if (done) break;
    console.log(`do...while: ${value}`);
} while (true);
