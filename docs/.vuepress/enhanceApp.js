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
      gutterOfEnds: '60px',
      opacity: 1,
      background: '#f5f5f5',
      size: '8px'
    },
    scrollPanel: {
      scrollingX: false
    }
  };
  registry(ops, 'native');
};
