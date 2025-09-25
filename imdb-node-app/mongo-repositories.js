const {get_movie_model} = require("./imdb-schema");

get_movie_by_imdb = async (imdb) => {
    const MovieModel = get_movie_model();
    return MovieModel.findOne(
        {imdb}
    );
}


get_movies_by_genre = async (genre_name = "Drama", page_no = 0, page_size = 10) => {
    const MovieModel = get_movie_model();
    return MovieModel.find(
        {"genres.name": {$in: [genre_name]}},
        {directors: false},
        {skip: page_no * page_size, limit: page_size}
    );
}

function create_movie(movie) {
    const MovieModel = get_movie_model();
    const movieDocument = new MovieModel(movie);
    return movieDocument.save();
}

function update_movie(movie) {
    const CountryMovie = get_movie_model();
    return get_movie_by_imdb(movie.imdb).then(movieDocument => {
        for (const field in movie) {
            if (movieDocument[field]) {
                movieDocument[field] = movie[field];
            }
        }
        console.log(movieDocument);
        CountryMovie.updateOne({
                imdb: movie.imdb
            },
            {
                $set: movieDocument,
                upsert: false
            }
        ).then(result => console.log(result));
    });
}


function delete_movie(imdb) {
    const MovieModel = get_movie_model();
    return MovieModel.deleteOne({imdb});
}

module.exports = {
    get_movies_by_genre,
    get_movie_by_imdb,
    delete_movie,
    create_movie,
    update_movie
};