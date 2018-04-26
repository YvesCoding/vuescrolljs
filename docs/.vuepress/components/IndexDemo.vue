<template>
  <div class="demo-container">
      <vue-scroll :ops="ops">
        <div class="demo-content"></div>
      </vue-scroll>
  </div>
</template>
<script>
export default { 
  data() {
    return {
      ops: {} // Your options
    }
  }
}
</script>

<style lang="stylus">
  .demo-container
    width 100px
    height 100px
  .demo-content
    width 500px
    height 500px
    background: linear-gradient(red, blue);
</style>