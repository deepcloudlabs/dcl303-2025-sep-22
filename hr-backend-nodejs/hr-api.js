//region api configuration
const express = require('express');
const logger = require('morgan');
const body_parser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const {
    hire_employee,
    get_all_employees,
    get_employee_by_id,
    update_employee,
    fire_employee
} = require("./mongo-repository");

const api = express();

const create_api = (port = 8100, callback) => {
    api.use(body_parser.json({limit: '10mb'}));
    api.use(logger("dev"));
    // CORS Filter
    api.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD");
        next();
    });

//region POST
    api.post('/hr/api/v1/employees', (req, res) => {
        const employee = req.body;
        console.log(employee);
        hire_employee(employee).then(hired_employee => {
            res.set("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(hired_employee));
        }).catch(error => {
            console.error(error);
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        });
    });
//endregion

//region PUT
    api.put('/hr/api/v1/employees/:identity', (req, res) => {
        const new_employee = req.body;
        update_employee(new_employee).then(updated_employee => {
            res.set("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(updated_employee));
        }).catch(error => {
            console.error(error);
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        });
    });
//endregion

//region PATCH
    api.patch('/hr/api/v1/employees/:identity', (req, res) => {
        const new_employee = req.body;
        update_employee(new_employee).then(updated_employee => {
            res.set("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(updated_employee));
        }).catch(error => {
            console.error(error);
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        });
    });
//endregion

//region GET
    api.get('/hr/api/v1/employees', (req, res) => {
        const page_no = req.query.page || 0;
        const page_size = req.query.size || 10;
        get_all_employees(page_no, page_size).then(
            employees => {
                res.set("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(employees));
            });
    });
//endregion

//region GET identity
    api.get('/hr/api/v1/employees/:identity', (req, res) => {
        const identity = req.params.identity;
        get_employee_by_id(identity).then(
            employee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(employee));
            }
        )
    });
//endregion

//region DELETE identity
    api.delete('/hr/api/v1/employees/:identity', (req, res) => {
        const identity = req.params.identity;
        fire_employee(identity).then(fired_employee => {
            res.set("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(fired_employee));
        })
    });
//endregion

    // Api Documentation: Swagger UI
    const contract = require("./swagger-hr-api.json");
    api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(contract));
    const server = api.listen(port, callback);
}
//endregion

//region api methods


//endregion
module.exports = {
    create_api,
}