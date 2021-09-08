const { compile } = require("ejs");

const posts = {
    list: [
        {
            image: "https://www.somosfan.com/wp-content/uploads/2021/09/Cristiano-Ronaldo.jpg",
            profilePicture: "https://estaticos-cdn.sport.es/clip/24a12ea8-9380-4181-ba6c-dda114a22c30_alta-libre-aspect-ratio_default_0.jpg",
            username: '@CR7', 
            postCaption: 'Fresh start.',
            comments: 'Incredible!' ,
        },
    ]

};

module.exports = posts;