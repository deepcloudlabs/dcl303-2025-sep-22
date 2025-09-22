// scope: var vs let
function fun(){
    console.log(i) // undefined
    for (var i = 0; i < 10; i++){
        console.log(i); // 0 .. 9
    }
    console.log(i); // 10

    // console.log(j); // Reference error
    for (let j = 0; j < 10; j++){
        console.log(j); // 0 .. 9
    } // j is no longer available
    console.log(j); //
}

fun();