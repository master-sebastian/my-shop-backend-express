const mongose = require("mongoose");
const { Schema } = mongose;

const schema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    toke: {type: String, required: false}
}, { versionKey: false });

const model = mongose.model("users", schema);

module.exports = model