const posts = require('../modules/posts');
const users = require('../modules/users');
const comments = require('../modules/comments');

const controller = {
    showLogin: function (req, res) {
        res.render("social/login");
      },
      showRegister: function (req, res) {
        res.render("social/registracion");
      },
      showDetalleUsuario: function (req, res) {
        res.render("social/detalleUsuario");
      },
      showEditarPerfil: function (req, res) {
        res.render("social/editarPerfil");
      },
      showMiPerfil: function (req, res) {
        res.render("social/miPerfil");
      },
};

module.exports = controller;