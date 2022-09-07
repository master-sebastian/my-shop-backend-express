const productDetailsModel =  require('../models/productDetailsModel')
const mongoose =  require('mongoose')


class ProductDetailsService {
    static async create(req, res) {
        const {estado,id_product,id_colors,id_measurescategory} = req.body;
        try{
            const productDetails = new productDetailsModel();
            productDetails.estado = (estado === 'true')
            productDetails.id_product = mongoose.Types.ObjectId(id_product)
            productDetails.id_colors = mongoose.Types.ObjectId(id_colors)
            productDetails.id_measurescategory = mongoose.Types.ObjectId(id_measurescategory)
            const consult = await productDetails.save()
            res.json({ consult })
        }catch(e){
            res.json({error: "error al tratar de crear un productDetailss"})
    }
    }

    static async get(req, res) {
        try{
            const productDetailss = await productDetailsModel.find({})
            console.log(productDetailss)
            res.json(  productDetailss )
        }catch(e){
            res.status(500).json({error: "Algo salio mal al listar los productDetailss"})
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const productDetails = await productDetailsModel.findById(id)
            console.log( productDetails )
            res.status(200).json(  productDetails )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el productDetailss por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const productDetails = await productDetailsModel.findByIdAndDelete(id)
            res.status(200).json(  productDetails )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el productDetailss"})
        }
    }


}



module.exports = ProductDetailsService