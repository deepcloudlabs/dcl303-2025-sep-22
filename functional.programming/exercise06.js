// 10:00
// find region populations
const countries = require("./resources/countries.json");
population_by_region =
countries.map(country => [country.region, country.population])
    .reduce((group_by_region, [region, population]) => {
        group_by_region[region] = (group_by_region[region] || 0) + population;
        return group_by_region;
    }, {})
for (const [region,population] of Object.entries(population_by_region)){
    console.log(`${region}: ${population}`);
}