<template>
    <div class="wrap">
      <span class="demo-title">Vuescroll Paging</span>
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
</template>

<script>
export default {
    data() {
        return {
          pagingX: true,
          width: '',
          ops: {
            vuescroll: {
              mode: 'slide',
              scrollingX: this.pagingX,
              scrollingY: !this.pagingX,
              paging: true
            }
          }
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