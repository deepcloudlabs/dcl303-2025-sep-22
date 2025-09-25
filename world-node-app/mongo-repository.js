const {get_country_model} = require("./world-schema.js");

function get_country_by_code(code) {
    return get_country_model().find(
        {_id: code},
        {cities: false}
    );
}

function get_countries_by_continent(continent = "Asia", page_no = 0, page_size = 10) {
    return get_country_model().find(
        {continent},
        {cities: false},
        {
            skip: page_no * page_size,
            limit: page_size
        }
    );
}

function create_country(country) {
    const CountryModel = get_country_model();
    const countryDocument = new CountryModel(country);
    return countryDocument.save();
}

function update_country(country) {
    const CountryModel = get_country_model();
    return CountryModel.updateOne({
            _id: country._id
        },
        {
            $set: country,
            upsert: false
        }
    );
}


function delete_country(code) {
    const CountryModel = get_country_model();
    return CountryModel.deleteOne({
            _id: code
        }
    );
}

module.exports = {
    get_country_by_code,
    get_countries_by_continent,
    create_country,
    update_country,
    delete_country
};