const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    ci:Number,
    firstName:String,
    lastName:String,
    email:String    
});
module.exports = mongoose.model('client', clientSchema);