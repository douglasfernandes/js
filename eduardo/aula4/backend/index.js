const express = require('express')

const app = express()

//const YAML = require('yamljs')
//const swaggerUI = require('swagger-ui-express')
//const swaggerDoc = YAML.load('./swagger.yaml')

// middlewares
app.use(express.json())

// rotas
app.get('/', (req,res) => res.send('hello nodemon'))

const pessoasRouter = require('./routes/pessoas')
app.use("/pessoas", pessoasRouter)

//app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on 3000...'))
