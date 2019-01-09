module.exports = (text, senderId) => {
  console.log(text); // 记录传入的内容
  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  };
}