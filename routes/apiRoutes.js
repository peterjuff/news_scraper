// A GET route for scraping the echoJS website
app.get("/", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("http://weeklyworldnews.com//").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("h1.entry-title").each(function(i, element) {
        // Save an empty result object
        var result = {};
        console.log(result);
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("p")
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
      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
  });