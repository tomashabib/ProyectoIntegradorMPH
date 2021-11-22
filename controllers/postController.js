const multer = require("multer");
const db = require("../database/models");
const op = db.sequelize.Op;

const controller = {
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: async function (req, res) {
    var posts = await db.Posts.findByPk(req.params.id, {
      include: [{
          association: "author"
        },
        {
          association: "comments",
          include: [{
            association: "commenter"
          }]
        },
      ],
    });
    if (!posts) {
      return res.render("error");
    }
    res.render("social/detallePost", {
      posts
    });
  },
  store: async function (req, res) {
    // console.log(req.body);
    // db.Posts.create({
    //   post_caption: req.body.post_caption,
    //   user_id: req.session.user.id,
    // })
    //   .then((post) => {
    //     res.redirect("/index");
    //   })
    //   .catch((error) => {
    //     return res.render(error);
    //   });
    console.log(req.body);
    var posts = await db.Posts.create({
      post_caption: req.body.post_caption,
      user_id: req.session.user.id,
    });

    res.redirect("/index");
  },
  editarPost: async function (req, res) {
    var posts = await db.Posts.findByPk(req.params.id);
    if (!posts) {
      return res.render("error");
    }
    res.render("social/editarPost", {
      posts
    });
  },
  update: function (req, res) {
    // console.log(req.body);
    db.Posts.update({
        post_caption: req.body.post_caption,
      }, {
        where: {
          id: req.params.id
        }
      })
      .then((post) => {
        res.redirect("/index");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  borrarPost: function (req, res) {
    db.Posts.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.redirect("/index");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
};

module.exports = controller;