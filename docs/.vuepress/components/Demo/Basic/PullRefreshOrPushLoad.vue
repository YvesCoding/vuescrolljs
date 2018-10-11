<template>
    <div class="wrap">
       <div class="wrap-part">
        <span class="demo-title">Pull-refresh and push-load</span>
        <div class="parent" ref="parentElm">
          <vue-scroll 
          :ops="ops"
          @refresh-start="handleRS"
          @load-before-deactivate="handleLBD"
          @load-start="handleLoadStart"
          >
          <template
          v-for="(item, index) in amount"
          >
          <BaseChild 
          :key="index"
          :width="width"
          :index="index"
          :backgroundColor="item"
          />
          <br v-if="index % 1 == 0" />
          </template>
          <div slot="load-beforeDeactive" v-if="noData">
          <svg       viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8056"><path d="M469.333333 384h85.333334v213.333333h-85.333334z m0 298.666667h85.333334v85.333333h-85.333334z" fill="" p-id="8057"></path><path d="M549.717333 108.032c-14.762667-27.904-60.672-27.904-75.434666 0l-384 725.333333A42.624 42.624 0 0 0 128 896h768a42.581333 42.581333 0 0 0 37.674667-62.592L549.717333 108.032zM198.869333 810.666667L512 219.221333 825.130667 810.666667H198.869333z" fill="" p-id="8058"></path></svg>
                      no mroe data :( 
          </div> 
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
                                <th>Property</th>
                                <th>Operation</th>
                            </tr>
                             <tr>
                                <th>autoLoad</th>
                                <th>True:<input type="radio" :value="true" v-model="ops.vuescroll.pushLoad.auto"> False:
                                    <input type="radio" :value="false" v-model="ops.vuescroll.pushLoad.auto"></th>
                            </tr>
                            <tr>
                                <th>autoLoadDistance</th>
                                <th> <input type="number" min="0" v-model="ops.vuescroll.pushLoad.autoLoadDistance" :disabled="!ops.vuescroll.pushLoad.auto"></th>
                            </tr>
                        </thead>
                         
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
          mode: 'slide',
          pullRefresh: {
            enable: true
          },
          pushLoad: {
            enable: true,
            auto: true,
            autoLoadDistance: 10
          }
        }
      },
      width: '',
      itemAmount: 3,
      refresh: 1,
      noData: false
    };
  },
  computed: {
    amount() {
      function getRandom() {
        let str = '#';
        for (let i = 0; i < 6; i++) {
          str += Math.floor(Math.random() * 16).toString(16);
        }
        return str;
      }
      return (
        this.refresh &&
        Array.apply(null, {
          length: this.itemAmount
        }).map(item => {
          return getRandom();
        })
      );
    }
  },
  methods: {
    handleRS(vsInstance, refreshDom, done) {
      const vm = this;
      setTimeout(() => {
        this.refresh++;
        done();
      }, 1500);
    },
    handleLoadStart(vm, dom, done) {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 2) + 1;
        if (random == 1) {
          this.noData = true;
        } else {
          this.noData = false;
        }
        done();
      }, 600);
    },
    handleLBD(vm, loadDom, done) {
      setTimeout(() => {
        if (!this.noData) {
          this.itemAmount += 2;
        }
        done();
      }, 500);
    }
  },
  mounted() {
    this.width = this.$refs['parentElm'].clientWidth / 16 + 'rem';
  }
};
</script>

<style lang="stylus">
@import '~assets/common.styl';
</style>