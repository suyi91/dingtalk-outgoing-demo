const express = require('express');
const bodyParser = require('body-parser')
require('./config');
const processor = require('./processor');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function(req, res) {
  res.send(processor(req.body, req.headers.token));
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(200).send('系统内部异常，请稍后再试')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
