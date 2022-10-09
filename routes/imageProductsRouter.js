const express = require('express')

const router = express.Router()

const ImageProductsService = require("./../services/ImageProductsService")

router.post("/", ImageProductsService.create )

router.get("/", ImageProductsService.get )

router.get("/:id", ImageProductsService.getById )

router.put("/:id", ImageProductsService.editById )

router.delete("/:id", ImageProductsService.delete )

module.exports = router