var express = require("express");
var router = express.Router();
var controller = require("../controllers/postController");
var posts = require("../modules/posts");
const upload = multer({ dest: 'public/images/'})

/* GET users listing. */
router.get("/agregarPost", controller.showAgregarPost);
router.post("/agregarPost", upload.single('image'), controller.store);
router.get("/detallePost/:id", controller.showDetallePost);

module.exports = router;
