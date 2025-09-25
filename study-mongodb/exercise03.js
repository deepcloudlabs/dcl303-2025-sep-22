db.movies1.aggregate([
    {
        $unwind: { // flattening
            "path": "$genres"
        }
    },
    {
        $set: {
            "genres": "$genres.name"
        }
    },
    {
        $group: {
            "_id": "$genres",
            "count": { $sum: 1 }
        }
    },
    {
        $match: {
            "count" : {$gt : 10}
        }
    },
    {
        $sort: {
            count: -1
        }
    },

]);