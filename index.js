require('dotenv').config()

const express = require("express")
const mongojs = require("./lib/mongodb")
const app = express()

const port = process.env.PORT || 3000
const authAccess = require("./middleware/verifyToken")
app.use(express.json());

(async () => {
    await mongojs.connect()
    const prefix_v1 = "/api/v1/" 
    app.use(prefix_v1 + "products", authAccess, require("./routes/productsRouter"))
    app.use(prefix_v1 + "users", authAccess, require("./routes/usersRouter"))
    app.use(prefix_v1 + "auth", require("./routes/authRouter"))
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