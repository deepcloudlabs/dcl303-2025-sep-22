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

for (let member in circle1) {
    console.log(`${member} is ${circle1[member]}`);
}

Object.entries(circle1).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
})
