const express = require('express')
const router = express.Router()
const colorsModel =  require('../models/colorsModel')

router.get("/create", async (req, res) => {
    const {name} = req.query;
    const color = new colorsModel();
    color.name = name
    const consult = await color.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const colors = await colorsModel.find({})
    res.json(  colors)
})

module.exports = router