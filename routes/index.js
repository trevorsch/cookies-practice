var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: req.cookies.currentUser});
});

router.post('/fake-login', function(req, res, next){
  res.cookie('currentUser', req.body.user_name);
  res.redirect('/');
});

router.get('/fake-logout', function(req, res, next){
  res.clearCookie('currentUser');
  res.redirect('/');
});

module.exports = router;
