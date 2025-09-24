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
// Find Drama Movies in 70s
const movies = require("./resources/movies.json");
const movie_if_in_70s = movie => movie.year >= 1970 && movie.year < 1980;
const includes_drama = genre => genre.name === "Drama";
const movie_if_drama = movie => movie.genres.some(includes_drama);
const drama_movies_in_70s = filter(movie_if_drama,filter(movie_if_in_70s,movies));
for (const {title, year, imdb} of drama_movies_in_70s) {
    console.log("for:",title,year, `https://www.imdb.com/title/${imdb}`);
}