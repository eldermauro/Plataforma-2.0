const database = require('../models')

class loteFinalController {
    static async pegaTodosOsLotesFinal(req, res){
        try{
            const todasOsLoteFinals = await database.lote_final.findAll()
            return res.status(200).json(todasOsLoteFinals)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmLoteFinal(req,res) {
        const {id} = req.params
        try {
            const umLoteFinal = await database.lote_final.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umLoteFinal)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLoteFinal(req, res) {
        const novoLoteFinal = req.body
        try {
            const novoLoteFinalCriada = await database.lote_final.create(novoLoteFinal)
            return res.status(200).json(novoLoteFinalCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaLoteFinal(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.lote_final.update(novasInfos, { where: {id: Number(id)} })
            const LoteFinalAtualizada = await database.lote_final.findOne({where: {id: Number(id)}})
            return res.status(200).json(LoteFinalAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaLoteFinal(req, res){
        const {id} = req.params
        try{
            await database.lote_final.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = loteFinalController