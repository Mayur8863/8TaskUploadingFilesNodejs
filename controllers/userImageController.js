const UserImage = require("../models/userImageModel");
const userImageGet = (req,res)=>{
    res.send("userImageGet");
}
const userImagePost = (req,res)=>{

    // res.send("userImagePost");
    const user = new UserImage({
        name : req.body.name,
        date : req.body.date,
    });
    if(req.file){
        user.path = req.file.path
    }
    user.save(err => {
        if(!err ) return res.send(`Sucess ${user}`);
        res.send("Failed Image Upload")
    });
}



module.exports = {
    userImageGet : userImageGet,
    userImagePost : userImagePost,
}