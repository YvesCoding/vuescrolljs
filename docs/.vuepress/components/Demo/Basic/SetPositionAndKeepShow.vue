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
                                <div>
                                 hBar: 
                                     yes:<input type="radio" :value="true" v-model="ops.bar.hBar.keepShow"/>
                                no:<input type="radio" :value="false" v-model="ops.bar.hBar.keepShow"/>
        
                                </div>
                                <div>vBar: 
                                yes:<input type="radio" :value="true" v-model="ops.bar.vBar.keepShow"/>
                                no:<input type="radio" :value="false" v-model="ops.bar.vBar.keepShow"/>
                                 </div>  
                             </td>
                        </tr>
                         <tr>
                            <td>Background(Bar)</td>
                            <td>
                               <div>
                                   hBar:
                                 <input type="text"   v-model="ops.bar.hBar.background"/>
                            </div>
                               <div>
                                vBar:
                                <input type="text"   v-model="ops.bar.vBar.background"/>
                                </div>
                         </td>
                        </tr>
                         <tr>
                            <td>Background(Rail)</td>
                            <td>
                               <div>
                                   hRail:
                                 <input type="text"   v-model="ops.rail.hRail.background"/>
                            </div>
                               <div>
                                vRail:
                                <input type="text"   v-model="ops.rail.vRail.background"/>
                                </div>
                         </td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>
                               <div>
                                   hBar:
                                 top:<input type="radio" value="top" v-model="ops.rail.hRail.pos"/>
                                bottom:<input type="radio" value="bottom" v-model="ops.rail.hRail.pos"/>
                            </div>
                               <div>
                                vBar :
                                left:<input type="radio" value="left" v-model="ops.rail.vRail.pos"/>
                                right:<input type="radio" value="right" v-model="ops.rail.vRail.pos"/>
                                </div>
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
        rail: {
          vRail: {
            pos: 'right',
            opacity: 0.5,
            background: '#01a99a'
          },
          hRail: {
            pos: 'bottom',
            opacity: 0.5,
            background: '#01a99a'
          }
        },
        bar: {
          vBar: {
            keepShow: false,
            background: '#00a650'
          },
          hBar: {
            keepShow: false,
            background: '#00a650'
          }
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

.customize-table {
    input {
        max-width: 80px;
    }
}
</style>