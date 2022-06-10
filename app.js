const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const userImageRoutes = require("./routes/userImage");
app.use("/user/image",userImageRoutes);

module.exports = app;