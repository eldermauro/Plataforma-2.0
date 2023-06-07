const { Router } = require('express');
const loteFinalController = require('../controllers/LoteFinalController');

const router = Router()

router.get('/loteFinal', loteFinalController.pegaTodosOsLotesFinal);
router.get('/loteFinal/:id', loteFinalController.pegaUmLoteFinal);
router.post('/loteFinal', loteFinalController.criaLoteFinal);
router.put('/loteFinal/:id', loteFinalController.atualizaLoteFinal);
router.delete('/loteFinal/:id', loteFinalController.apagaLoteFinal);

module.exports = router