const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    estado: {type: Boolean, required: true},
    id_product: {type:Schema.ObjectId , required: true},
    id_colors: {type:Schema.ObjectId , required: true},
    id_measurescategory: {type:Schema.ObjectId , required: true}
}, { versionKey: false });

const model = mongose.model("product_details", schema);

module.exports = model