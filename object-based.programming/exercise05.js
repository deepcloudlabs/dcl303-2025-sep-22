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

let {x, y, radius, ...rest} = circle1;
console.log(x, y, radius);
console.log(rest);

numbers = [4, 8, 15, 16, 23, 42]
let [first, second,...others] = numbers;
console.log(first,second,others);
