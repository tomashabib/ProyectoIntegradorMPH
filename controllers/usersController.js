const db = require("../database/models");
const op = db.sequelize.Op;
const bcrypt = require("bcryptjs");

const controller = {
  showLogin: async function (req, res) {
    if (req.method == "POST") {
      const user = await db.Users.findOne({
        where: [{ username: req.body.username }],
      });
      if (!user) {
        res.send("No existe el Usuario");
      }
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.redirect("/index");
      } else {
        res.send("Constrasena Incorrecta");
      }
    } else {
      res.render("social/login");
    }
  },

  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  registerStore: async function (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    db.Users.create(req.body)
      .then((post) => {
        res.redirect("/users/login");
      })
      .catch((error) => {
        return res.render(error);
      });
  },

  // funcion para clasificar por username
  showDetalleUsuario: async function (req, res) {
    var user = await db.Users.findByPk(req.params.id);
    var usernamePost = await db.Posts.findAll({
      where: { user_id: req.params.id },
    });

    res.render("social/detalleUsuario", { user, usernamePost });
  },
  showEditarPerfil: function (req, res) {
    res.render("social/editarPerfil");
  },
  showMiPerfil: async function (req, res) {
    // var username = req.params.username;
    // var user = users.findUsername(username);
    // var usernamePost = posts.findUsername(username);
    // if (user) {
    //   res.render("social/miPerfil", { user: user, usernamePost });
    // } else {
    //   return "error";
    // }
    var usuarios = await db.Users.findByPk(req.params.id);
    if (!usuarios) {
      return res.render("error");
    }

    res.render("social/detallePost", { usuarios });
  },
};

module.exports = controller;
