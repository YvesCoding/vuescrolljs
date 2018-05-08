<template>
  <div class="parent time-pick-wrap" ref="parentElm">
      <vue-scroll :ops="ops" ref="vs"  @handle-scroll="handleScroll">
      <ul class="picker-ui" ref="picker">
        <template
        v-for="(item, index) in items"
        >
        <li
        :key="index"
        :index="index"
        :class="{active: currentIndex == index}"
        :data-index="index"
        @click="goToTarget($event)"
        class="picker-li"
        >
        {{ item }}
        </li>
        </template>
      </ul>
      </vue-scroll>
  </div>  
</template>

<script>
export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
        return {
          width: '',
          ops: {
            vuescroll: {
              mode: 'slide',
              scroller: {
                bouncing: false
              },
              snapping: {
                enable: true,
                height: 50
              }
            },
            scrollPanel: {
              scrollingX: false
            },
            bar: {
                vBar: { opacity: 0},
                hBar: { opacity: 0}
            }
          },
          currentIndex: 0
        }
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth + 'px';
        this.ops.vuescroll
    },
    methods: {
      goToTarget(e) {
        const index = e.target.dataset.index;
        this.$refs['vs'].scrollBy({
          dy: 50 * (index - this.currentIndex)
        }, true)
      },
      handleScroll({process}) {
        const children = this.$refs['picker'].children;
        const length = children.length;
        const currentIndex = Math.floor(length * process); 
        for (let index = Math.max(currentIndex - 1, 0); index <= currentIndex + 1; index++) {
          const element = children.item(index);
          const { top } = element.getBoundingClientRect();
          const { top: vsTop } = this.$refs['vs'].$el.getBoundingClientRect();
          if(
            (top - vsTop < 125 && top - vsTop >= 100) 
            ||
            (top - vsTop > 75 && top - vsTop <= 100)
          ) {
            this.currentIndex = element.dataset.index;
            const formatValue = this.currentIndex < 10 ? "0" + this.currentIndex : this.currentIndex;
            this.$emit("update:currentValue", formatValue);
          }
        }
      }
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
.time-pick-wrap
  height 250px!important
.picker-ui
  margin 100px 0
.picker-li
  height: 50px
  line-height 50px
  display:block
  color #828282
  &.active
    color #007dff
</style>