const db = require('../database/models');

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
  showResultadoBusqueda: function (req, res) {
    res.render("social/resultadoBusqueda");
  },
};

module.exports = controller;
