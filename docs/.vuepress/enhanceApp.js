import { registry } from 'vuepress-theme-vuescroll';

import vuescrollCarousel from 'vuescroll-carousel';
import './assets/bar-style.css';
export default ({ Vue, router }) => {
  Vue.use(vuescrollCarousel);

  Vue.prototype.getRandomColor = function() {
    let str = '#';
    let i = 6;
    while (i--) {
      str += Math.floor(Math.random() * 16).toString(16);
    }
    return str;
  };
  // console.log('qqq');
  let ops = {
    bar: {
      background: 'rgba(120, 120, 120, 0.4)',
      opacity: 0.8,
      size: '6px',
      minSize: 0.1
    },
    rail: {
      size: '6px'
    },
    scrollPanel: {
      scrollingX: false
    }
  };
  registry(ops, 'native');
};
