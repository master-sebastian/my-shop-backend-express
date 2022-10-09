const colorsModel =  require('../models/colorsModel')

class ColorsService {
    
    static async create(req, res) {
        const {name, hex_code} = req.body;
        try{
            const color = new colorsModel();
            color.name = name
            color.hex_code = hex_code
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

    static async getById(req, res) {
        const { id } = req.params
        try{
            const color = await colorsModel.findById(id)
            console.log( color )
            res.status(200).json(  color )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el color por el id ingresado"} )
        }
    }

    static async editById(req, res) {
        const { id } = req.params
        const {name, hex_code} = req.body;
        try{
            const color = await colorsModel.findById(id)
            color.name = name
            color.hex_code = hex_code
            const consult = await color.save()
            res.status(201).json( consult )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de modificar el color por el id ingresado"} )
        }
    }    

    static async delete (req, res) {
        const { id } = req.params
        try{
            const color = await colorsModel.findByIdAndDelete(id)
            res.status(200).json(  color )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el color"})
        }
    }
}


module.exports = ColorsService 