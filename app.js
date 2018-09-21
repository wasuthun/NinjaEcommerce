const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000


// Init app
const app = express();

// Public folder
app.use(express.static('public'))

// Load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Home page route
app.get("/", function(req, res) {
  res.render("index", {
    title: "Ninja Home"
  });
});

// Promotion route
app.get("/promotion", function(req, res) {
  res.render("promotion", {
    menu: 'promotion'
  });
});

// Store route
app.get("/store", function(req, res) {
  res.render("store", {
    menu: 'store'
  });
});

// Store route
app.get("/whisky", function(req, res) {
  res.render("whisky", {
    menu: 'whisky'
  });
});

// Beer route
app.get("/beer", function(req, res) {
  res.render("beer", {
    menu: 'beer'
  });
});

// Status route
app.get("/status", function(req, res) {
  res.render("status", {
    menu: 'status'
  });
});

// Sign up route
app.get("/signup", function(req, res) {
  res.render("signup", {
    menu: 'signup'
  });
});

// Log in route
app.get("/login", function(req, res) {
  res.render("login", {
    menu: 'login'
  })
})


// Log in server
app.listen(port, function() {
  console.log("server started on port " + port);
});
