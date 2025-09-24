function fun(...numbers) {
    if(numbers.length < 5) {
        throw "You must provide at least 5 integers!";
    }
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

function gun(...numbers) {
    return new Promise((resolve,reject)=>{
        if(numbers.length < 5) {
            reject("You must provide at least 5 integers!");
        }
        setTimeout(()=>{
            resolve(numbers.reduce((acc, cur) => acc + cur, 0));
        }, 5_000);
    })

}


console.log("Application is just started!");
console.log(fun(1,2,3,4,5,6,7,8,9));
gun(1,2,3,4,5,6,7,8,9)
    .then( sum => console.log(sum));
for (let i=0; i<10; i++) {
    console.log(`Working hard... ${i}.`);
}
console.log("Application is just completed!");
