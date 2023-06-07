const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');

const router = Router()

router.get('/pedidos', PedidoController.pegaTodosOsPedidos);
router.get('/pedidos/:id', PedidoController.pegaUmPedido);
router.post('/pedidos', PedidoController.criaPedido);
router.put('/pedidos/:id', PedidoController.atualizaPedido);
router.delete('/pedidos/:id', PedidoController.apagaPedido);

module.exports = router