var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postRouter = require("./routes/post");
var db = require("./database/models");

var app = express();
// db.sequelize.sync({ alter: true });

//configuracion de session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//middlewares
// middleware cookie
app.use(async (req, res, next) => {
  if (req.cookies.user !== undefined && req.session.user === undefined) {
    req.session.user = req.cookies.user;
  }
  next(); //deje clase 19 1:35:00
});
// middleware session
app.use(async (req, res, next) => {
  res.locals.app = {};
  if (req.session.user !== undefined) {
    res.locals.app.user = req.session.user;
  }
  next();
});
//routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
