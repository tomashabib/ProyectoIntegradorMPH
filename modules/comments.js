const comments = {
  list: [
    {
      comentario: "Lets get it mate!",
      id_comentario: 0,
      username: "thiagosilva",
      id_post: 0,
    },
    {
      comentario: "Mucha suerte en esta nueva etapa amigo.",
      id_comentario: 1,
      username: "toni.kr8s",
      id_post: 0,
    },
    {
      comentario: "Wish you the best Cris.",
      id_comentario: 2,
      username: "keylornavas1",
      id_post: 0,
    },
    {
      comentario: "Vamos hermano!!! Que placer",
      id_comentario: 3,
      username: "neymarjr",
      id_post: 1,
    },
    {
      comentario: "Mucha suerte Leooo. Te echaremos de menos aqui.",
      id_comentario: 4,
      username: "3gerardpique",
      id_post: 1,
    },
    {
      comentario: "Te quiero amigo. La vas a romper",
      id_comentario: 5,
      username: "kunaguero",
      id_post: 1,
    },
    {
      comentario: "Gracias por la bienvenida Ney!",
      id_comentario: 6,
      username: "leomessi",
      id_post: 2,
    },
    {
      comentario: "Hermaninho",
      id_comentario: 7,
      username: "thiagosilva",
      id_post: 2,
    },
    {
      comentario: "Lets gooo!",
      id_comentario: 8,
      username: "k.mbappe",
      id_post: 2,
    },
    {
      comentario: "Hahaha what a player.",
      id_comentario: 9,
      username: "virgilvandijk",
      id_post: 3,
    },
    {
      comentario: "Yes brooo.",
      id_comentario: 10,
      username: "jhernderson",
      id_post: 3,
    },
    {
      comentario: "Excellent game Mo",
      id_comentario: 11,
      username: "alissonbecker",
      id_post: 3,
    },
    {
      comentario: "Goal machine. Love to assist you",
      id_comentario: 12,
      username: "judebellingham",
      id_post: 4,
    },
    {
      comentario: "Beast!!!",
      id_comentario: 13,
      username: "_rl9",
      id_post: 4,
    },
    {
      comentario: "Indredible strike Erling",
      id_comentario: 14,
      username: "upamecano",
      id_post: 4,
    },
  ],
  findPostId: function (postId) {
    listadoComments = [];
    for (let i = 0; i < comments.list.length; i++) {
      const element = comments.list[i];
      if (element.id_post == postId) {
        listadoComments.push(element);
      }
    }
    return listadoComments;
  },
};

module.exports = comments;
