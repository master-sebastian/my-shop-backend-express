const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log("dede")
    res.json({
        name: "Ropa",
        price: 123
    })
})

module.exports = router