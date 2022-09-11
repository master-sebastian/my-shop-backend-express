const productsCategoriesModel =  require('../models/productsCategoriesModel')
const mongoose =  require('mongoose')


class ProductsCategoriesServices {
    static async create(req, res) {
        const {id_measurescategory,id_product} = req.body;
        try{
            const productsCategories = new productsCategoriesModel();
            productsCategories.id_measurescategory = mongoose.Types.ObjectId(id_measurescategory)
            productsCategories.id_product = mongoose.Types.ObjectId(id_product)
            const consult = await productsCategories.save()
            res.json({ consult })
        }catch(e){
            res.json({error: "error al tratar de crear un productsCategories"})
    }
    }

    static async get(req, res) {
        try{
            const productsCategoriess = await productsCategoriesModel.find({})
            console.log(productsCategoriess)
            res.json(  productsCategoriess )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los productsCategories"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const productsCategories = await productsCategoriesModel.findById(id)
            console.log( productsCategories )
            res.status(200).json(  productsCategories )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el productsCategories por el id ingresado"} )
        }
    }

    static async editById(req, res) {
        const { id } = req.params
        const {id_measurescategory,id_product} = req.body;
        try{
            const productsCategories = await productsCategoriesModel.findById(id)
            productsCategories.id_measurescategory = mongoose.Types.ObjectId(id_measurescategory)
            productsCategories.id_product = mongoose.Types.ObjectId(id_product)
            const consult = await productsCategories.save()
            res.json( consult )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de modificar el productsCategories por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const productsCategories = await productsCategoriesModel.findByIdAndDelete(id)
            res.status(200).json(  productsCategories )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el productsCategories"})
        }
    }


}



module.exports = ProductsCategoriesServices