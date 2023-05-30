//require mongoose
const mongoose = require('mongoose');


//declare Schema
const Schema = mongoose.Schema;

const formSchema = new Schema ({

    //follow up with frontend team to confirm
    title:  {type: String, required: true},
    schemaSchema: {type: String, required: true}



});



//create model for the schema collection above
module.exports = mongoose.model('formSchema', formSchema);






// {"_id":{"$oid":"6472390fdbeb9b56b2f98835"},"schemaSchema":"sample schema","title":"Goblin Schema"}