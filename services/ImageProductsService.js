const imageProductsModel =  require('../models/imageProductsModel')
const mongoose =  require('mongoose')

class ImageProductsService {
    static async create(req, res) {
        const {url,id_products} = req.body;
        try{
            const image_product = new imageProductsModel();
            image_product.url = url
            image_product.id_products = mongoose.Types.ObjectId(id_products)
            const consult = await image_product.save()
            res.json({ consult })
        }catch(e){
            res.json({error: "error al tratar de crear un image_product"})
        }
    }

    static async get(req, res) {
        try{
            const image_products = await imageProductsModel.find({})
            console.log(image_products)
            res.json(  image_products )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los productos"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const image_product = await imageProductsModel.findById(id)
            console.log( image_product )
            res.status(200).json(  image_product )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el product por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const image_product = await imageProductsModel.findByIdAndDelete(id)
            res.status(200).json(  image_product )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el product"})
        }
    }


}



module.exports = ImageProductsService