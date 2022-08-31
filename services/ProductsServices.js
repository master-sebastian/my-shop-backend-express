const productsModel =  require('../models/productsModel')

class ProductsService {
    static async create(req, res) {
        const {name, price, amount, description} = req.body;
        try{
            const product = new productsModel();
            product.name = name
            product.price = price
            product.amount = amount
            product.description = description
            const consult = await product.save()
            res.json({ consult })
        }catch(e){
            res.status(500).json({error: "Algo salio mal al crear el producto"})
        }
    }

    static async get(req, res) {
        try{
            const products = await productsModel.find({})
            console.log(products)
            res.json(  products )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los productos"})
        }
    }


}



module.exports = ProductsService