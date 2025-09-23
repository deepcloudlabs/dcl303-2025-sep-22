let unit_circle = {
    x: 0,
    y: 0,
    radius: 1,
    circumference: function(){
        return 2 * Math.PI * this.radius;
    },
    area: function(){
        return Math.PI * this.radius ** 2;
    }
}

console.log(unit_circle.x);
console.log(unit_circle["x"]);
let field = "radius";
console.log(unit_circle[field]);
console.log(unit_circle.circumference());
let method_name = "area"
console.log(unit_circle[method_name]());
