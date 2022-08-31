const express = require('express')
const router = express.Router()
const companyParametersModel =  require('../models/companyParametersModel')

router.get("/create", async (req, res) => {
    const {name,id_colors,id_measuretype} = req.query;
    const companyParameter = new companyParametersModel();
    companyParameter.name = name
    companyParameter.id_colors = id_colors
    companyParameter.id_measuretype = id_measuretype
    const consult = await companyParameter.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const companyParameters = await companyParametersModel.find({})
    res.json(  companyParameters)
})

module.exports = router