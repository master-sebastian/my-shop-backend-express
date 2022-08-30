const express = require('express')
const router = express.Router()
const productsModel =  require('../models/productsModel')

router.get("/create", async (req, res) => {
    const {name, price, amount, description} = req.query;
    const product = new productsModel();
    product.name = name
    product.price = price
    product.amount = amount
    product.description = description
    const consult = await product.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const products = await productsModel.find({})
    console.log(products)
    res.json(  products )
})

module.exports = router