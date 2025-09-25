db.movies1.aggregate([
    {
        $set: {
            "numberOfDirectors": {$size: "$directors"},
            "numberOfGenres": {$size: "$genres"}
        }
    },
    {
        $match:{
            "numberOfDirectors": {$gt: 1}
        }
    }
]);