<template>
    <div class="wrap">
      <span class="demo-title">Paging</span>
        <div class="parent" ref="parentElm">
            <vue-scroll :ops="ops">
            <template
            v-for="item in 64"
            >
            <BaseChild
            style="border: 1px solid #000" 
            :key="item"
            :width="width"
            :index="item"
            backgroundColor="rgb(222, 240, 204)"
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
          width: '',
          ops: {
            scrollContent: {
              tag: 'transition-group',
              props:{
                  tag: 'div',
                  name: 'group-animate'
              }
            }
          }
        }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth / 16  + "rem";
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
.group-animate-enter
  transform: translateX(-100px)
.group-animate-leave-to 
  transform: translateX(100px)
</style>