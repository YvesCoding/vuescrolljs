<template>
  <div class="container">
    <div>
      <div class="operation">
        <vue-scroll :ops="operation">
          <table class="customize-table">
            <thead>
              <tr>
                <th>Data Num</th>
                <th>Bar KeepShow</th>
                <th>Bar Background</th>
                <th>Bar Size</th>
                <th>Bar MinSize</th>
                <th>Rail Background</th>
                <th>Rail Opacity</th>
                <th>Rail Size</th>
                <th>scrollButton enable</th>
                <th>scrollButton background</th>
                <th>Animation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    v-model="dataCount"
                  >
                </td>
                <td>
                  <input
                    type="checkbox"
                    v-model="ops.bar.keepShow"
                  >
                  {{ops.bar.keepShow}}
                </td>
                <td>
                  <input
                    type="color"
                    v-model="ops.bar.background"
                  >{{ops.bar.background}}
                </td>
                <td>
                  <input
                    type="text"
                    v-model="ops.bar.size"
                  >
                </td>
                <td>
                  <input
                    type="range"
                    :min="0"
                    :max="1"
                    :step="0.1"
                    v-model="ops.bar.minSize"
                  >{{ops.bar.minSize}}
                </td>
                <td>
                  <input
                    type="color"
                    v-model="ops.rail.background"
                  >
                  {{ops.rail.background}}
                </td>
                <td>
                  <input
                    type="range"
                    :min="0"
                    :max="1"
                    :step="0.1"
                    v-model="ops.rail.opacity"
                  >{{ops.rail.opacity}}
                </td>
                <td>
                  <input
                    type="text"
                    v-model="ops.rail.size"
                  >
                </td>
                <td>
                  <input
                    type="checkbox"
                    :value="true"
                    v-model="ops.scrollButton.enable"
                  > {{ops.scrollButton.enable}}
                </td>
                <td>
                  <input
                    type="color"
                    v-model="ops.scrollButton.background"
                  >{{ops.scrollButton.background}}
                </td>
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
    <div
      class=" "
      style="margin-top:10px"
    >
      <div
        class="parent"
        ref="parentElm"
      >
        <vue-scroll
          :ops="ops"
          ref="vs"
        >
          <div class="child-wrap">
            <template v-for="(item,index) in items">
              <div
                :key="index"
                class="child"
                :class="getClass(index)"
              >
                {{index + 1}}
              </div>
            </template>
          </div>
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
      operation: {
        rail: {
          size: '20px'
        },
        bar: {
          size: '15px',
          opacity: 0.5,
          onlyShowBarOnScroll: false
        }
      },
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
      dataCount: 1024,
      items: []
    };
  },
  watch: {
    dataCount: {
      handler(newValue) {
        this.items = new Array(+newValue).fill(null);
      },
      immediate: true
    }
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
      const vs = this.$refs['vs'];
      const panel = vs.scrollPanelElm;
      const x = Math.random() * panel.scrollWidth;
      const y = Math.random() * panel.scrollHeight;
      vs.scrollTo({
        x,
        y
      });
    },
    getClass(index) {
      return ['child' + ((index % 7) + 1)];
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

.container {
}

.operation {
  height: 200px;
}

.parent {
  height: 300px;

  .child-wrap {
    width: 800%;
    display: flex;
    flex-wrap: wrap;

    .child {
      flex-basis: 5%;
      height: 150px;
      line-height: 150px;
      text-align: center;
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

.child1 {
  background-color: #43d2c6;
}

.child2 {
  background-color: #589be5;
}

.child3 {
  background-color: #f3b500;
}

.child4 {
  background-color: #ff705a;
}

.child5 {
  background-color: #fe7a9c;
}

.child6 {
  background-color: #7a85ee;
}

.child7 {
  background-color: #57cc71;
}
</style>