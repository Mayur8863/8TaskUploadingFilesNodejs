const mongoose = require("mongoose");
const userImageSchema = new mongoose.Schema({
    name: String,
    path : {type: String, required:true},
    date : {type: Date, default:Date.now()},
})

module.exports = mongoose.model("userImage",userImageSchema);