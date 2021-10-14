const db = require('../database/models');


const controller = {
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: async function (req, res) {
    // res.render("social/detallePost", {posts: posts.list , comments: comments.list});
    // for (let i = 0; i < posts.list.length; i++) {
    //   const element = posts.list[i];
    //   if (element.id == req.params.id) {
    //     res.render("social/detallePost", {
    //       posts: element,
    //       comments: comments.list,
    //       users,
    //       listado: posts.list,
    //     });
    //   }
    // }
    
    var posteo = await db.Posts.findByPk(req.params.id) 
    if (!posteo) {
      return res.render('error');
    }

    var comments = await db.Comments.findAll ({where: { post_id:req.params.id }}) 

    res.render("social/detallePost", { posteo, comments });
  },
};

module.exports = controller;
