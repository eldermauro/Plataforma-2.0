const database = require('../models')

class pedidoController {
    static async pegaTodosOsPedidos(req, res){
        try{
            const todosOsPedidos = await database.Pedidos.findAll()
            return res.status(200).json(todosOsPedidos)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPedido(req,res) {
        const {id} = req.params
        try {
            const umPedido = await database.Pedidos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umPedido)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaPedido(req, res) {
        const novoPedido = req.body
        try {
            const novoPedidoCriado = await database.Pedidos.create(novoPedido)
            return res.status(200).json(novoPedidoCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaPedido(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Pedidos.update(novasInfos, { where: {id: Number(id)} })
            const pedidoAtualizado = await database.Pedidos.findOne({where: {id: Number(id)}})
            return res.status(200).json(pedidoAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaPedido(req, res){
        const {id} = req.params
        try{
            await database.Pedidos.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = pedidoController