const nodejieba = require('nodejieba');

const LIB = {
  '前端|fe': {
    type: 'markdown',
    content: {
      title: '前端相关参考内容',
      text: `
      - [MDN](https://developer.mozilla.org/zh-CN/)
      - [Vue.js](https://cn.vuejs.org/)
      - [ElementUI](http://element-cn.eleme.io)
      - [React](https://reactjs.org/)
      `,
    },
  },
  'mdn': {
    type: 'link',
    content: {
      text: 'Mozilla开发者网络',
      title: 'Mozilla开发者网络',
      picUrl: 'https://cdn-images-1.medium.com/max/1600/1*v9AT7ZaJc6fR2MjYljGEzg.png',
      messageUrl: 'https://developer.mozilla.org/zh-CN/',
    }
  },
  'vue|vuejs': {
    type: 'link',
    content: {
      text: '渐进式JavaScript框架',
      title: 'Vue.js',
      picUrl: 'https://cn.vuejs.org/images/logo.png',
      messageUrl: 'https://cn.vuejs.org/',
    }
  },
};

module.exports = text => {
  const words = nodejieba.cutHMM(text);
  for (let word in text) {
    for (let key in LIB) {
      if (key.split('|').some(v => new RegExp(`${v}`, 'i').test(text))) {
        return LIB[key];
      }
    }
  }
  return null;
};