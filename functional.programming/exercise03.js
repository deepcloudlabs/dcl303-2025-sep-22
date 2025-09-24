// Find Drama Movies in 70s
const movies = require("./resources/movies.json");

const drama_movies_in_70s = []
for (const movie of movies) {
    if (movie.year >= 1970 && movie.year <= 1980) {
        for (const {name} of movie.genres){
            if (name.toLowerCase() === "drama" )
                drama_movies_in_70s.push(movie);
        }
    }
}
for (const {title, year, imdb} of drama_movies_in_70s) {
    console.log(title,year, `https://www.imdb.com/title/${imdb}`);
}