const { Router } = require('express');
const loteEntradaController = require('../controllers/LoteEntradaController');

const router = Router()

router.get('/loteEntradas', loteEntradaController.pegaTodosOsLotesEntrada);
router.get('/loteEntradas/:id', loteEntradaController.pegaUmLoteEntrada);
router.post('/loteEntradas', loteEntradaController.criaLoteEntrada);
router.put('/loteEntradas/:id', loteEntradaController.atualizaLoteEntrada);
router.delete('/loteEntradas/:id', loteEntradaController.apagaLoteEntrada);

module.exports = router