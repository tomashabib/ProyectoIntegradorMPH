const db = require('../database/models');
const op = db.Sequelize.Op

// const users = require('../modules/users');
// const comments = require('../modules/comments');

const controller = {
  showIndex: async function (req, res) {
    // db.Posts.findAll()
    //  .then((posts) => {
    //    res.render("social/index", {posts});
    //  })

    //  .catch((error) => {
    //    res.send(error)
    //  })
    var posteos = await db.Posts.findAll() 
    if (!posteos) {
      return res.render('error');
    }

    var comments = await db.Comments.findAll() 

    res.render("social/index", { posteos, comments });
  },
  showResultadoBusqueda: async function(req, res, next) {
      const posts = await db.Posts.findAll({ where: {
        [op.or]: [
          { post_caption: { [op.like]: "%"+req.query.criteria+"%"} },
          { image: { [op.like]: "%"+req.query.criteria+"%"} },
        ]
        }}
      )
      res.render('social/resultadoBusqueda', { posts, criteria: req.query.criteria });
    },
};

module.exports = controller;
