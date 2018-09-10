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
      background: '#3eaf7c',
      opacity: 0.8
    },
    rail: {
      gutterOfEnds: '60px',
      opacity: 0.5,
      background: '#ffb3b3'
    },
    scrollPanel: {
      scrollingX: false
    }
  };
  registry(ops);
};
