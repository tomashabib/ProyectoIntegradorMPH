const posts = require("../modules/posts");
const users = require("../modules/users");
const comments = require("../modules/comments");
// const { post } = require("../routes/users");

const controller = {
  showLogin: function (req, res) {
    res.render("social/login");
  },
  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  showDetalleUsuario: function (req, res) {
    var username = req.params.username;
    var user = users.findUsername(username);
    var usernamePost = posts.findUsername(username);
    if (user) {
      res.render("social/detalleUsuario", {
        user: user,
        usernamePost: usernamePost,
      });
    } else {
      return "error";
    }
  },
  showEditarPerfil: function (req, res) {
    res.render("social/editarPerfil");
  },
  showMiPerfil: function (req, res) {
    res.render("social/miPerfil", { user: users, posts: posts });
  },
};

module.exports = controller;
