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

  let ops = {
    bar: {
      background: '#3eaf7c'
    },
    rail: {
      gutterOfEnds: '60px'
    },
    scrollPanel: {
      scrollingX: false
    }
  };
  console.log(1111);
  registry({ Vue, router }, ops);
};
