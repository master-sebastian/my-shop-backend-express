const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    name: {type: String, required: true},
    valor: {type: String, required: true},
    tipo: {type: String, required: true},
}, { versionKey: false });

const model = mongose.model("company_parameters", schema);

module.exports = model