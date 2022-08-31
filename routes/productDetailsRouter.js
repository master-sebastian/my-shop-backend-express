const express = require('express')
const router = express.Router()
const productDetailsModel =  require('../models/productDetailsModel')

router.get("/create", async (req, res) => {
    const {estado,id_product,id_colors,id_measurescategory} = req.query;
    try{
        const productDetail = new productDetailsModel();
        productDetail.estado = estado
        productDetail.id_product = id_product
        productDetail.id_colors = id_colors
        productDetail.id_measurescategory = id_measurescategory
        const consult = await productDetail.save()
        res.json({ consult })
    }catch(e){
        res.json({error: "error al tratar de crear un image_product"})
    }
    
})

router.get("/", async (req, res) => {
    const productDetails = await productDetailsModel.find({})
    res.json(  productDetails)
})

module.exports = router