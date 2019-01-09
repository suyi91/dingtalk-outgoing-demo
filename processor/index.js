/**
 * {
    "msgtype": "text",
    "text": {
        "content": "我就是我, 是不一样的烟火"
    },
    "createAt": 1487561654123,
    "conversationType": 2,
    "conversationId": "12345",
    "conversationTitle": "钉钉群",
    "senderId": "dingtalk1235",
    "senderNick": "星星",
    "senderStaffId":"075263",
    "isAdmin":false,
    "context":"用户自定义上下文",
    "chatbotCorpId":"test",
    "chatbotUserId":"XXX"
  }
 */

const token = require('../config').token;
const textGenerator = require('./textGenerator');
const linkGenerator = require('./linkGenerator');
const mdGenerator = require('./mdGenerator');
const textCuter = require('./textCuter');

const EMPTY_RESPONSE = '我不能理解你的内容， \n你可以键入"前端"、"vue"等相关内容';

module.exports = function processor(reqBody, givenToken) {
  if (givenToken !== token) {
    return null;
  }
  const { text } = reqBody;
  const content = text.content.trim();
  const foundResult = textCuter(content);
  if (!foundResult) {
    return textGenerator(EMPTY_RESPONSE);
  }
  switch (foundResult.type) {
    case 'link':
      return linkGenerator(foundResult.content);
    case 'markdown':
      return mdGenerator(foundResult.content);
    default:
      return textGenerator(EMPTY_RESPONSE);
  }
}
