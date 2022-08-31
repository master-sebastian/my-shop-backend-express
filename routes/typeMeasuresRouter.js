const express = require('express')
const router = express.Router()
const typeMeasuresModel =  require('../models/typeMeasuresModel')

router.get("/create", async (req, res) => {
    const {name} = req.query;
    const typeMeasures = new typeMeasuresModel();
    typeMeasures.name = name
    const consult = await typeMeasures.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const typeMeasuress = await typeMeasuresModel.find({})
    console.log(typeMeasuress)
    res.json(  typeMeasuress )
})

module.exports = router