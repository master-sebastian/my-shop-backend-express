const express = require('express')
const router = express.Router()
const measuresCategories =  require('../models/measuresCategoriesModel')


router.get("/create", async (req, res) => {
    const {id_category,valor,tipo} = req.query;
    const measuresCategories = new measuresCategoriesModel();
    measuresCategories.name = name
    measuresCategories.valor = valor
    measuresCategories.tipo = tipo
    const consult = await measuresCategories.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const measuresCategory = await measuresCategoriesModel.find({})
    console.log(measuresCategory)
    res.json(  measuresCategory )
})

module.exports = router