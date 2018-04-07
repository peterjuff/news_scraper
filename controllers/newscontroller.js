var models = require("../models");

module.exports = {
    findAll: function(req, res){
        models.Article.find({}).then(function(dbArticle){
            res.json(dbArticle);
        })
    },

    //use same to write find , update, and delete functions
    findOne: function(req, res) {
        db.Article.findOne({_id: req.params.id}).then(function(dbArticle){
            res.json(dbArticle);
        })
    },

    delete: function(req, res) {
        db.Article.remove(
            {
        //  delete article controller 
        _id: mongojs.ObjectID(req.params.id)
            

        }, 
        function(error, removed) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(removed);
                res.send(removed);
            }
        }
    )


}
}