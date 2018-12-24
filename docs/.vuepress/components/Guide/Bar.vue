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
              <td>
                Background
              </td>
              <td>
                <input type="color" v-model="ops.bar.background" /> {{ops.bar.background}}
              </td>
            </tr>
            <tr>
              <td>Opacity</td>
              <td>
                <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.bar.opacity">{{ops.bar.opacity}}
              </td>
            </tr>
            <tr>
              <td>Keep Show</td>
              <td>
                True:<input type="radio" :value="true" v-model="ops.bar.keepShow"> False:
                <input type="radio" :value="false" v-model="ops.bar.keepShow">
              </td>
            </tr>
            <tr>
              <td>Bar MinSize</td>
              <td>
                <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.bar.minSize">{{ops.bar.minSize}}
              </td>
            </tr>
            <tr>
              <td>Bar Size</td>
              <td>
                <input type="number" :min="1" :max="6" :step="1" v-model="barSize">px
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
  watch: {
    barSize(newV) {
      this.ops.bar.size = newV + 'px';
    }
  },
  data() {
    return {
      barSize: 6,
      ops: {
        bar: {
          background: '#cecece',
          opacity: 0.5,
          keepShow: true,
          minSize: 0.2,
          size: '6px'
        }
      },
      i18n: {
        zh: {
          title: 'bar'
        },
        en: {
          title: 'bar'
        }
      }
    };
  },
  methods: {
    randomScroll() {
      const x = Math.random() * 800;
      const y = Math.random() * 800;
      this.$refs['vs'].scrollTo({
        x,
        y
      });
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
        width: 6000px;
        height: 6000px;
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
