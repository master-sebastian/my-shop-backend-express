const colorsModel =  require('../models/colorsModel')

class ColorsService {
    
    static async create(req, res) {
        const {name} = req.body;
        try{
            const color = new colorsModel();
            color.name = name
            const consult = await color.save()
            res.status(201).json( consult )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al crear el color"})
        }
    }

    static async get(req, res) {
        try{
            const colors = await colorsModel.find({})
            res.status(200).json( colors )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los colores"})
        }
    }
}


module.exports = ColorsService 