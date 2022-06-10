const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads/')
    }, 
    filename: (req,file,cb)=>{
        let ext =path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})

var upload = multer({
    storage : storage,
    fileFilter: (req,file,callback)=>{
        // if(file.mimetype === "application/pdf" ){
        //     callback(null,true)
        // }
        if(file.mimetype === "text/csv" ){
            callback(null,true)
        }
        // if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
        //     callback(null,true)
        // }
        else{
            console.log('only jpg & png allowed');
            callback(null,false);
        }
    }
})
module.exports  = upload;