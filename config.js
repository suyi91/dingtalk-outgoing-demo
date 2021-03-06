const yaml = require('js-yaml');
const fs = require('fs');

const GLOBAL_CONFIG = yaml.safeLoad(fs.readFileSync('_token.yml', 'utf8'));

if (!GLOBAL_CONFIG || !GLOBAL_CONFIG.WEB_TOKEN || !GLOBAL_CONFIG.WEB_HOOK) {
  console.error('请在"_token.yml"中添加钉钉WEB_TOKEN和WEB_HOOK   => e.g. _token.example.yml')
  process.exit(-1);
  return;
}

module.exports = {
  token: GLOBAL_CONFIG.WEB_TOKEN,
  webHook: GLOBAL_CONFIG.WEB_HOOK,
};