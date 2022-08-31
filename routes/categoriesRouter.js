const express = require('express')
const router = express.Router()
const categoriesModel =  require('../models/categoriesModel')

router.get("/create", async (req, res) => {
    const {name} = req.query;
    const category = new categoriesModel();
    category.name = name
    const consult = await category.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const categories = await categoriesModel.find({})
    res.json(  categories)
})

module.exports = router