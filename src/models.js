
const Sequelize = require('sequelize');
// Or you can simply use a connection uri
const sequelize = new Sequelize('mysql://fatescreen:guffyty123@localhost:3306/test');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const User = sequelize.define('user', {
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
