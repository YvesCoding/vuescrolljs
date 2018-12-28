<template>
    <div class="wrapper">
        <div class="title"> {{config.title}}</div>
        <div class="demo-area">
            <div class="parent">
                <vue-scroll :ops="ops" ref="vs">
                    <div class="child"></div>
                </vue-scroll>
            </div>
            <div class="operation">
                <vue-scroll>
                    <table class=" ">
                        <tr>
                            <td style="width: 30px;padding:0">Position</td>
                            <td>
                                X: <input type="text" :placeholder="config.ph" v-model="x">
                                <br /> Y: <input type="text" :placeholder="config.ph" v-model="y">
                                <br /> <br />{{config.animate}}: true:<input v-model="animate" type="radio" :value="true"> false:<input v-model="animate" type="radio" :value="false">
                                <br /><br />
                                <button @click="gogogo">GOGOGO!</button>
                            </td>
                        </tr>
                    </table>
                </vue-scroll>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  props: {
    lang: {
      tyoe: String,
      default: 'en'
    }
  },
  computed: {
    config() {
      return this.i18n[this.lang];
    }
  },
  data() {
    return {
      ops: {},
      x: 0,
      y: 0,
      animate: true,
      i18n: {
        zh: {
          title: 'ScrollTo',
          animate: '动画',
          ph: '一个数字或者百分比'
        },
        en: {
          title: 'ScrollTo',
          ph: 'A number or a percent',
          animate: 'animate'
        }
      }
    };
  },
  methods: {
    gogogo() {
      const { x, y, animate } = this;

      this.$refs['vs'].scrollTo(
        {
          x,
          y
        },
        animate
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
    margin-top: 20px;
    width: 100%;
    background-color: #e2e1dd;
    padding: 10px;
    color: #007b9c;

    .title {
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        font-size: 1rem;
        background-color: #fbabbd;
    }

    .demo-area {
        width: 100%;
        margin: auto;
        margin-top: 1rem;
        display: flex;
        background-color: #90d6f1;

        .parent {
            width: 60%;
            height: 12rem;

            /deep/ .child {
                width: 1000px;
                height: 1000px;
                background: linear-gradient(45deg, rgb(0, 159, 255), rgb(236, 47, 75));
            }
        }

        .operation {
            height: 12rem;
            width: 40%;
            background-color: #d5d5d7;

            table {
                display: table;
                width: 100%;

                td {
                    text-align: center;

                    button {
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>
