const db = require('../database/models');


const controller = {
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: async function (req, res) {   
    var posts = await db.Posts.findByPk(req.params.id) 
    if (!posts) {
      return res.render('error');
    }

    var comments = await db.Comments.findAll ({where: { post_id:req.params.id }}) 

    res.render("social/detallePost", { posts, comments });
  },
  store: function (req, res) {
    console.log(req.body);
    db.Posts.create({
      post_caption: req.body.post_caption
    }),
    res.redirect('/index')
  }
};

module.exports = controller;
