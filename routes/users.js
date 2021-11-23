// declaramos las cosas que vamos a utilizar
var express = require("express");
var router = express.Router();
var controller = require("../controllers/usersController");
const multer = require("multer");
const upload = multer({ dest: 'public/images/'})

/* GET users listing. */
router.get("/register", controller.showRegister);
router.post("/register", upload.single('profile_picture'), controller.registerStore);

router.get("/detalleUsuario/:id", controller.showDetalleUsuario);
router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/miPerfil/:id", controller.showMiPerfil); //deje clase Relaciones Sequelize 1:00:00
router.all("/login", controller.showLogin);
router.all("/logout", controller.logout);

module.exports = router;