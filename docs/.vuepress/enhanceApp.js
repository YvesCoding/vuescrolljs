import vuescroll from 'vuescroll';
export default ({Vue}) => {
    Vue.use(vuescroll);
    Vue.prototype.$vuescrollConfig = {
        vBar: {
            background: "rgba(0,0,0,.3)",
            hover: "rgba(0,0,0,.5)"
        },
        hBar: {
            background: "rgba(0,0,0,.3)",
            hover: "rgba(0,0,0,.5)"
        }
    }
}