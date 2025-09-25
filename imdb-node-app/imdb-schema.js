const {Schema, model} = require("mongoose");
const DirectorSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        enums: ['Action', 'Adventure',
            'Animation', 'Biography',
            'Comedy', 'Crime',
            'Documentary', 'Drama',
            'Family', 'Fantasy',
            'Film-Noir', 'History',
            'Horror', 'Music',
            'Musical', 'Mystery',
            'Romance', 'Sci-Fi',
            'Sport', 'Thriller',
            'War', 'Western']
    }, _id: {
        type: Number,
        required: true
    }
});
const MovieSchema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    directors: [DirectorSchema],
    genres: [GenreSchema],
    imdb: {
        type: String,
        required: true,
        regex: /tt[0-9]{7}/
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const MovieModel = model("movies1", MovieSchema);

function get_movie_model() {
    return MovieModel;
}

module.exports = {
    get_movie_model,
    GenreSchema,
    DirectorSchema,
    MovieSchema
}