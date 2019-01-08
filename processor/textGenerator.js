module.exports = (text, senderId) => {
  console.log(text); // 记录传入的内容
  const obj = {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
  if (senderId) {
    obj.at = {
      atDingtalkIds: [
        senderId,
      ],
    }
  }
  return obj;
}