const database = require('../models')

class contaController {
    static async pegaTodasAsContas(req, res){
        try{
            const todasAsContas = await database.Contas.findAll()
            return res.status(200).json(todasAsContas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaConta(req,res) {
        const {id} = req.params
        try {
            const umaConta = await database.Contas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaConta)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaConta(req, res) {
        const novaConta = req.body
        console.log(novaConta)
        try {
            const novaContaCriada = await database.Contas.create(novaConta)
            return res.status(200).json(novaContaCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaConta(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Contas.update(novasInfos, { where: {id: Number(id)} })
            const contaAtualizada = await database.Contas.findOne({where: {id: Number(id)}})
            return res.status(200).json(contaAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaConta(req, res){
        const {id} = req.params
        try{
            await database.Contas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = contaController