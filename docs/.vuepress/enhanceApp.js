import vuescroll from 'vuescroll';
//import 'vuescroll/dist/vuescroll.css'
export default ({ Vue }) => {
  Vue.use(vuescroll);

  Vue.prototype.getRandomColor = function() {
    let str = '#';
    let i = 6;
    while (i--) {
      str += Math.floor(Math.random() * 16).toString(16);
    }

    return str;
  };
};
