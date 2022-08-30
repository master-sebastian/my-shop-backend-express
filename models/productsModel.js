const mongose = require("mongoose");
const { Schema } = mongose;

const schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true},
    description: {type: String, required: true}
}, { versionKey: false });

const model = mongose.model("Products", schema);

module.exports = model