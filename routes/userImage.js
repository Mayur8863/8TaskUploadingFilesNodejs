const router = require("express").Router();
const controllers = require("../controllers/userImageController")
const upload = require("../middlewares/upload")

router.get("/",controllers.userImageGet);
router.post("/test",upload.single('image'),controllers.userImagePost);

module.exports= router;

