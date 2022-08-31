require('dotenv').config()

const express = require("express")
const mongojs = require("./lib/mongodb")
const app = express()

const port = process.env.PORT || 3000

app.use(express.json());

(async () => {
    await mongojs.connect()
    app.use("/products", require("./routes/productsRouter"))
    app.use("/users", require("./routes/usersRouter"))
    app.use("/measuresCategories", require("./routes/measuresCategoriesRouter"))
    app.use("/categories", require("./routes/categoriesRouter"))
    app.use("/colors", require("./routes/colorsRouter"))
    app.use("/image_products", require("./routes/imageProductsRouter"))
    app.use("/product_details", require("./routes/productDetailsRouter"))
    app.use("/products_category", require("./routes/productsCategoriesRouter"))
    app.use("/company_parameters", require("./routes/companyParametersRouter"))
    app.use("/type_measures", require("./routes/typeMeasuresRouter"))
})()


process.on('SIGINT', () => {
    mongojs.disconnect().then((connectionState) => {
    console.log('Database disconnect, connection state:', connectionState)
    console.log('Closing process')
    process.exit(0)
    })
})

app.listen(port, ()=>{
    console.log(`Run app in the ${process.env.HOST}:${port}`)
})