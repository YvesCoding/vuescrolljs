<template>
  <div class="child" :style="{width: width, height: height,  background: backgroundColor || (_bg = getRandomColor()) }">
    <span class="content-text" v-if="!useBgImage">{{index}}</span>
    <img class="img-bg"  v-else :src="$withBase(backgroundColor)" @drag="drag" @mousedown="drag">
  </div>
</template>

<script>

export default {
  methods: {
    drag(e) {
       e.preventDefault();
      return false;
    }
  },
   props: {
       backgroundColor: String,
       width: { 
         default: '25rem',
         type: String
       },
       height: {
         default: '25rem',
         type: String
       },
       index: Number,
       useBgImage: {
         type: Boolean,
         default: false
       }
   }
}
</script>

<style lang="stylus" scoped>
  .img-bg {
    height 100%
    width 100%
  }
</style>
