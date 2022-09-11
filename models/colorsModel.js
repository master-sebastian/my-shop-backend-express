const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    name: {type: String, required: true},
    hex_code: {type: String, required: true}
}, { versionKey: false });

const model = mongose.model("colors", schema);

module.exports = model