require('dotenv').config()

const express = require("express")
const mongojs = require("./lib/mongodb")
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000

const authAccess = require("./middleware/verifyToken")
var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

(async () => {
    await mongojs.connect()
    const prefix_v1 = "/api/v1/" 
    app.use(prefix_v1 + "auth", require("./routes/authRouter"))
    app.use(prefix_v1 + "users", authAccess, require("./routes/usersRouter"))
    app.use( prefix_v1 + "categories", authAccess, require("./routes/categoriesRouter"))
    app.use( prefix_v1 + "type_measures", authAccess, require("./routes/typeMeasuresRouter"))
    app.use(prefix_v1 + "products", authAccess, require("./routes/productsRouter"))
    app.use( prefix_v1 + "colors", authAccess, require("./routes/colorsRouter"))
    app.use( prefix_v1 + "measuresCategories", authAccess, require("./routes/measuresCategoriesRouter"))
    app.use( prefix_v1 + "image_products",authAccess, require("./routes/imageProductsRouter"))
    app.use( prefix_v1 + "product_details", authAccess, require("./routes/productDetailsRouter"))
    app.use( prefix_v1 + "products_category", authAccess, require("./routes/productsCategoriesRouter"))
    app.use( prefix_v1 + "company_parameters", authAccess, require("./routes/companyParametersRouter"))
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
