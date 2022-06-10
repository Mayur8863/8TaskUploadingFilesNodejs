const mongoose = require("mongoose");

const dbConnection = async () =>{
    const connect = await mongoose.connect("mongodb://localhost:27017/fileUploads");
    if(connect) {
        console.log("Db Connected");
    }
    else{
        console.log("Not connected");
    }
}

module.exports = dbConnection;