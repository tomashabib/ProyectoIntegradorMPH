var express = require("express");
var router = express.Router();
var controller = require("../controllers/indexController");

/* GET home page. */
router.get("/", controller.showLogin);
router.get("/index", controller.showIndex);
router.get("/register", controller.showRegister);
router.get("/agregarPost", controller.showAgregarPost);
router.get("/detallePost", controller.showDetallePost);
router.get("/detalleUsuario", controller.showDetalleUsuario);
router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/miPerfil", controller.showMiPerfil);
router.get("/resultadoBusqueda", controller.showResultadoBusqueda);

module.exports = router;
