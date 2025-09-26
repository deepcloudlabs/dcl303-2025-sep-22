const {connect} = require("mongoose");
//const mongo_config = require("./mongo-config.json");
const mongo_config = {};
mongo_config.host = process.env.MONGO_HOST;
mongo_config.port = process.env.MONGO_PORT;
mongo_config.database = process.env.MONGO_DATABASE;
function connectToMongo() {
    return connect(`mongodb://${mongo_config.host}:${mongo_config.port}/${mongo_config.database}`);
}

module.exports = {connectToMongo};
