const {connect} = require("mongoose");
const mongo_config = require("./mongo-config.json");

function connectToMongo() {
    return connect(`mongodb://${mongo_config.host}:${mongo_config.port}/${mongo_config.database}`);
}

module.exports = {connectToMongo};
