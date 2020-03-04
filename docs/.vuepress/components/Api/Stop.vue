<template>
  <div class="wrapper">
    <div class="title">{{ config.title }}</div>
    <div class="demo-area">
      <div class="parent">
        <vue-scroll @handle-scroll="hs" :ops="ops" ref="vs">
          <div class="child"></div>
        </vue-scroll>
      </div>
      <div class="operation">
        <vue-scroll>
          <table class=" ">
            <tr>
              <td style="width: 30px;padding:0"></td>
              <td>
                X: <input type="text" :placeholder="config.ph" v-model="x" />
                <br />
                Y: <input type="text" :placeholder="config.ph" v-model="y" />
                <br />
                <input v-model="speed" type="range" :min="500" :max="5000" />
                <br />
                speed: {{ speed }}
                <br />
                <br />
                {{ pos }}
                <br />
                <br />
                <button @click="gogogo">start</button>
                <button @click="stop">stop</button>
                <button @click="pause">pause</button>
                <button @click="continueScrolling">continue</button>
                <br />
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
      default: "en"
    }
  },
  computed: {
    config() {
      return this.i18n[this.lang];
    },
    pos() {
      return `${this.i18n[this.lang].cur}: {x:${this.currentX}, y:${
        this.currentY
      }}`;
    }
  },
  data() {
    return {
      ops: {},
      x: 0,
      y: 0,
      currentX: 0,
      currentY: 0,
      speed: 1000,
      i18n: {
        zh: {
          title: "停止/暂停/继续",
          animate: "速度",
          ph: "一个数字或者百分比",
          cur: "当前"
        },
        en: {
          title: "stop/pause/continue",
          ph: "A number or a percent",
          animate: "speed",
          cur: "current"
        }
      }
    };
  },
  methods: {
    hs(args) {
      const { scrollLeft, scrollTop } = this.$refs.vs.getPosition();
      this.currentX = scrollLeft;
      this.currentY = scrollTop;
    },
    gogogo() {
      const { x, y, speed } = this;

      this.$refs["vs"].scrollTo(
        {
          x,
          y
        },
        speed
      );
    },
    stop() {
      this.$refs["vs"].stop();
    },
    pause() {
      this.$refs["vs"].pause();
    },
    continueScrolling() {
      this.$refs["vs"].continue();
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
