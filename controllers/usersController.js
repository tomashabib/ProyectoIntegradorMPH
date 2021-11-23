const db = require("../database/models");
const op = db.sequelize.Op;
const bcrypt = require("bcryptjs");

const controller = {
  showLogin: async function (req, res) {
    if (req.method == "POST") {
      const user = await db.Users.findOne({
        where: [
          {
            username: req.body.username,
          },
        ],
      });
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user;
        if (req.body.recordarme) {
          res.cookie("user", user, {
            maxAge: 1000 * 60 * 60 * 24,
          });
        }
        res.redirect("/index");
      } else {
        res.render("social/login", {
          error: "El usuario o la contrasena son incorrectas",
        });
      }
    } else {
      res.render("social/login");
    }
  },
  logout: function (req, res, next) {
    res.clearCookie("user");
    req.session.user = null;
    res.redirect("/index");
  },

  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  registerStore: async function (req, res) {
    if (req.file)
      req.body.image = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    const errors = [];
    var existeUsername = await db.Users.findOne({
      where: {
        username: req.body.username,
      },
    });
    var existeEmail = await db.Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existeEmail) {
      errors.push("Ya hay un usuario registrado con ese email");
    }
    if (existeUsername) {
      errors.push("Ya hay un usuario registrado con ese usuario");
    }
    if (req.body.password.length < 5) {
      errors.push("La contrasena es muy corta");
    }
    if (errors.length > 0) {
      return res.render("social/registracion", { errors });
    }
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
    var user = await db.Users.findByPk(req.params.id, {
      include: [
        {
          association: "post",
        },
        { association: "followers" },
        { association: "following" },
      ],
    });

    res.render("social/detalleUsuario", {
      user,
    });
  },
  showEditarPerfil: function (req, res) {
    res.render("social/editarPerfil");
  },
  showMiPerfil: async function (req, res) {
    if (!req.session.user) {
      res.send("No estas logueado");
    }
    var user = await db.Users.findByPk(req.session.user.id, {
      include: [
        {
          association: "post",
        },
        { association: "followers" },
        { association: "following" },
      ],
    });
    res.render("social/miPerfil", {
      user,
    });
  },
  follow: function (req, res) {
    if (!req.session.user) {
      res.redirect(`/users/detalleUsuario/${req.params.id}`);
    }
    db.Follow.create({
      follower_id: req.session.user.id,
      following_id: req.params.id,
    })
      .then((follow) => {
        res.redirect(`/users/detalleUsuario/${req.params.id}`);
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  unfollow: function (req, res) {
    if (!req.session.user) {
      res.redirect(`/users/detalleUsuario/${req.params.id}`);
    }
    db.Follow.destroy({
      where: { follower_id: req.session.user.id, following_id: req.params.id },
    })
      .then(() => {
        res.redirect(`/users/detalleUsuario/${req.params.id}`);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
};

module.exports = controller;
