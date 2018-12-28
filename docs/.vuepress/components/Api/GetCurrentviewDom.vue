<template>
    <div class="wrapper">
        <div class="title"> {{config.title}}</div>
        <div class="demo-area">
            <div class="parent">
                <vue-scroll :ops="ops" ref="vs">
                    <div class="child" :style="getStyle()" v-for="item in 10" :key="item">
                        <span>{{item}}</span>
                    </div>
                </vue-scroll>
            </div>
            <div class="operation">
                <vue-scroll>
                    <table class=" ">
                        <tr>
                            <td>
                                <button @click="GetCurrentviewDom">GetCurrentviewDom</button>
                                <br /> <br /> {{config.tip}}
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
      ops: {
        scrollPanel: {
          scrollingX: false
        }
      },
      x: 0,
      y: 0,
      animate: true,
      i18n: {
        zh: {
          title: 'getCurrentviewDom',
          tip: '需要打开控制台查看输出的dmo元素.'
        },
        en: {
          title: 'getCurrentviewDom',
          tip: 'Need to open dev-tool to see the output element.'
        }
      }
    };
  },
  methods: {
    GetCurrentviewDom() {
      console.log(this.$refs['vs'].getCurrentviewDom());
    },
    getStyle() {
      const height = Math.random() * 21 + 4 + 'rem';
      return {
        height: height,
        lineHeight: height
      };
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

            .child {
                width: 100%;
                text-align: center;
                line-height: 12rem;
                font-size: 2rem;
                background: #fff;
                border: 1px solid #000;
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
