const imageProductsModel =  require('../models/imageProductsModel')
const productsModel =  require('../models/productsModel')
const mongoose =  require('mongoose')
class ProductsService {
    static async create(req, res) {
        const {name, price, amount, description, id_measurescategory, estado} = req.body;
        try{
            const product = new productsModel();
            product.name = name
            product.price = price
            product.amount = amount
            product.description = description
            product.id_measurescategory = mongoose.Types.ObjectId(id_measurescategory)
            product.estado = estado
            const consult = await product.save()
            res.json({ consult })
        }catch(e){
            res.status(500).json({error: "Algo salio mal al crear el producto"})
        }
    }

    static async get(req, res) {
        try{
            const products = await productsModel.find({}).populate("all_images")
            let i = 0;
            while(i < products.length){
                const image_products = await imageProductsModel.find({id_product: products[i]['_id']})
                products[i]['all_images'] = image_products
                i++
            }
            console.log(products)
            
            res.json(  products )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los productos"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const product = await productsModel.findById(id)
            console.log( product )
            res.status(200).json(  product )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el product por el id ingresado"} )
        }
    }

    static async editById(req, res) {
        const { id } = req.params
        const {name, price, amount, description, id_measurescategory, estado} = req.body;
        try{
            const product = await productsModel.findById(id)
            product.name = name
            product.price = price
            product.amount = amount
            product.description = description
            product.id_measurescategory = mongoose.Types.ObjectId(id_measurescategory)
            product.estado = estado
            const consult = await product.save()
            res.json( consult )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de modificar el product por el id ingresado"} )
        }
    }


    static async delete (req, res) {
        const { id } = req.params
        try{
            const product = await productsModel.findByIdAndDelete(id)
            res.status(200).json(  product )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el product"})
        }
    }


}



module.exports = ProductsService