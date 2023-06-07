const database = require('../models')

class extrativistaController {
    static async pegaTodosOsExtrativistas(req, res){
        try{
            const todosOsExtrativistas = await database.Extrativistas.findAll()
            return res.status(200).json(todosOsExtrativistas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmExtrativista(req,res) {
        const {id} = req.params
        try {
            const umExtrativista = await database.Extrativistas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umExtrativista)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaExtrativista(req, res) {
        const novoExtrativista = req.body
        try {
            const novoExtrativistaCriado = await database.Extrativistas.create(novoExtrativista)
            return res.status(200).json(novoExtrativistaCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaExtrativista(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Extrativistas.update(novasInfos, { where: {id: Number(id)} })
            const extrativistaAtualizado = await database.Extrativistas.findOne({where: {id: Number(id)}})
            return res.status(200).json(extrativistaAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaExtrativista(req, res){
        const {id} = req.params
        try{
            await database.Extrativistas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = extrativistaController