const controller = {
  showIndex: function (req, res) {
    res.render("social/index");
  },
  showLogin: function (req, res) {
    res.render("social/login");
  },
  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: function (req, res) {
    res.render("social/detallePost");
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
  showResultadoBusqueda: function (req, res) {
    res.render("social/resultadoBusqueda");
  },
};

module.exports = controller;
