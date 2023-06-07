const database = require('../models')

class maquinaController {
    static async pegaTodasAsMaquinas(req, res){
        try{
            const todasAsMaquinas = await database.Maquinas.findAll()
            return res.status(200).json(todasAsMaquinas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMaquina(req,res) {
        const {id} = req.params
        try {
            const umaMaquina = await database.Maquinas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaMaquina)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaMaquina(req, res) {
        const novaMaquina = req.body
        try {
            const novaMaquinaCriada = await database.Maquinas.create(novaMaquina)
            return res.status(200).json(novaMaquinaCriada)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaMaquina(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Maquinas.update(novasInfos, { where: {id: Number(id)} })
            const MaquinaAtualizada = await database.Maquinas.findOne({where: {id: Number(id)}})
            return res.status(200).json(MaquinaAtualizada)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//
    static async apagaMaquina(req, res){
        const {id} = req.params
        try{
            await database.Maquinas.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = maquinaController