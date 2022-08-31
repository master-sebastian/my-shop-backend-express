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
            res.json( categories )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar las categorias"})
        }
    }
}


module.exports = CategoriesService