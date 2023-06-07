const { Router } = require('express');
const ProcessoController = require('../controllers/ProcessoController');

const router = Router()

router.get('/processos', ProcessoController.pegaTodosOsProcessos);
router.get('/processos/:id', ProcessoController.pegaUmProcesso);
router.post('/processos', ProcessoController.criaProcesso);
router.put('/processos/:id', ProcessoController.atualizaProcesso);
router.delete('/processos/:id', ProcessoController.apagaProcesso);

module.exports = router