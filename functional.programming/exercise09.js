const countries = require("./resources/countries.json");

function* filter(predicate_fun, values) {
    for (const value of values) {
        if (predicate_fun(value)) {
            console.log(`filter: yielding ${value}`);
            yield value;
        }
    }
}

function* map(mapping_fun, values) {
    for (const value of values) {
        let mapped_value = mapping_fun(value);
        console.log(`map: yielding ${mapped_value}`);
        yield mapped_value;
    }
}

function reduce(accumulator_fun, init_value, values) {
    let accumulated_value = init_value;
    for (const value of values) {
        accumulated_value = accumulator_fun(accumulated_value,value);
    }
    return accumulated_value;
}

population_by_region =
    reduce( (group_by_region, [region, population]) => {
        console.log("inside reduce: ", region);
        group_by_region[region] = (group_by_region[region] || 0) + population;
        return group_by_region;
    }, {} , map(country => {
        console.log("inside map: ", country.name, country.region);
        return [country.region, country.population];
    } , countries ));
for (const [region, population] of Object.entries(population_by_region)) {
    console.log(`for: ${region}: ${population}`);
}