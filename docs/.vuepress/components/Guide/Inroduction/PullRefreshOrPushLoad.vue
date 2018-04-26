<template>
    <div class="wrap">
        <span class="demo-title">Pull-refresh and pull-load</span>
        <div class="parent" ref="parentElm">
          <vue-scroll 
          :ops="ops"
          @load-before-deactivate="handleLBD"
          >
          <template
          v-for="item in itemAmount"
          >
          <BaseChild 
          :key="item"
          :width="width"
          :index="item"
          />
          <br v-if="item % 1 == 0" />
          </template>
          </vue-scroll>
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
                  enable: true
                }
              }
            },
            width: '',
            itemAmount: 8
        }
    },
    methods: {
      handleLBD(vm, refreshDom, done) {
        setTimeout(() => {
          this.itemAmount += 8;
          done();
        }, 500);
      }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth + "px";
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>