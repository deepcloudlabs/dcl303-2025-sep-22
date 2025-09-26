const {connectToMongo} = require("./mongo-connection");
const {create_api} = require("./hr-api");
const port = process.env.API_PORT || 8100;
connectToMongo().then(()=>{
    console.log("Connected to MongoDB");
    create_api(port,()=>{
       console.log(`REST Api is listening at port ${port}`);
    });
})