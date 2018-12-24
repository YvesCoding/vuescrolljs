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
              <td>scrollButton enable</td>
              <td>
                True:<input type="radio" :value="true" v-model="ops.scrollButton.enable"> False:
                <input type="radio" :value="false" v-model="ops.scrollButton.enable">
              </td>
            </tr>
            <tr>
              <td>scrollButton background</td>
              <td>
                <input type="color" v-model="ops.scrollButton.background" /> {{ops.scrollButton.background}}
              </td>
            </tr>
            <tr>
              <td>Bar Size</td>
              <td>
                min = 1
                <input type="number" :min="1" :max="railSize" :step="1" v-model="barSize">px
              </td>
            </tr>
            <tr>
              <td>Rail Size</td>
              <td>
                max = 30
                <input type="number" :min="barSize" :max="30" :step="1" v-model="railSize">px
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
    railSize(newV) {
      this.ops.rail.size = newV + 'px';
    },
    barSize(newV) {
      this.ops.bar.size = newV + 'px';
    }
  },
  data() {
    return {
      railSize: 20,
      barSize: 15,
      ops: {
        rail: {
          size: '20px'
        },
        bar: {
          size: '15px'
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        }
      },
      i18n: {
        zh: {
          title: 'ScrollButton。'
        },
        en: {
          title: 'ScrollButton.'
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
