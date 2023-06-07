//routes/index.js

const bodyParser = require('body-parser')
const cors = require('cors')

const coletas = require('./coletasRoute')
const loteEntradas = require('./loteEntradasRoute')
const processos = require('./processosRoute')
const loteFinal = require('./loteFinalRoute')
const extrativistas = require('./extrativistasRoute')
const funcionarios = require('./funcionariosRoute')
const pedidos = require('./pedidosRoute')
const maquinas = require('./maquinasRoute')
const contas = require('./contasRoute')

module.exports = app => {
  app.use(
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    coletas,
    loteEntradas,
    processos,
    loteFinal,
    extrativistas,
    funcionarios,
    pedidos,
    maquinas,
    contas
  )
}