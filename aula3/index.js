const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello'))



const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = YAML.load("./swagger.yaml");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

//rotas
const calcRouter = require('./routes/calculadora')
app.use("/calculadora", calcRouter);

app.listen(3000, () => console.log('Listening...'))