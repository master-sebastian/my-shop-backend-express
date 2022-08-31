const express = require('express')
const router = express.Router()
const image_productsModel =  require('../models/imageProductsModel')

router.get("/create", async (req, res) => {
    const {url,id_productdetail} = req.query;
    try{
        const image_product = new image_productsModel();
        image_product.url = url
        image_product.id_productdetail = id_productdetail
        const consult = await image_product.save()
        res.json({ consult })
    }catch(e){
        res.json({error: "error al tratar de crear un image_product"})
    }
    
})

router.get("/", async (req, res) => {
    const image_products = await image_productsModel.find({})
    res.json(  image_products)
})

module.exports = router