module.exports = (text, senderId) => {
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