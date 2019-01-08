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

module.exports = function processor(reqBody, givenToken) {
  if (givenToken !== token) {
    return null;
  }
  const {
    conversationType,
    senderId,
    text,
  } = reqBody;
  const content = text.content;
  if (String(conversationType) === '1') {
    return textGenerator(content);
  }
  if (String(conversationType) === '2') {
    return textGenerator(content, senderId);
  }
  return null;
}
