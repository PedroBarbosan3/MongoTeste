const { json } = require('stream/consumers');
const TesteModel = require('../Models/TesteModel')

class TesteController{
    async criar(req, res){
        const createdTeste = await TesteModel.create(req.body);
        return res.status(200).json(createdTeste)
    }

    async listar(req, res){
        const teste = await TesteModel.find();
        return res.status(200).json(teste);
    }
}

module.exports = new TesteController();