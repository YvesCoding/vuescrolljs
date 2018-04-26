<template>
  <div class="wrap">
      <div class="wrap-part">
          <span class="demo-title">Vuescroll</span>
          <div class="parent" ref="parentElm">
              <vue-scroll>
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
          <span class="demo-title">Native</span>
          <div class="parent">
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
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            width: ''
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