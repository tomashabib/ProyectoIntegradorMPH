// declaramos las cosas que vamos a utilizar
var express = require("express");
var router = express.Router();
var controller = require("../controllers/usersController");
const multer = require("multer");
const upload = multer({ dest: "public/images/" });

/* GET users listing. */
router.get("/register", controller.showRegister);
router.post(
  "/register",
  upload.single("profile_picture"),
  controller.registerStore
);

router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/miPerfil/:id", controller.showMiPerfil);

router.get("/detalleUsuario/:id", controller.showDetalleUsuario);
router.get("/detalleUsuario/:id/follow", controller.follow);
router.get("/detalleUsuario/:id/unfollow", controller.unfollow);

router.all("/login", controller.showLogin);
router.all("/logout", controller.logout);

module.exports = router;
