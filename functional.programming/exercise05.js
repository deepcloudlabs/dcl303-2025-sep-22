// find genre histogram
const movies = require("./resources/movies.json");
const genre_histogram =
movies.map(movie => movie.genres) // select count(*) from movies group by name;
      .flat()
      .map(genre => genre.name)
      .reduce((groupByName, name) => {
          groupByName[name] = (groupByName[name] || 0) + 1;
          return groupByName;
      }, {});
for (const [genre,count] of Object.entries(genre_histogram)){
    console.log(`${genre}: ${count}`);
}