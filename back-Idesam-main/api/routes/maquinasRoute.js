const { Router } = require('express');
const MaquinaController = require('../controllers/MaquinaController');

const router = Router()

router.get('/maquinas', MaquinaController.pegaTodasAsMaquinas);
router.get('/maquinas/:id', MaquinaController.pegaUmaMaquina);
router.post('/maquinas', MaquinaController.criaMaquina);
router.put('/maquinas/:id', MaquinaController.atualizaMaquina);
router.delete('/maquinas/:id', MaquinaController.apagaMaquina);

module.exports = router