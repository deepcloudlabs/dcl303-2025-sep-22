function fun(...numbers){
    for(const number of numbers){
        console.log(number);
    }
}

function gun(numbers){
    for(const number of numbers){
        console.log(number);
    }
}

fun(1,3,5,7,9,11);
gun([1,3,5,7,9,11])