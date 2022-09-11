const mongose = require("mongoose");
const { Schema } = mongose;
//const categories =  require('./categoriesModel')

const schema = new Schema({
    name: {type: String, required: true},
    id_category: {type:Schema.ObjectId , required: true, ref: 'categories' },
    id_colors: {type:Schema.ObjectId , required: true, ref: 'colors' },
    id_measuretype: {type:Schema.ObjectId , required: true, ref: 'type_measures'},
}, { versionKey: false });

const model = mongose.model("measures_categories", schema);

module.exports = model