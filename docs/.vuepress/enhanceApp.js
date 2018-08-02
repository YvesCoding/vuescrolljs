import vuescroll from 'vuescroll';
//import 'vuescroll/dist/vuescroll.css'
export default ({ Vue }) => {
  Vue.use(vuescroll);

  Vue.prototype.$vuescrollConfig = {
    bar: {
      background: 'rgba(0,0,0,.3)',
      hoverStyle: {
        background: 'rgba(0,0,0,.5)'
      }
    }
  };
  Vue.prototype.getRandomColor = function() {
    let str = '#';
    let i = 6;
    while (i--) {
      str += Math.floor(Math.random() * 16).toString(16);
    }

    return str;
  };
};
