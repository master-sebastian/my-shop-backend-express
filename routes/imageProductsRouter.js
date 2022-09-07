const express = require('express')

const router = express.Router()

const ImageProductsRouter = require("../services/ImageProductsRouter")

router.post("/", ImageProductsRouter.create )

router.get("/", ImageProductsRouter.get )

router.get("/:id", ImageProductsRouter.getById )

router.delete("/:id", ImageProductsRouter.delete )

module.exports = router