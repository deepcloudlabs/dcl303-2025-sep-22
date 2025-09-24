// find region populations
const countries = require("./resources/countries.json");
population_by_region =
countries.map(country => {
        console.log("inside map: ", country.name,country.region);
       return [country.region, country.population];
    })
    .reduce((group_by_region, [region, population]) => {
        console.log("inside reduce: ", region);
        group_by_region[region] = (group_by_region[region] || 0) + population;
        return group_by_region;
    }, {})
for (const [region,population] of Object.entries(population_by_region)){
    console.log(`for: ${region}: ${population}`);
}