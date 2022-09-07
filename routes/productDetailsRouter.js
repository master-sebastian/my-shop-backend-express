const express = require('express')
const router = express.Router()

const ProductDetailsService = require('./../services/ProductDetailsService')

router.post("/", ProductDetailsService.create)

router.get("/", ProductDetailsService.get)

router.get("/:id", ProductDetailsService.getById )

router.delete("/:id", ProductDetailsService.delete )

module.exports = router