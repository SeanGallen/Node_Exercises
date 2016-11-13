const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

const users = []

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

app.post("/", function (req, res) {
      console.log(req.body.user.name)
      console.log(req.body.user.age)
});

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000);
