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

let circle1 = new Circle(10,10,100,"red");
let {x,y,radius,color} = circle1;
console.log(x,y,radius,color);

