const express = require('express')
const router = express.Router()

const ProductsService = require('./../services/ProductsServices')

router.post("/", ProductsService.create)

router.get("/", ProductsService.get)

router.get("/:id", ProductsService.getById )

router.delete("/:id", ProductsService.delete )

module.exports = router