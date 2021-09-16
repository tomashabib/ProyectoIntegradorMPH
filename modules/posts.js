let users = require("./users");

const posts = {
  list: [
    {
      id: "0",
      image:
        "https://www.somosfan.com/wp-content/uploads/2021/09/Cristiano-Ronaldo.jpg",
      profilePicture:
        "https://estaticos-cdn.sport.es/clip/24a12ea8-9380-4181-ba6c-dda114a22c30_alta-libre-aspect-ratio_default_0.jpg",
      postCaption: "Fresh start.",
      comments: "Incredible!",
      user: users.list.find((e) => e.username == "CR7"),
      username: "CR7",
    },
  ],
  //   find: function (id) {
  //     for (let i = 0; i < posts.list.length; i++) {
  //       if (posts.lista[i].id == id) {
  //         return posts.list[i];
  //       }
  //     }
  //   },
};

module.exports = posts;
