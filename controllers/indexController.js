const db = require("../database/models");
const op = db.Sequelize.Op;

// const users = require('../modules/users');
// const comments = require('../modules/comments');

const controller = {
  showIndex: async function (req, res) {
    var posteos = await db.Posts.findAll({
      include: [
        { association: "comments", include: [{ association: "commenter" }] },
        {
          association: "author",
        },
        {
          association: "likes",
        },
      ],
    });
    if (!posteos) {
      return res.render("error");
    }

    res.render("social/index", {
      posteos,
    });
  },
  showResultadoBusqueda: async function (req, res, next) {
    const posts = await db.Posts.findAll({order: [["id", "DESC"]],
      where: {
        [op.or]: [
          {
            post_caption: {
              [op.like]: "%" + req.query.criteria + "%",
            },
          },
          {
            image: {
              [op.like]: "%" + req.query.criteria + "%",
            },
          },
        ],
      },
      include: {
        association: "author",
      },
    });
    res.render("social/resultadoBusqueda", {
      posts,
      criteria: req.query.criteria,
    });
  },
  like: function (req, res) {
    if (!req.session.user) {
      res.redirect("/index");
    }
    db.Like.create({
      user_id: req.session.user.id,
      post_id: req.params.id,
    })
      .then((like) => {
        res.redirect("/index");
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  unlike: function (req, res) {
    if (!req.session.user) {
      res.redirect("/index");
    }
    db.Like.destroy({
      where: { user_id: req.session.user.id, post_id: req.params.id },
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
