<template>
    <div class="wrapper">
        <div class="title"> {{config.title}}</div>
        <div class="demo-area">
            <div class="parent">
                <vue-scroll :ops="ops" ref="vs">
                    <div class="child" :id="'no' + item.no" :style="item.style" v-for="item in items" :key="item.no">
                        <span>NO.{{item.no}}</span>
                    </div>
                </vue-scroll>
            </div>
            <div class="operation">
                <vue-scroll>
                    <table class=" ">
                        <tr>
                            <td>
                                <select v-model="select">
                                    <option v-for="i in 10" :value="i">
                                        No.{{i}}
                                    </option>
                                </select>
                                <button @click="scrollIntoView">scrollIntoView</button>
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
    },
    items() {
      const res = new Array(10).fill(0).map((item, index) => {
        return {
          no: index + 1,
          style: this.getStyle()
        };
      });
      return res;
    }
  },
  data() {
    return {
      ops: {
        scrollPanel: {
          scrollingX: false
        }
      },
      select: 1,
      i18n: {
        zh: {
          title: 'scrollIntoView',
          tip: '只能作用于vuescroll的直接子元素.'
        },
        en: {
          title: 'scrollIntoView',
          tip: 'Only work for the direct child element of vuescroll.'
        }
      }
    };
  },
  methods: {
    scrollIntoView() {
      this.$refs['vs'].scrollIntoView('#no' + this.select, 500);
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
