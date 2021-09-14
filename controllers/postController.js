const posts = require('../modules/posts');
const users = require('../modules/users');
const comments = require('../modules/comments');


const controller = {
    showAgregarPost: function (req, res) {
        res.render("social/agregarPost");
    },
    showDetallePost: function (req, res) {
        res.render("social/detallePost", {posts: posts.list , comments: comments.list});
    },
};

module.exports = controller;