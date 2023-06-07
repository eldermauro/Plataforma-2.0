const { Router } = require('express');
const ContaController = require('../controllers/ContaController');

const router = Router()

router.get('/contas', ContaController.pegaTodasAsContas);
router.get('/contas/:id', ContaController.pegaUmaConta);
router.post('/contas', ContaController.criaConta);
router.put('/contas/:id', ContaController.atualizaConta);
router.delete('/contas/:id', ContaController.apagaConta);

module.exports = router