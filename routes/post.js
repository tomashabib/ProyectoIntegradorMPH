var express = require("express");
var router = express.Router();
var controller = require("../controllers/postController");
var posts = require("../modules/posts");

/* GET users listing. */
router.get("/agregarPost", controller.showAgregarPost);
router.post("/agregarPost", controller.store);
router.get("/detallePost/:id", controller.showDetallePost);

module.exports = router;
