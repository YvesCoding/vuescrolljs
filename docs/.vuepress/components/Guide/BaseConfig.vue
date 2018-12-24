<template>
    <div class="wrapper">
        <div class="title"> {{config.title}}</div>
        <div class="demo-area">
            <div class="parent">
                <vue-scroll :ops="ops">
                    <div class="child"></div>
                </vue-scroll>
            </div>
            <div class="operation">
                <vue-scroll>
                    <table class=" ">
                        <tr>
                            <td>mode</td>
                            <td>
                                slide <input v-model="ops.vuescroll.mode" type="radio" value="slide"><br> native <input v-model="ops.vuescroll.mode" type="radio" value="native">
                            </td>
                        </tr>
                        <tr>
                            <td>sizeStrategy</td>
                            <td>
                                percent <input v-model="ops.vuescroll.sizeStrategy" type="radio" value="percent"><br> number <input v-model="ops.vuescroll.sizeStrategy" type="radio" value="number">
                            </td>
                        </tr>
                        <tr>
                            <td>detectResize</td>
                            <td>
                                true <input v-model="ops.vuescroll.detectResize" type="radio" :value="true"><br> false <input v-model="ops.vuescroll.detectResize" type="radio" :value="false">
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
        vuescroll: {
          mode: 'native',
          detectResize: true,
          sizeStrategy: 'percent'
        }
      },
      i18n: {
        zh: {
          title: '打开dev-tool查看不同配置项之间的区别。'
        },
        en: {
          title: 'Open the dev-tool to see differences among different otions.'
        }
      }
    };
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
            }
        }
    }
}
</style>
