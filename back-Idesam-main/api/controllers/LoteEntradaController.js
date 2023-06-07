const database = require('../models')

class loteEntradaController {
    static async pegaTodosOsLotesEntrada(req, res){
        try{
            const todasOsLoteEntradas = await database.Lote_de_entradas.findAll()
            return res.status(200).json(todasOsLoteEntradas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmLoteEntrada(req,res) {
        const {id} = req.params
        try {
            const umLoteEntrada = await database.Lote_de_entradas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umLoteEntrada)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLoteEntrada(req, res) {
        const novoLoteEntrada = req.body
        try {
            const novoLoteEntradaCriada = await database.Lote_de_entradas.create(novoLoteEntrada)
            return res.status(200).json(novoLoteEntradaCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaLoteEntrada(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Lote_de_entradas.update(novasInfos, { where: {id: Number(id)} })
            const LoteEntradaAtualizada = await database.Lote_de_entradas.findOne({where: {id: Number(id)}})
            return res.status(200).json(LoteEntradaAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaLoteEntrada(req, res){
        const {id} = req.params
        try{
            await database.Lote_de_entradas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = loteEntradaController