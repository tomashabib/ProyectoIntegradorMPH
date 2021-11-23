var express = require("express");
var router = express.Router();
var controller = require("../controllers/postController");
var posts = require("../modules/posts");
const multer = require("multer");
const upload = multer({ dest: 'public/images/'})
// const upload = multer({ dest: 'public/images/'})

/* GET users listing. */
router.get("/agregarPost", controller.showAgregarPost);
router.post("/agregarPost", upload.single('image'), controller.store);

router.get("/detallePost/:id/editarPost", controller.editarPost);
router.post("/detallePost/:id/editarPost", controller.update);
router.post("/detallePost/:id/borrarPost", controller.borrarPost);

router.get("/detallePost/:id", controller.showDetallePost);
router.post("/detallePost/:id", controller.comment);

module.exports = router;