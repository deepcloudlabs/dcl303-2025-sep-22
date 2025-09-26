//region api configuration
const express = require('express');
const logger = require('morgan');
const body_parser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const {hire_employee} = require("./mongo-repository");
const {connectToMongo} = require("./mongo-connection");

const api = express();

const create_api = (port=8100,callback) => {
    api.use(body_parser.json({limit: '10mb'}));
    api.use(logger("dev"));
    // CORS Filter
    api.use(function(req,res,next){
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD");
       next();
    });

//region POST
    api.post('/hr/api/v1/employees', (req,res)=>{
        const employee = req.body;
        console.log(employee);
        hire_employee(employee).then(hired_employee=>{
            res.set("Content-Type","application/json");
            res.status(200).send(JSON.stringify(hired_employee));
        }).catch(error=>{
            console.error(error);
            res.set("Content-Type","application/json");
            res.status(400).send({error});
        });
    });
//endregion

//region PUT
    api.put('/hr/api/v1/employees', (req,res)=>{
        const employee = req.body;
        console.log(employee);
        hire_employee(employee).then(hired_employee=>{
            res.set("Content-Type","application/json");
            res.status(200).send(JSON.stringify(hired_employee));
        }).catch(error=>{
            console.error(error);
            res.set("Content-Type","application/json");
            res.status(400).send({error});
        });
    });
//endregion

//region GET
    api.get('/hr/api/v1/employees', (req,res)=> {
    });
//endregion

//region GET identity
    api.get('/hr/api/v1/employees/:identity', (req,res)=> {
    });
//endregion

//region DELETE identity
    api.delete('/hr/api/v1/employees/:identity', (req,res)=> {
    });
//endregion

    // Api Documentation: Swagger UI
    const contract = require("./swagger-hr-api.json");
    api.use("/api-docs", swaggerUi.serve,swaggerUi.setup(contract));
    const server = api.listen(port,callback);
}
//endregion

//region api methods



//endregion

//region starting the server
connectToMongo().then(()=>{
    console.log("Connected to MongoDB");
    create_api(8100,()=>{
        console.log("Starting HR Rest API...done");
    })
});
//endregion
