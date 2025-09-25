const {Schema, model} = require("mongoose");
const {CONTINENTS, GOVERNMENT_FORMS, REGIONS} = require("./lookup-values.js");

const CitySchema = new Schema({
    district: {
        type: String
    },
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    population: {
        type: Number
    }
});

const CountrySchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true,
        enums: CONTINENTS
    },
    gnp: {
        type: Number
    },
    governmentForm: {
        type: String,
        enums: GOVERNMENT_FORMS
    },
    headOfState: {
        type: String
    },
    indepYear: {
        type: Number
    },
    lifeExpectancy: {
        type: Number
    },
    localName: {
        type: String
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    population: {
        type: Number,
        min: 0
    },
    region: {
        type: String,
        required: true,
        enums: REGIONS
    },
    surfaceArea: {
        type: Number
    },
    cities: [CitySchema]
});

const CountryModel = model("countries1", CountrySchema);
function get_country_model(){
    return CountryModel;
}
module.exports = {
    get_country_model,
    CitySchema,
    CountrySchema
}