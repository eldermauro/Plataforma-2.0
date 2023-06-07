const { Router } = require('express');
const ColetaController = require('../controllers/ColetaController');

const router = Router()

router.get('/coletas', ColetaController.pegaTodasAsColetas);
router.get('/coletas/:id', ColetaController.pegaUmaColeta);
router.post('/coletas', ColetaController.criaColeta);
router.put('/coletas/:id', ColetaController.atualizaColeta);
router.delete('/coletas/:id', ColetaController.apagaColeta);

module.exports = router