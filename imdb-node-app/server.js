const {connectToMongo} = require("./mongo-connection");
const {get_movies_by_genre, get_movie_by_imdb, create_movie, delete_movie, update_movie} = require("./mongo-repositories");

connectToMongo().then(async () => {
    console.log("Connected to MongoDB");
    const movies = await get_movies_by_genre("Sci-Fi");
    for (const movie of movies) {
        console.log(movie.title, movie.genres);
    }
    console.log("Getting movie by imdb");
    const movie = await get_movie_by_imdb("tt0899128");
    console.log(movie);
    /*
    create_movie(  {
        _id: Math.floor(10_000 * Math.random()),
        directors: [ { _id: 31, imdb: 'nm1470993', name: 'Scott Mann' } ],
        genres: [ { name: 'Action', _id: 5 } ],
        imdb: 'tt0471041',
        title: 'The Tournament',
        year: 2009
    }).then(() => console.log("Movie created"));
    */
    // delete_movie("tt0471041").then(() => console.log("Movie deleted"));
    update_movie(  {
        imdb: 'tt0471041',
        year: 2000 + Math.floor(Math.random() * 25)
    }).then(() => console.log("Movie updated"));
});
