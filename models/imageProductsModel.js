const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    url: {type: String, required: true},
    id_products: { type: Schema.Types.ObjectId, ref: "products"}
}, { versionKey: false });

const model = mongose.model("image_products", schema);

module.exports = model