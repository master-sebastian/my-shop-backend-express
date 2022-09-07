const measuresCategoriesModel =  require('../models/measuresCategoriesModel')
const mongoose =  require('mongoose')

class MeasuresCategoriesServices {
    static async create(req, res) {
        const {name,id_category,id_colors,id_measuretype} = req.body;
        try{
            const measuresCategories = new measuresCategoriesModel();
            measuresCategories.name = name
            measuresCategories.id_category = mongoose.Types.ObjectId(id_category)
            measuresCategories.id_colors = mongoose.Types.ObjectId(id_colors)
            measuresCategories.id_measuretype = mongoose.Types.ObjectId(id_measuretype)
            const consult = await measuresCategories.save()
            res.json({ consult })
        }catch(e){
            res.json({error: "error al tratar de crear un measuresCategories"})
    }
    }

    static async get(req, res) {
        try{
            const measuresCategories = await measuresCategoriesModel.find({})
            console.log(measuresCategories)
            res.json(  measuresCategories )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los measuresCategories"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const measuresCategori = await measuresCategoriesModel.findById(id)
            console.log( measuresCategori )
            res.status(200).json(  measuresCategori )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el measuresCategories por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const measuresCategori = await measuresCategoriesModel.findByIdAndDelete(id)
            res.status(200).json(  measuresCategori )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el measuresCategories"})
        }
    }


}



module.exports = MeasuresCategoriesServices