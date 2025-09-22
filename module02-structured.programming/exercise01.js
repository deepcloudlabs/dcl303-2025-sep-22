x = 42; // global variable

function fun() {
    x++;
}

console.log(x); // 42
fun();
console.log(x); // 43