var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Always running');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Always running');
  console.log(req.baseUrl); // '/admin'
  var user_id = req.param('id');
  user_id = Number(user_id) + 2;

  var token = req.param('token');
  var geo = req.param('geo');

// res.set('Access-Control-Allow-Origin', '*') is needed to allow the browser to use ajax (HTTP traffic) even if
// the test.html page is not placed on the nodejs server /public folder which is served as static
  res.set('Access-Control-Allow-Origin', '*')
  res.send('success');
//  res.send('respond with a resource  ' + 'user id = ' + user_id + ' ' + token + ' ' + geo);
//  res.redirect('http://expressen.com');
//  res.json({ user: 'tobi' })
});

module.exports = router;
