const database = require('../models')

class coletaController {
    static async pegaTodasAsColetas(req, res){
        try{
            const todasAsColetas = await database.Coletas.findAll()
            return res.status(200).json(todasAsColetas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaColeta(req,res) {
        const {id} = req.params
        try {
            const umaColeta = await database.Coletas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaColeta)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaColeta(req, res) {
        const novaColeta = req.body
        console.log(novaColeta)
        try {
            const novaColetaCriada = await database.Coletas.create(novaColeta)
            return res.status(200).json(novaColetaCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaColeta(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Coletas.update(novasInfos, { where: {id: Number(id)} })
            const coletaAtualizada = await database.Coletas.findOne({where: {id: Number(id)}})
            return res.status(200).json(coletaAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaColeta(req, res){
        const {id} = req.params
        try{
            await database.Coletas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = coletaController