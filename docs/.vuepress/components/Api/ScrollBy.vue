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
                            <td style="width: 30px;padding:0"></td>
                            <td>
                                dX: <input type="text" :placeholder="config.ph" v-model="dx">
                                <br /> dY: <input type="text" :placeholder="config.ph" v-model="dy">
                                <br /> <br />{{config.animate}}
                                <br />
                                <input v-model="speed" type="range" :min="0" :max="1000">
                                <br /> {{speed}}
                                <br />
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
      dx: 0,
      dy: 0,
      speed: 200,
      i18n: {
        zh: {
          title: 'ScrollTo',
          animate: '速度',
          ph: '一个数字或者百分比'
        },
        en: {
          title: 'ScrollTo',
          ph: 'A number or a percent',
          animate: 'speed'
        }
      }
    };
  },
  methods: {
    gogogo() {
      const { dx, dy, speed } = this;

      this.$refs['vs'].scrollBy(
        {
          dx,
          dy
        },
        speed
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
