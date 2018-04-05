// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var request = require("request");
var cheerio = require("cheerio");
var axios = require('axios');

// Require all models
// var db = require("./models");

// Initialize Express
var app = express();

var PORT = process.env.PORT || 3000;
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  // useMongoClient: true
});

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/news_scraper");

//require routes 
// var htmlRoutes = require("./routes");
var apiRoutes = require("./routes/apiRoutes.js");
console.log(apiRoutes);

//Use routes
app.use(apiRoutes);
// app.use("/api", apiRoutes);

app.listen(3000, function() {
  console.log("App running on port 3000!");
});



     
