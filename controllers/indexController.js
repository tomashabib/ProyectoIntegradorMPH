const db = require('../database/models');

const users = require('../modules/users');
const comments = require('../modules/comments');

const controller = {
  showIndex: function (req, res) {
    db.Posts.findAll()
     .then((posts) => {
       res.render("social/index", {posts, comments: comments.list, users: users.list});
     })

     .catch((error) => {
       res.send(error)
     })
  },
  showResultadoBusqueda: function (req, res) {
    res.render("social/resultadoBusqueda");
  },
};

module.exports = controller;
