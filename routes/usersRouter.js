const express = require('express')
const router = express.Router()
const usersModel =  require('../models/usersModel.js')

router.get("/create", async (req, res) => {
    const {name, password} = req.query;
    const user = new usersModel();
    user.name = name
    user.password = password
    user.toke = null
    const consult = await user.save()
    res.json({ consult })
})

router.get("/", async (req, res) => {
    const users = await usersModel.find({})
    console.log(users)
    res.json(  users )
})

module.exports = router