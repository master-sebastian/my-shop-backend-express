const categoriesModel =  require('../models/categoriesModel')

class CategoriesService{
    
    static async create(req, res) {
        const {name} = req.body;
        try{
            const category = new categoriesModel();
            category.name = name
            const consult = await category.save()
            res.status(201).json( consult )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al crear la categoria"})
        }
    }

    static async get(req, res) {
        try{
            const categories = await categoriesModel.find({})
            res.status(200).json( categories )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar las categorias"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const categorie = await categoriesModel.findById(id)
            console.log( categorie )
            res.status(200).json(  categorie )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el categorie por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const categorie = await categoriesModel.findByIdAndDelete(id)
            res.status(200).json(  categorie )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el categorie"})
        }
    }
}


module.exports = CategoriesService