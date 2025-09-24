const movies = require("./resources/movies.json");

for (const {title, year, imdb} of movies) {
    console.log(title,year, `https://www.imdb.com/title/${imdb}`);
}