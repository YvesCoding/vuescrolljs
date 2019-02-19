<template>
  <div
    class="demo-wrapper"
    :style="{height}"
  >
    <div class="top">
      <!-- <div class="top-left-title">Demo</div> -->
      <div class="top-right-title">
        <a
          target="_blank"
          href="https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Index.vue"
        >{{computedConf.source}}</a>
      </div>
      <div class="top-center-title">
        <em>{{currentDemo.title}}
          <a
            target="_blank"
            :href="currentDemo.url"
          >{{computedConf.source}}</a>
        </em>
      </div>
    </div>
    <div class="middle">
      <div class="left">
        <p
          class="left-title"
          v-for="(demo, index) in computedConf.demos"
          :key="index"
        >
          <span
            class="text"
            :class="{active: index == currentIndex - 1}"
            @click="goToPage(index + 1)"
          >
            {{demo.title}}
          </span>
        </p>
      </div>
      <div class="center">
        <vuescroll-carousel
          class="carousel"
          ref="carousel"
          :auto-play="false"
          :currentIndex.sync="currentIndex"
          :indicator="false"
          type="v"
        >
          <Demo-CustomizeScrollbar />
          <Demo-RefreshAndLoad :lang="lang" />
          <Demo-Carousel />
          <Demo-Carousel type="vertical" />
          <!-- <Demo-Advance-MakeATimePicker/> -->
        </vuescroll-carousel>
      </div>
      <!-- <div class="right">
        <div class="to-right" @click="next"></div>
      </div> -->

    </div>
    <!-- <div class="bottom">
      <Demo-DemoIdicator :num="4" :currenIndex="currentIndex" type="h" @dot-click="goToPage" />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      default: 'en'
    }
  },
  mounted() {
    this.height = `calc(${window.innerHeight}px - 3.6rem - 2px)`;
  },
  computed: {
    currentDemo() {
      return this.computedConf.demos[this.currentIndex - 1];
    },
    computedConf() {
      return this.config[this.lang];
    }
  },
  watch: {
    currentIndex(newValue) {
      console.log(newValue);
    }
  },
  data() {
    return {
      height: '100%',
      currentIndex: 1,
      config: {
        zh: {
          demos: [
            {
              title: '自定义滚动条',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/CustomizeScrollbar.vue'
            },
            {
              title: '刷新和加载',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/RefreshAndLoad.vue'
            },
            {
              title: '水平轮播图',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Carousel.vue'
            },
            {
              title: '垂直轮播图',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Carousel.vue'
            }
          ],
          source: '源码'
        },
        en: {
          demos: [
            {
              title: 'Customize Scrollbars',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/CustomizeScrollbar.vue'
            },
            {
              title: 'Refresh and load',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/RefreshAndLoad.vue'
            },
            {
              title: 'Horizontal Carousel',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Carousel.vue'
            },
            {
              title: 'Vertical Carousel',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Carousel.vue'
            }
          ],
          source: 'source code'
        }
      }
    };
  },
  methods: {
    goToPage(index) {
      this.$refs['carousel'].goToPage(index);
    }
  }
};
</script>

<style   lang="stylus"  >
@import '~assets/common.styl';

.demo-wrapper {
  width: 100%;
  position: relative;
  margin: 0 !important;

  * {
    box-sizing: border-box;
  }

  .top, .bottom {
    height: 10%;
    position: relative;
  }

  .top {
    .top-left-title {
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 1.5rem;
    }

    .top-right-title {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .top-center-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .middle {
    height: 90%;
    display: flex;

    .right, .left {
      // width: 10%;
      position: relative;
    }

    .left {
      width: 15%;
      display: flex;
      flex-direction: column;

      // justify-content: center;
      &-title {
        text-align: center;
        cursor: pointer;
        font-size: 15px;
        font-weight: 400;
        color: #2c3e50;

        & > span {
          position: relative;

          &.active:after, &:hover:after {
            left: 0;
            right: 0;
          }

          &:after {
            content: '';
            position: absolute;
            display: block;
            bottom: -3px;
            left: 50%;
            right: 50%;
            height: 3px;
            background-color: #3eaf7c;
            transition: all 0.3s;
          }
        }
      }
    }

    .center {
      width: 85%;
    }
  }
}
</style>
