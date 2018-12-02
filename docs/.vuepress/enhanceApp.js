import { registry } from 'vuepress-theme-vuescroll';

export default ({ Vue, router }) => {
  Vue.prototype.getRandomColor = function() {
    let str = '#';
    let i = 6;
    while (i--) {
      str += Math.floor(Math.random() * 16).toString(16);
    }
    return str;
  };
  console.log('qqq');
  let ops = {
    bar: {
      background: '#1890ff',
      opacity: 0.8,
      keepShow: true
    },
    rail: {
      opacity: 1,
      background: '#f5f5f5',
      border: '1px solid #cecece',
      size: '8px',
      size: '20px'
    },
    scrollPanel: {
      scrollingX: false
    },
    scrollButton: {
      enable: true,
      background: '#cecece'
    }
  };
  registry(ops, 'native');
};
