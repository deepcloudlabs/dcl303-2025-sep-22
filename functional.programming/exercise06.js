// 10:00
// find region populations
const countries = require("./resources/countries.json");

for (const {name,region,population} of countries) {
    console.log(name,region,population);
}