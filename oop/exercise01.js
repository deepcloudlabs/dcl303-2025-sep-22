const Circle = function (x=0, y=0, radius=1, color="blue") {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.area = function () {
        return Math.PI * this.radius ** 2;
    }

    this.circumference = function () {
        return 2.0 * Math.PI * this.radius;
    }
}

let circle1 = new Circle();
let circle2 = new Circle(10,10,100,"red");
let circle3 = new Circle(100,100,100,"blue");
console.log(circle1);
console.log(circle2);
console.log(circle3);
console.log(circle1.area()); // area(circle1) -> this=circle1
console.log(circle2.area());
console.log(circle3.area());

for (let member in circle1) {
    if (typeof(circle1[member]) === "function"){
        console.log(circle1[member].call(circle1));
    }
}

