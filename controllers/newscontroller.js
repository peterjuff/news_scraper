var models = require("../models");

module.exports = {
    findAll: function(req, res){
        models.Article.find({}).then(function(dbArticle){
            res.json(dbArticle);
        })
    }

    //use same to write find , update, and delete functions
}