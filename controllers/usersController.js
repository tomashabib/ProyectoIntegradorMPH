const db = require('../database/models');


const controller = {
  showLogin: function (req, res) {
    res.render("social/login");
  },
  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  // funcion para clasificar por username
  showDetalleUsuario: async function (req, res) {
    var user = await db.Users. findByPk(req.params.username);
    var usernamePost = await db.Posts.findAll({where: {username: req.params.username}});
  
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
    var usuarios = await db.Users.findByPk(req.params.id) 
    if (!usuarios) {
      return res.render('error');
    }

    res.render("social/detallePost", { usuarios });
  },
};

module.exports = controller;
