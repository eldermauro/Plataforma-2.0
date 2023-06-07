const database = require('../models')

class funcionarioController {
    static async pegaTodosOsFuncionarios(req, res){
        try{
            const todosOsFuncionarios = await database.Funcionarios.findAll()
            return res.status(200).json(todosOsFuncionarios)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmFuncionario(req,res) {
        const {id} = req.params
        try {
            const umFuncionario = await database.Funcionarios.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umFuncionario)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaFuncionario(req, res) {
        const novoFuncionario = req.body
        try {
            const novoFuncionarioCriado = await database.Funcionarios.create(novoFuncionario)
            return res.status(200).json(novoFuncionarioCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaFuncionario(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Funcionarios.update(novasInfos, { where: {id: Number(id)} })
            const funcionarioAtualizado = await database.Funcionarios.findOne({where: {id: Number(id)}})
            return res.status(200).json(funcionarioAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaFuncionario(req, res){
        const {id} = req.params
        try{
            await database.Funcionarios.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = funcionarioController