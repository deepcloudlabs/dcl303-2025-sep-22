const {connectToMongo} = require("./mongo-connection");
const {get_country_by_code, get_countries_by_continent, create_country, update_country,delete_country} = require("./mongo-repository");

connectToMongo().then(()=>{
    console.log("Connected to MongoDB");
    //region exercises
    get_country_by_code("TUR").then( country => console.log(country));
    get_countries_by_continent("Asia",2,20).then(
        countries => {
            for (const country of countries) {
                console.log(country.name);
            }
        }
    );
    /*
    update_country({
        _id: 'UFG',
        capital: 5000,
        cities: [
            { district: 'Herat', _id: 5000, name: 'Herat', population: 186800 },
            {
                district: 'Balkh',
                _id: 4,
                name: 'Mazar-e-Sharif',
                population: 127800
            }
        ],
        continent: 'Asia',
        gnp: 5976,
        governmentForm: 'Islamic Emirate',
        headOfState: 'Jack Bauer',
        indepYear: 1919,
        lifeExpectancy: 45.9,
        localName: 'localname/localname',
        name: 'Localistan',
        population: 222222,
        region: 'Southern and Central Asia',
        surfaceArea: 1652102
    }).then(() => console.log("Country updated"));

     */
    //endregion
    delete_country("UFG").then(()=>console.log("Country deleted"));
});