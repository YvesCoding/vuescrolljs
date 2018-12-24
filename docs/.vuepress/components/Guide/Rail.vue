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
                background
              </td>
              <td>
                <input type="color" v-model="ops.rail.background" /> {{ops.rail.background}}
              </td>
            </tr>
            <tr>
              <td>opacity</td>
              <td>
                <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.rail.opacity">{{ops.rail.opacity}}
              </td>
            </tr>
            <tr>
              <td>border style</td>
              <td>
                <input type="text" v-model="ops.rail.border">
              </td>
            </tr>
            <tr>
              <td>Rail Size</td>
              <td>
                <input type="number" :min="8" :max="20" :step="1" v-model="railSize">px
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
    }
  },
  data() {
    return {
      railSize: 8,
      ops: {
        rail: {
          size: '8px',
          background: '#cecece',
          opacity: 0.5,
          border: '1px solid #000'
        }
      },
      i18n: {
        zh: {
          title: 'rail。'
        },
        en: {
          title: 'rail。'
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
