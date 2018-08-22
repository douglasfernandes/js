const express = require('express')
const app = express()
app.get('/',(req,res) => res.send('hello'))


//rotas
const pessoasRouter = require('./routes/pessoas')
app.use("/pessoas", pessoasRouter)
//se a porta nao for definiada em um arquivo entao pegue a porta 3000
const PORT = process.env.POR || 3000
app.listen(3000,() => console.log('listening...'))

