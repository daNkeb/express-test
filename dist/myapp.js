'use strict';

var _models = require('./models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var app = express();
app.set('view engine', 'pug');

var getUser = async function getUser() {
  var user = models.User.findOne().then(function (user) {
    return user.get('firstName');
  });

  return user;
};

// let user = await User.findOne()
// console.log(user.get('firstName'));

var pug_vars = { title: 'Hey', message: getUser() };

app.get('/', async function (req, res) {
  res.render('index', pug_vars);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});