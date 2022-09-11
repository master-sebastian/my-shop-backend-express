const mongose = require("mongoose");

const { Schema } = mongose;


const schema = new Schema({
    name: {type: String, required: true},
}, { versionKey: false });

const model = mongose.model("categories", schema);

module.exports = model