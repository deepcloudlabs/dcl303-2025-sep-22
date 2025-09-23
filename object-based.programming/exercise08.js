let circle1 = {
    x: 0,
    y: 0,
    radius: 1,
    pen: {
        color: 'red',
        thickness: 2,
        style: "solid",
        visible: true
    },
    area: function(){},
    circumference: function(){}
}

let circle2 = {...circle1}; // object cloning: shallow cloning
circle2.pen = {...circle1.pen}
circle1.x = 100; // circle1.y -> 0
circle2.y = 200; // circle2.x -> 0
circle1.pen.color = 'green';
circle2.pen.color = 'blue';
console.log(circle1); // circle1.pen.color -> blue -> green
console.log(circle2); // circle2.pen.color -> blue
