'use strict';

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'fatescreen',
//   password : 'guffyty123',
//   database : 'test'
// });
//
// connection.connect();
//
// console.log("YA ZAPUSTILSYA")
//
//
// connection.query('SELECT * FROM test.posts as posts', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
//
// connection.end();


var Sequelize = require('sequelize');
// Or you can simply use a connection uri
var sequelize = new Sequelize('mysql://fatescreen:guffyty123@localhost:3306/test');

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll().then(function (users) {
  console.log(users);
});