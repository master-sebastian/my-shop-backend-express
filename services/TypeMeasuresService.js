
const typeMeasuresModel =  require('../models/typeMeasuresModel')

class TypeMeasuresService {
    
    static async create(req, res) {
        const {name} = req.body;
        try{
            const typeMeasures = new typeMeasuresModel();
            typeMeasures.name = name
            const consult = await typeMeasures.save()
            res.status(201).json({ consult })
        }catch(e){
            res.status(500).json({error: "Algo salio mal al crear el tipo de medida"})
        }
    }

    static async get(req, res) {
        try{
            const typeMeasuress = await typeMeasuresModel.find({})
            res.status(200).json(typeMeasuress)
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los tipos de medida"})
        }
    }
}

module.exports = TypeMeasuresService