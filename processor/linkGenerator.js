module.exports = ({ title, text, messageUrl, picUrl }) => {
  return {
    msgtype: 'link',
    link: {
      text,
      title,
      picUrl,
      messageUrl,
    }
  }
};