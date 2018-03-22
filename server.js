
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require("path");
// var http = require("http");

// app.listen(3000)

 var PORT = process.env.PORT || 2500;

// app.use('/images', express.static('public'))
app.use(express.static(path.join(__dirname, "game/public")))

//====

app.use(bodyParser.urlencoded({ 
  extended: false 
}));
 
// parse application/json
app.use(bodyParser.json());
 
require('./game/routing/apiRoutes.js')(app);
require('./game/routing/htmlRoutes.js')(app);

var locations = require("./app/data/cities.js");


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

