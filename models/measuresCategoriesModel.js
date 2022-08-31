const mongose = require("mongoose");
const { Schema } = mongose;


const schema = new Schema({
    name: {type: String, required: true},
    id_category: {type:Schema.ObjectId , required: true},
    id_colors: {type:Schema.ObjectId , required: true},
    id_measuretype: {type:Schema.ObjectId , required: true},
}, { versionKey: false });

const model = mongose.model("measures_categories", schema);

module.exports = model