numbers = [4, 8, 15, 16, 23, 42] // array -> object

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

console.log(circle1.pen.color)
console.log(circle1["pen"]["color"])
console.log(numbers["3"]) // 16
numbers["elma"] = "apple"; // object -> not an index -> field
console.log(numbers.length) // 6
console.log(numbers.elma) // object
numbers[10] = "ten" // array
console.log(numbers.length) // 11

for (let i = 0; i < numbers.length; i++) { // array
    console.log(numbers[i])
}

for (let i in numbers) { // object
    console.log(`numbers[${i}]: ${numbers[i]}`)
}

for (let value of numbers) { // array
    console.log(value)
}

// object + array
Object.entries(numbers).forEach(([key, value]) => {
    console.log(`key: ${key} --> ${value}`)
})
