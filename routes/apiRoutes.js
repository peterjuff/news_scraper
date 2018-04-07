//require express & setup Router
var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var controller = require("../controllers/newscontroller");

// Initialize Express
var app = express();
//Require Mongoose
var mongoose = require("mongoose");
var request = require("request");

// Require all models
var db = require("../models");



// A GET route for scraping the echoJS website
router.get("/scrape", function(req, res) {
    // First, we grab the body of the html with request
    request.get("http://weeklyworldnews.com/", function(err, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("h1.entry-title").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
  
        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function(dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
          console.log(result);

      });
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
  });

  router.get("/find", controller.findAll); 

  router.get("/articles", controller.findAll);

  module.exports = router
