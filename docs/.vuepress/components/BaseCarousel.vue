<template>
  <div class="parent" ref="parentElm">
      <vue-scroll :ops="ops" ref="vs" @handle-resize="handleResize" @handle-scroll-complete="scrollComplete">
      <template
      v-for="(item, index) in result"
      >
      <BaseChild
      :key="index"
      :width="width"
      :index="item.index"
      :useBgImage="true"
      :backgroundColor="item.url"
      />
      </template>
      </vue-scroll>
      <div class="dot-group">
        <a href="javascript:void(0)"
        v-for="(item, index) in items"
        :key="index"
        :class="{active: currentIndex == index}"
        >
          <i class="dot-item"></i>
        </a>
      </div>
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
            bar: {
                vBar: { opacity: 0},
                hBar: { opacity: 0}
            },
            vuescroll: {
              mode: 'slide',
              paging: true,
              scroller: {
                bouncing: false
              }
            },
            scrollPanel: {
              scrollingY: false
            }
          },
          result: [],
          currentIndex: 0
        }
    },
    created() {
      this.setItems();
    },
    mounted() {
        this.width = this.$refs['parentElm'].clientWidth + 'px';
        if(this.result.length > 1) {
          this.result.push(this.result[0]);
          this.result.unshift(this.result[this.result.length - 2]);
        }
    },
    methods: {
      handleResize() {
        if(!this.hasAdjust) {
           this.$refs['vs'].scrollTo({
            x: this.$el.clientWidth
          }, false)
          this.hasAdjust = true;
        }
      },
      scrollComplete(v, h) {
        if(this.result.length > 1) {
          if(Math.abs(h.process) < 0.001) {
            this.$refs['vs'].scrollBy({
              dx: (1 / this.result.length) * 100 * (this.result.length - 2)  + '%'
            }, false)
          }
          if(Math.abs(h.process - 1) < 0.001) {
            this.$refs['vs'].scrollTo({
              x: (1 / this.result.length) * 100  + '%'
            }, false)
          }
        }
        const dom = this.$refs['vs'].getCurrentviewDom();
        this.currentIndex = dom[0].__vue__.index;
      },
      setItems() {
        const vm = this;
        this.items.forEach((item, index) => {
           item.index = index;
           vm.result.push(item);
        });
      }
    }
}
</script>

<style lang="stylus">
@import '~assets/common.styl'
.dot-group
  position absolute
  right: 10px;
  bottom: 10px;
  & > a
    float: left;
    margin-left: 6px;
    .dot-item
      display: inline-block;
      vertical-align: middle;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background-color: #d0cdd1;
  & > a.active
    .dot-item
      background-color: #FF9900;
</style>