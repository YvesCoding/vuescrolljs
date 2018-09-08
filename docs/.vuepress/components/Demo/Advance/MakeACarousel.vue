<template>
    <div class="wrap">
      <span class="demo-title">Carousel</span>
       <BaseCarousel :items="items"/> 
    </div>
</template>

<script>
import BaseCarousel from '../../BaseCarousel'
export default {
    components: { BaseCarousel },
    data() {
        return {
            items: [ {
                url: "/images/c1.jpg"
            },
            {
                url: "/images/c2.jpg"
            },
            {
                url: "/images/c3.jpg"
            },
            {
                url: "/images/c4.jpg"
            }]
        }
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
</style>