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
        @click="goToPage(index + 2, true)"
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
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      autoPlayTime: {
        type: Number,
        default: 2000
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
    beforeDestroy() {
      clearInterval(this.timeId);
    },
    mounted() {
        const vm = this;
        vm.width = vm.$refs['parentElm'].clientWidth + 'px';
        if(vm.autoPlay) {
           vm.timeId = setInterval(() => {
            vm.goToPage(vm.currentIndex + 3, true)
            }, vm.autoPlayTime) 
        }
        window.addEventListener("resize", () => {
          this.width = this.$refs['parentElm'].clientWidth + 'px';
        })
    },
    methods: {
      goToPage(index, animate = false) {
        this.$refs['vs'].goToPage({
          x: index
        }, animate)
      },
      handleResize({process}) {
        this.width = this.$refs['parentElm'].clientWidth + 'px';
        if(process == 0) {
           this.$refs['vs'].goToPage({
            x: 2
          }, false) 
        }
      },
      scrollComplete(v, h) {
        const { x } = this.$refs['vs'].getCurrentPage();
        if(this.result.length > 1) {
          if(x == 1) {
            this.goToPage(this.result.length - 1)
          }
          else if(x == this.result.length) {
            this.goToPage(2)
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
        if(vm.result.length > 1) {
          vm.result.push(this.result[0]);
          vm.result.unshift(this.result[this.result.length - 2]);
        }
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