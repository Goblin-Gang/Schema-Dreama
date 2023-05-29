//require mongoose
const mongoose = require('mongoose');


//declare Schema
const Schema = mongoose.Schema;



// declare login schema
const userSchema = new Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

// create model for loginSchema

module.exports = mongoose.model('userSchema', userSchema)