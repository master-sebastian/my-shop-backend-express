
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

    static async getById(req, res) {
        const { id } = req.params
        try{
            const typeMeasures = await typeMeasuresModel.findById(id)
            console.log( typeMeasures )
            res.status(200).json(  typeMeasures )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el typeMeasures por el id ingresado"} )
        }
    }

    static async editById(req, res) {
        const { id } = req.params
        const {name} = req.body;
        try{
            const typeMeasures = await typeMeasuresModel.findById(id)
            typeMeasures.name = name
            const consult = await typeMeasures.save()
            res.status(201).json( consult )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de modificar el typeMeasures por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const typeMeasures = await typeMeasuresModel.findByIdAndDelete(id)
            res.status(200).json(  typeMeasures )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el typeMeasures"})
        }
    }
}

module.exports = TypeMeasuresService