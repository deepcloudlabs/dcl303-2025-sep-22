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

let circle2 = JSON.parse(JSON.stringify(circle1)); // deep cloning

circle1.x = 100;
circle2.y = 200;
circle1.pen.color = 'green';
circle2.pen.color = 'blue';
console.log(circle1);
console.log(circle2);

