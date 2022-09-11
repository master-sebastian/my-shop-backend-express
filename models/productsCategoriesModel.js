const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    id_measurescategory: {type:Schema.ObjectId , required: true},
    id_product: {type:Schema.ObjectId , required: true}
}, { versionKey: false });

const model = mongose.model("products_categories", schema);

module.exports = model