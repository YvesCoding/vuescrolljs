<template>
  <div class="wrap">
    <div class="wrap-part">
      <div
        class="parent"
        ref="parentElm"
      >
        <vue-scroll
          :ops="ops"
          ref="vs"
        >
          <div class="child-wrap">
            <template v-for="item in items">
              <div
                :key="item"
                class="child"
                :index="item"
                :style="item"
              >
                {{item.backgroundColor}}
              </div>
            </template>
          </div>
        </vue-scroll>
      </div>
    </div>
    <div class="wrap-part">
      <div class="parent">
        <vue-scroll :ops="{bar: {onlyShowBarOnScroll: false}}">
          <table class="customize-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KeepShow</td>
                <td>
                  True:<input
                    type="radio"
                    :value="true"
                    v-model="ops.bar.keepShow"
                  > False:
                  <input
                    type="radio"
                    :value="false"
                    v-model="ops.bar.keepShow"
                  >
                </td>
              </tr>
              <tr>
                <td>Bar Background</td>
                <td>
                  <input
                    type="color"
                    v-model="ops.bar.background"
                  >{{ops.bar.background}}
                </td>
              </tr>
              <tr>
                <td>Rail Background</td>
                <td>
                  <input
                    type="color"
                    v-model="ops.rail.background"
                  >
                  {{ops.rail.background}}
                </td>
              </tr>
              <tr>
                <td>Rail Opacity</td>
                <td>
                  <input
                    type="range"
                    :min="0"
                    :max="1"
                    :step="0.1"
                    v-model="ops.rail.opacity"
                  >{{ops.rail.opacity}}
                </td>
              </tr>
              <tr>
                <td>Rail Size</td>
                <td>
                  <input
                    type="text"
                    v-model="ops.rail.size"
                  >
                </td>
              </tr>
              <tr>
                <td>Bar Size</td>
                <td>
                  <input
                    type="text"
                    v-model="ops.bar.size"
                  >
                </td>
              </tr>
              <tr>
                <td>Bar MinSize</td>
                <td>
                  <input
                    type="range"
                    :min="0"
                    :max="1"
                    :step="0.1"
                    v-model="ops.bar.minSize"
                  >{{ops.bar.minSize}}
                </td>
              </tr>
              <tr>
                <td>scrollButton enable</td>
                <td>
                  True:<input
                    type="radio"
                    :value="true"
                    v-model="ops.scrollButton.enable"
                  > False:
                  <input
                    type="radio"
                    :value="false"
                    v-model="ops.scrollButton.enable"
                  >
                </td>
              </tr>
              <tr>
                <td>scrollButton background</td>
                <td>
                  <input
                    type="color"
                    v-model="ops.scrollButton.background"
                  >{{ops.scrollButton.background}}
                </td>
              </tr>
              <tr>
                <td>Animation</td>
                <td>
                  <select v-model="ops.scrollPanel.easing">
                    <option
                      v-for="easing in easings"
                      :value="easing"
                    >
                      {{easing}}
                    </option>
                  </select> <br />
                  <button @click="randomScroll">Scroll to a random position</button>
                </td>
              </tr>
            </tbody>
          </table>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
const easings = [
  'easeInQuad',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint'
];

export default {
  data() {
    return {
      ops: {
        rail: {
          opacity: '0.2',
          background: undefined,
          border: '1px solid #cecece',
          size: '15px'
        },
        bar: {
          background: '#00ff00',
          keepShow: false,
          size: '10px',
          minSize: 0.2
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800
        }
      },
      width: '',
      easings,
      items: []
    };
  },
  created() {
    this.items = new Array(64).fill(null).map(() => {
      return this.getBg();
    });
  },
  mounted() {
    this.width = this.$refs['parentElm'].clientWidth / 16 + 'rem';
  },
  methods: {
    getBg() {
      let str = '#';
      let i = 6;
      while (i--) {
        str += Math.floor(Math.random() * 16).toString(16);
      }
      return {
        backgroundColor: str
      };
    },
    randomScroll() {
      const x = Math.random() * 2300;
      const y = Math.random() * 2300;
      this.$refs['vs'].scrollTo({
        x,
        y
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.customize-table {
  input {
    max-width: 80px;
  }
}

.parent {
  height: 400px;

  .child-wrap {
    width: 800%;
    display: flex;
    flex-wrap: wrap;

    .child {
      flex-basis: 12.5%;
      height: 400px;
      text-align: center;
      line-height: 400px;
      text-shadow: 0px 3px 3px #975a00;
      -webkit-text-shadow: 0px 3px 3px #975a00;
      -moz-text-shadow: 0px 3px 3px #975a00;
      font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
      font-weight: 700;
      font-style: normal;
      font-size: 48px;
      color: #ff9900;
    }
  }
}
</style>