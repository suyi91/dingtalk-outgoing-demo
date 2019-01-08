const yaml = require('js-yaml');
const fs = require('fs');

const express = require('express');
const app = express();

const WEB_TOKEN = (yaml.safeLoad(fs.readFileSync('_token.yml', 'utf8')) || {}).WEB_TOKEN;
if (!WEB_TOKEN) {
  console.error('请在"_token.yml"中插入钉钉web token')
  process.exit(-1);
  return;
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function(req, res) {
  res.send('Got a POST request');
  console.log(req.headers);
  console.log(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
