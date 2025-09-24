// Find Drama Movies in 70s
const movies = require("./resources/movies.json");
const movie_if_in_70s = movie => movie.year >= 1970 && movie.year < 1980;
const includes_drama = genre => genre.name === "Drama";
const movie_if_drama = movie => movie.genres.some(includes_drama);
const drama_movies_in_70s = movies.filter(movie_if_in_70s)
                                  .filter(movie_if_drama);
for (const {title, year, imdb} of drama_movies_in_70s) {
    console.log(title,year, `https://www.imdb.com/title/${imdb}`);
}