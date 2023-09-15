const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema({
    name : {type: String, required: true},
    phone : {type: String, required: true},
    email : {type: String, required: true},
    message : {type: String, required: true},
    date : String,
    time : String,
});

mongoose.models = {};
export default mongoose.model("Contact", contactSchema);