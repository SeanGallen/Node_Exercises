const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.end('Now we have an Express server, Sweet!');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happen', err)
  }
  console.log(`server is listening on ${port}`)
})
