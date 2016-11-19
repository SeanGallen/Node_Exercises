const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg')

const conString = 'postgres://username@localhost/node_hero' // make sure to match your own database's credentials

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

app.post('/', function (req,res, next) {

    pg.connect(conString, function (err, client, done) {
      if (err) {
        return next(err)
      }
      client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [req.body.user.name, req.body.user.age], function (err, result) {
        done()
          if (err) {
            return next(err)
          }
        res.sendStatus(200)
      })
    })
})

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000);
