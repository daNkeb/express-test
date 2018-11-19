//import * as models from "./models";

let models = require('./models');


let express = require('express');
let app = express();
app.set('view engine', 'pug')




const getUser = async () => {
  // let user = models.User.findOne().then(user => {
  //   return user.get('firstName');
  // });

  let user = await models.User.findOne()

  //console.log(user.get('firstName'));

  return user.get('firstName');
}

// let user = await User.findOne()
// console.log(user.get('firstName'));



let pug_vars = { title: 'Hey', message: getUser() };

app.get('/', async function (req, res) {
  res.render('index', pug_vars());
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
