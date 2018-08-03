<template>
    <div class="wrap">
        <div class="wrap-part">
            <span class="demo-title">Vuescroll</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops" ref="vs">
                    <template v-for="item in 64">
                        <BaseChild :key="item" :width="width" :index="item" />
                        <br v-if="item % 8 == 0" />
                    </template>
                </vue-scroll>
            </div>
        </div>
        <div class="wrap-part">
            <span class="demo-title">Operation</span>
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
                                    True:<input type="radio" :value="true" v-model="ops.bar.keepShow"> False:
                                    <input type="radio" :value="false" v-model="ops.bar.keepShow">
                                </td>
                            </tr>
                            <tr>
                                <td>Background(Bar)</td>
                                <td>
                                    <input type="text" v-model="ops.bar.background">
                                </td>
                            </tr>
                            <tr>
                                <td>Background(Rail)</td>
                                <td>
                                    <input type="text" v-model="ops.rail.background">
                                </td>
                            </tr>
                            <tr>
                                <td>Opacity(Rail)</td>
                                <td>
                                    <input type="range" :min="0" :max="1" :step="0.1" v-model="ops.rail.opacity">{{ops.rail.opacity}}
                                </td>
                            </tr>
                            <tr>
                                <td>Animation</td>
                                <td>
                                    <select v-model="ops.scrollPanel.easing">
                                        <option v-for="easing in easings" :value="easing">
                                            {{easing}}
                                        </option>
                                    </select> <br/>
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
          opacity: '0.5',
          background: undefined
        },
        bar: {
          background: undefined,
          keepShow: false
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800
        }
      },
      width: '',
      easings
    };
  },
  mounted() {
    this.width = this.$refs['parentElm'].clientWidth / 16 + 'rem';
  },
  methods: {
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

<style lang="stylus">
@import '~assets/common.styl';

.customize-table {
    input {
        max-width: 80px;
    }
}
</style>