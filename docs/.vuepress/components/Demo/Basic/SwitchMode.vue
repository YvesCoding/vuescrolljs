<template>
    <div class="wrap">
        <div class="wrap-part">
             <span class="demo-title">Vuescroll</span>
            <div class="parent" ref="parentElm">
                <vue-scroll :ops="ops">
                <template
                v-for="item in 64"
                >
                <BaseChild 
                :key="item"
                :width="width"
                :index="item"
                />
                <br v-if="item % 8 == 0" />
                </template>
                </vue-scroll>
            </div>
        </div>
        <div class="wrap-part">
             <span class="demo-title">Operation</span>
            <div class="parent">
                <vue-scroll>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>vuescroll-mode</td>
                            <td>
                                native:<input type="radio" value="native" v-model="ops.vuescroll.mode"/><br />
                                slide:<input type="radio" value="slide" v-model="ops.vuescroll.mode"/><br />
                                pure-native:<input type="radio" value="pure-native" v-model="ops.vuescroll.mode"/>
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
export default {
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native'
        }
      },
      width: ''
    };
  },
  mounted() {
    this.width = this.$refs['parentElm'].clientWidth / 16 + 'rem';
  }
};
</script>

<style lang="stylus">
@import '~assets/common.styl';
</style>