var express = require('express'),
  router = express.Router(),
  models = require('../models'),
  Article = models.Article;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.run().then(function (articles) {
    res.render('index', {
      title: 'Ayy Lmao',
      articles: articles
    });
  });
});
