import vuescroll from 'vuescroll';
import vuescrollMix from './vuescroll-mix';
import store from './store';

//import 'vuescroll/dist/vuescroll.css'
export default ({ Vue, router }) => {
  Vue.use(vuescroll);
  Vue.mixin(vuescrollMix);

  Vue.prototype.getRandomColor = function() {
    let str = '#';
    let i = 6;
    while (i--) {
      str += Math.floor(Math.random() * 16).toString(16);
    }

    return str;
  };

  router.afterEach((to, from) => {
    console.log(111);
    if (!Vue.prototype.$isServer) {
      if (window.vs && !store.disableScrollBehavior) {
        let y;
        if (!to.hash) {
          y = 0;
        } else {
          y = document.querySelector(to.hash).offsetTop;
        }
        window.vs.scrollTo({
          y
        });
        store.specifyAuthor = to.hash;
      }
    }
  });
};
