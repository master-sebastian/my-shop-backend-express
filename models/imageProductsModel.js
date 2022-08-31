const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    url: {type: String, required: true},
    id_productdetail: {type:Schema.ObjectId , required: true}
}, { versionKey: false });

const model = mongose.model("image_products", schema);

module.exports = model