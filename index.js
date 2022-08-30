require('dotenv').config()

const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use("/products", require("./routes/productsRouter"))


app.listen(port, ()=>{
    console.log(`Run app in the ${process.env.HOST}:${port}`)
})