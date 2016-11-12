const express = require('express');
const app = express();

app.get('/', (request, response) => {
  throw new Error('oops')
})

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send('Something broken!')
})

app.listen(3000);
