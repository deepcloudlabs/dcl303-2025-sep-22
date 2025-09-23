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

let circle2 = circle1;
circle1.x = 100;
circle2.y = 200;
console.log(circle1);
console.log(circle2);
