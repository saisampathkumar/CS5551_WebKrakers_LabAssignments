const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const drug_schema =new Schema({}, { strict: false });
const product_schema = new Schema({
    drugname : String,
    drugdescription: String,
    class: String,
    subclass:String,
    formofdosage:String,
    strength: String,
    absorption: String,
    quantityWhenNew: String,
    quantityCollected: String,
    eventName: String,
    eventDate: String,
    eventAddress: String,
    eventZipcode: Number,
    created_on:Date,
    updated_on:Date
});
module.exports =  mongoose.model('drug', drug_schema);
module.exports =  mongoose.model('products', product_schema);