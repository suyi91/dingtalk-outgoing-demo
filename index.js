const GLOBAL_CONFIG = require('./config');
const express = require('express');
const bodyParser = require('body-parser')
const processor = require('./processor');
const request = require('request');
const webHook = GLOBAL_CONFIG.webHook;

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function(req, res) {
  request.post(webHook, {
    headers:{
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(processor(req.body, req.header('token'))),
  }, function(err, callRes) {
    if (err) {
      res.status(200).send('发生内部错误');
      return;
    }
    res.status(200).send('request success');
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
