const db = require("../database/models");
const op = db.Sequelize.Op;

// const users = require('../modules/users');
// const comments = require('../modules/comments');

const controller = {
  showIndex: async function (req, res) {
    var posteos = await db.Posts.findAll({
      include: [{
          association: "comments",
          include: {
            association: "commenter"
          }
        },
        {
          association: "author"
        },
      ],
    });
    if (!posteos) {
      return res.render("error");
    }

    res.render("social/index", {
      posteos
    });
  },
  showResultadoBusqueda: async function (req, res, next) {
    const posts = await db.Posts.findAll({
      where: {
        [op.or]: [{
            post_caption: {
              [op.like]: "%" + req.query.criteria + "%"
            }
          },
          {
            image: {
              [op.like]: "%" + req.query.criteria + "%"
            }
          },
        ],
      },
      include: {
        association: "author"
      },
    });
    res.render("social/resultadoBusqueda", {
      posts,
      criteria: req.query.criteria,
    });
  },
};

module.exports = controller;