<template>
  <div class="container">
    <div class="parent first" ref="parentElm">
      <vue-scroll :ops="ops" ref="vs">
        <div class="child-wrap">
          <template v-for="(item,index) in items">
            <div :key="index" class="child" :class="getClass(index)">
              {{index + 1}}
            </div>
          </template>
        </div>
      </vue-scroll>
    </div>
    <div class="parent second">
      <div class="operation">
        <vue-scroll :ops="operation">
          <table class="customize-table">
            <tbody>
              <tr>
                <th>Data Num</th>
                <td>
                  <input type="range" v-model="dataCount" :min="100" :max="9999">
                  <br> {{dataCount}}
                </td>
              </tr>
              <tr>
                <th>Bar KeepShow</th>
                <td>
                  <input type="checkbox" v-model="ops.bar.keepShow"> {{ops.bar.keepShow}}
                </td>
              </tr>
              <tr>
                <th>Bar Background</th>
                <td>
                  <input type="color" v-model="ops.bar.background">{{ops.bar.background}}
                </td>
              </tr>
              <tr>
                <th>Bar Size</th>
                <td>
                  <input type="text" v-model="ops.bar.size">
                </td>
              </tr>
              <tr>
                <th>Bar MinSize</th>
                <td>
                  <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.bar.minSize">{{ops.bar.minSize}}
                </td>
              </tr>
              <tr>
                <th>Rail Background</th>
                <td>
                  <input type="color" v-model="ops.rail.background"> {{ops.rail.background}}
                </td>
              </tr>
              <tr>
                <th>Rail Opacity</th>
                <td>
                  <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.rail.opacity">{{ops.rail.opacity}}
                </td>
              </tr>
              <tr>
                <th>Rail Size</th>
                <td>
                  <input type="text" v-model="ops.rail.size">
                </td>
              </tr>
              <tr>
                <th>scrollButton enable</th>
                <td>
                  <input type="checkbox" :value="true" v-model="ops.scrollButton.enable"> {{ops.scrollButton.enable}}
                </td>
              </tr>
              <tr>
                <th>scrollButton background</th>
                <td>
                  <input type="color" v-model="ops.scrollButton.background">{{ops.scrollButton.background}}
                </td>
              </tr>
              <tr>
                <th>Animation</th>
                <td>
                  <select v-model="ops.scrollPanel.easing">
                    <option v-for="easing in easings" :value="easing">
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
      return ['child' + (index % 7 + 1)];
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
  width: 100%;
  display: flex;

  .item {
    height: 100%;
  }
}

.operation {
  height: 100%;
}

table {
  margin: 0;
}

.parent {
  height: 100%;

  &.first {
    width: 80%;
  }

  &.second {
    width: 20%;
  }

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