let users = require("./users");
var comments = require("./comments");

const posts = {
  list: [
    {
      id: 0,
      image:
        "https://www.somosfan.com/wp-content/uploads/2021/09/Cristiano-Ronaldo.jpg",
      profilePicture:
        "https://estaticos-cdn.sport.es/clip/24a12ea8-9380-4181-ba6c-dda114a22c30_alta-libre-aspect-ratio_default_0.jpg",
      postCaption: "Fresh start.",
      commentarios: comments.findPostId(0),
      user: users.list.find((e) => e.username == "cristiano"),
      username: "cristiano",
    },
    {
      id: 1,
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/c5f4011/2147483647/strip/true/crop/1329x820+0+0/resize/840x518!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4e%2F7a%2F7cf4817c4f04b9673e8dbb48ce5f%2Fmessi15a.jpg",
      profilePicture:
        "https://www.soyfutbol.com/__export/1628333569988/sites/debate/img/2021/08/07/messi_psg_contrato_firma_crop1628333423417.jpg_943222218.jpg",
      postCaption:
        "Feliz! Con muchas ganas de comenzar esta nueva etapa de mi carrera deportiva.",
      user: users.list.find((e) => e.username == "leomessi"),
      username: "leomessi",
    },
    {
      id: 2,
      image:
        "https://s.france24.com/media/display/5dd35e7a-fce8-11eb-9a2e-005056a90284/w:1280/p:1x1/b23dff191c109302ed085970e7cad15f72457858.jpg",
      profilePicture:
        "https://as01.epimg.net/futbol/imagenes/2020/12/19/internacional/1608381295_937891_1608381394_noticia_normal_recorte1.jpg",
      postCaption: "Bienvenido amigo mio. Un placer volver a jugar a tu lado.",
      user: users.list.find((e) => e.username == "neymarjr"),
      username: "neymarjr",
    },
    {
      id: 3,
      image:
        "https://cdn.vanguardngr.com/wp-content/uploads/2021/09/images-87.jpeg",
      profilePicture:
        "https://bolavip.com/__export/1608581891017/sites/bolavip/img/2020/12/21/mohamed_salah_liverpool_crop1608581889973.jpg_242310155.jpg",
      postCaption:
        "Great win in front of our fans! We keep pushing. Thanks for the support.",
      user: users.list.find((e) => e.username == "mosalah"),
      username: "mosalah",
    },
    {
      id: 4,
      image:
        "https://phantom-marca.unidadeditorial.es/39baef1774f5ec86f832071e0ac2cb0a/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/23/16165259933602.jpg",
      profilePicture:
        "https://e.rpp-noticias.io/normal/2021/06/18/293029_1109573.jpg",
      postCaption: "CHAMPIONS LEAGUE!!! Lets go guys.",
      user: users.list.find((e) => e.username == "erling.haaland"),
      username: "erling.haaland",
    },
  ],
  findId: function (id) {
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.id == id) {
        return element;
      }
    }
  },
  // agarra a todos los objetos que tengan como username el username que le pasamos a la funcion
  findUsername: function (username) {
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.username == username) {
        return element;
      }
    }
  },
};

module.exports = posts;
