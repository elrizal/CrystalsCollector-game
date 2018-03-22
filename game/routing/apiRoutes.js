var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var charData = require("../data/characters.js");
console.log(charData);
	module.exports = function(app) {

		app.get("/api/characters", function(req, res) {
			  res.json(charData);
	console.log(charData + "this is from apiRutes");		

		});

	app.post("api/characters", function(req, res) {
		console.log(res + "from apiROUTES");
	  });
	
}

// module.exports = this.takeAPI;
console.log("apiRoutes js is here (ᵔᴥᵔ) \n");

