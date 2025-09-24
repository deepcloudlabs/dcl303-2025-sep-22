async function fun(...numbers) {
    if (numbers.length < 5) {
        throw "You must provide at least 5 integers!";
    }
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

// SyntaxError: await is only valid in async functions and the top level bodies of modules
async function sun(){
    let sum = await fun(1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log(sum);
    for (let i = 0; i < 10; i++) {
        console.log(`Working hard... ${i}.`);
    }
}

console.log("Application is just started!");
sun().then(()=>console.log("Application is just completed!"));