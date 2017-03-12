const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('/api/api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', api);

const authCheck = jwt({
  secret: new Buffer('YOUR-AUTH0-CLIENT-SECRET', 'base64'),
  audience: 'YOUR-AUTH0-CLIENT-ID'
});



app.listen(8000);
console.log('Listening on localhost:8000');