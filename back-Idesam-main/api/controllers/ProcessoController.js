const database = require('../models')

class processoController {
    static async pegaTodosOsProcessos(req, res){
        try{
            const todosOsProcessos = await database.Processos.findAll()
            return res.status(200).json(todosOsProcessos)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmProcesso(req,res) {
        const {id} = req.params
        try {
            const umProcesso = await database.Processos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProcesso)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaProcesso(req, res) {
        const novoProcesso = req.body
        try {
            const novoProcessoCriado = await database.Processos.create(novoProcesso)
            return res.status(200).json(novoProcessoCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaProcesso(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Processos.update(novasInfos, { where: {id: Number(id)} })
            const ProcessoAtualizado = await database.Processos.findOne({where: {id: Number(id)}})
            return res.status(200).json(ProcessoAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaProcesso(req, res){
        const {id} = req.params
        try{
            await database.Coletas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = processoController