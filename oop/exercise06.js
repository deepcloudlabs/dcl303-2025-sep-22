class Circle {
    constructor(x = 0, y = 0, radius = 1) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area = () => {
        console.log("Circle::area()")
        return Math.PI * this.radius ** 2;
    }
}

class ColorfulCircle extends Circle {
    constructor(x = 0, y = 0, radius = 1, color = "blue") {
        super(x, y, radius);
        this.color = color;
    }

    area = () => {
        console.log("ColorfulCircle::area()")
        return Math.PI * this.radius ** 3.0;
    }
}

let circles = [
    new Circle(100, 100, 1_000),
    new ColorfulCircle(200, 200, 2_000, "red"),
    new Circle(300, 300, 3_000),
    new ColorfulCircle(400, 400, 4_000, "green")
];
for (const circle of circles) {
    console.log(circle);
    console.log(circle.area());
}


