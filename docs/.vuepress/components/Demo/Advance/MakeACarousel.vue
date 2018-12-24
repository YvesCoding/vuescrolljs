<template>
  <div class="wrap">
    <span class="demo-title">Carousel ({{typeDesc}})</span>
    <vuescroll-carousel :type="type">
      <img v-for="item in items" :key="item.url" :src="item.url" alt="">
    </vuescroll-carousel>
  </div>
</template>

<script>
import vuescrollCarousel from 'vuescroll-carousel';
export default {
  props: {
    type: {
      type: String,
      default: 'h'
    }
  },
  components: { vuescrollCarousel },
  computed: {
    typeDesc() {
      return this.type != 'h' ? 'vertical' : 'horizontal';
    }
  },
  data() {
    return {
      items: [
        {
          url: '/images/c1.jpg'
        },
        {
          url: '/images/c2.jpg'
        },
        {
          url: '/images/c3.jpg'
        },
        {
          url: '/images/c4.jpg'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  width: 100%;
  height: 400px;
}
</style>