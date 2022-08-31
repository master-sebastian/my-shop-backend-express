const express = require('express')
const router = express.Router()

const ProductsService = require('./../services/ProductsServices')

router.post("/", ProductsService.create)

router.get("/", ProductsService.get)

module.exports = router