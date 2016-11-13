const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.get('/',(request, response) => {
  response.render('home', {
    name: 'Doc'
  })
})

app.use(bodyParser.urlencoded({
      extended: true
}));

app.use(bodyParser.json());

app.post('/', function (req, res) {
  const user = req.body.user
  fs.appendFile('users.txt', JSON.stringify(user), (err) => {
      res.send('successfully registered')
    })
})

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000);
