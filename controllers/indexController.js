const controller = {
    showIndex: function (req, res) {
        res.render('social/index')
    },
    showLogin: function (req, res) {
        res.render('social/login')
    },
    showRegister: function (req, res) {
        res.render('social/registracion')
    },
    showAgregarPost: function (req, res) {
        res.render('social/agregarPost')
    },
    showDetallePost: function (req, res) {
        res.render('social/detallePost')
    },
}

module.exports = controller;