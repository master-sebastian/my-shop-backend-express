const mongose = require("mongoose");
const { Schema } = mongose;

const schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    id_measurescategory: {type:Schema.ObjectId , required: true},
    estado: {type: Boolean, required: true},
    all_images: [ {type: Schema.Types.ObjectId, ref: "image_products" } ]
}, { versionKey: false });

const model = mongose.model("products", schema);

module.exports = model