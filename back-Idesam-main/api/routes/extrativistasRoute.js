const { Router } = require('express');
const ExtrativistaController = require('../controllers/ExtrativistaController');

const router = Router()

router.get('/extrativistas', ExtrativistaController.pegaTodosOsExtrativistas);
router.get('/extrativistas/:id', ExtrativistaController.pegaUmExtrativista);
router.post('/extrativistas', ExtrativistaController.criaExtrativista);
router.put('/extrativistas/:id', ExtrativistaController.atualizaExtrativista);
router.delete('/extrativistas/:id', ExtrativistaController.apagaExtrativista);

module.exports = router