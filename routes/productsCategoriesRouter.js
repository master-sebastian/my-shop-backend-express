const express = require('express')
const router = express.Router()
const productsCategoriesModel =  require('../models/productsCategoriesModel')
const mongoose = require('mongoose');
router.get("/create", async (req, res) => {
    
    const {id_category,id_product} = req.query;
    
    try{
        const productCategory = new productsCategoriesModel();
        productCategory.id_category = mongoose.Types.ObjectId(id_category)
        productCategory.id_product = mongoose.Types.ObjectId(id_product)
        const consult = await productCategory.save()
        res.json({ consult })
    }catch(e){
        res.json({error: "error al tratar de crear un image_product"})
    }
    
})

router.get("/", async (req, res) => {
    const productCategories = await productsCategoriesModel.find({})
    res.json(  productCategories)
})

module.exports = router