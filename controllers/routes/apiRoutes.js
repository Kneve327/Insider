var db = require("../../models");
var passport = require("../../config/passport");

module.exports = function(app) {
  
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }).then(function(dbUser) {
      console.log(dbUser.dataValues[0])
      res.redirect(307, "/api/login");
    })
  });

  app.get("/api/post", function (req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost)
    })
  })

  app.post("/api/post", function(req, res) {
    console.log("Im being called")
    console.log(req.body);
    db.Post.create(req.body)
    .then(function(dbPost) {
      console.log("Im being called")

      console.log(dbPost);
      res.json(dbPost)
    //   console.log(dbUser.dataValues[0])
    //   res.redirect(307, "/api/login");
    }).catch(function(err) {
    
      res.json(err);
      // res.status(422).json(err.errors[0].message);
      console.log(err);
    })
  })

    // Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
app.get("/api/users", function(req, res) {
  
    db.User.findAll({}).then(function (dbUser ){
      res.json(dbUser  
    )
    
    });
  }
);

};


  