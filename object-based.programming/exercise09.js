let circle1 = {
    x: 0,
    y: 0,
    radius: 1,
    pen: {
        color: 'red',
        thickness: 2,
        style: "solid",
        visible: true
    }
}

let serialized_circle = JSON.stringify(circle1);
console.log(typeof(serialized_circle)); // string
console.log(serialized_circle);
let circle2 = JSON.parse(serialized_circle); // string -> object
console.log(typeof(circle2)); // object
console.log(circle2); // the same state with circle1

