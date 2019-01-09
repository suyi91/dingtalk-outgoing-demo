module.exports = ({ title, text }) => {
  return {
    msgtype: 'markdown',
    markdown: {
      title,
      text,
    },
  };
};