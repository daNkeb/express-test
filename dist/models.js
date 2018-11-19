'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Sequelize = require('sequelize');
// Or you can simply use a connection uri
var sequelize = new Sequelize('mysql://fatescreen:guffyty123@localhost:3306/test');

sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database:', err);
});

var User = exports.User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// 
// User.findOne().then(user => {
//   console.log(user.get('firstName'));
// });