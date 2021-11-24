const db = require("../database/models");
const op = db.sequelize.Op;

const controller = {
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: async function (req, res) {
    var posts = await db.Posts.findByPk(req.params.id, {
      include: [
        { association: "author" },
        { association: "comments", include: [{ association: "commenter" }] },
        {
          association: "likes",
          include: [{ association: "user" }, { association: "post" }],
        },
      ],
    });
    if (!posts) {
      return res.render("error");
    }
    res.render("social/detallePost", { posts });
  },
  store: async function (req, res) {
    if (req.file)
      req.body.image = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    console.log(req.body);
    var posts = await db.Posts.create({
      post_caption: req.body.post_caption,
      user_id: req.session.user.id,
    });

    res.redirect("/index");
  },
  storeImage: function (req, res) {
    if (req.file)
      req.body.image = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    db.Posts.create({
      image: req.body.image,
      user_id: req.session.user.id,
      post_caption: req.body.post_caption,
    })
      .then((post) => {
        res.redirect("/index");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  editarPost: async function (req, res) {
    var posts = await db.Posts.findByPk(req.params.id);
    if (!posts) {
      return res.render("error");
    }
    res.render("social/editarPost", {
      posts,
    });
  },
  update: function (req, res) {
    // console.log(req.body);
    db.Posts.update(
      {
        post_caption: req.body.post_caption,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
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
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/index");
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  comment: function (req, res) {
    if (!req.session.user) {
      res.redirect("/detallePost/" + req.params.id);
    }
    db.Comments.create({
      com: req.body.com,
      post_id: req.params.id,
      user_id: req.session.user.id,
      order: [["id", "DESC"]],
    })
      .then((post) => {
        res.redirect("/post/detallePost/" + req.params.id);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  like: function (req, res) {
    if (!req.session.user) {
      res.redirect(`/post/detallePost/${req.params.id}`);
    }
    db.Like.create({
      user_id: req.session.user.id,
      post_id: req.params.id,
    })
      .then((like) => {
        res.redirect(`/post/detallePost/${req.params.id}`);
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  unlike: function (req, res) {
    if (!req.session.user) {
      res.redirect(`/post/detallePost/${req.params.id}`);
    }
    db.Like.destroy({
      where: { user_id: req.session.user.id, post_id: req.params.id },
    })
      .then(() => {
        res.redirect(`/post/detallePost/${req.params.id}`);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
};

module.exports = controller;
