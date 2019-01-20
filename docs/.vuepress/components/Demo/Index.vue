<template>
  <div class="demo-wrapper" :style="{height}">
    <div class="top">
      <!-- <div class="top-left-title">Demo</div> -->
      <div class="top-right-title">
        <a target="_blank" href="https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Index.vue">{{computedConf.source}}</a>
      </div>
      <div class="top-center-title">
        <em>{{currentDemo.title}}
          <a target="_blank" :href="currentDemo.url">{{computedConf.source}}</a>
        </em>
      </div>
    </div>
    <div class="middle">
      <div class="left">
        <div class="to-left" @click="pre"></div>
      </div>
      <div class="center">
        <vuescroll-carousel class="carousel" ref="carousel" :auto-play="false" :currentIndex.sync="currentIndex" :indicator="false">
          <Demo-Basic-SetPositionAndKeepShow/>
          <Demo-Basic-PullRefreshOrPushLoad :lang="lang" />
          <Demo-Advance-MakeACarousel />
          <Demo-Advance-MakeACarousel type="vertical" />
          <!-- <Demo-Advance-MakeATimePicker/> -->
        </vuescroll-carousel>
      </div>
      <div class="right">
        <div class="to-right" @click="next"></div>
      </div>

    </div>
    <div class="bottom">
      <Demo-DemoIdicator :num="4" :currenIndex="currentIndex" type="h" @dot-click="goToPage" />
    </div>
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
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SetPositionAndKeepShow.vue'
            },
            {
              title: '上拉刷新和下啦加载',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/PullRefreshOrPushLoad.vue'
            },
            {
              title: '水平轮播图',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue'
            },
            {
              title: '垂直轮播图',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue'
            }
          ],
          source: '源码'
        },
        en: {
          demos: [
            {
              title: 'Customize Scrollbars',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/SetPositionAndKeepShow.vue'
            },
            {
              title: 'Pull-to-refresh and push-to-load',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Basic/PullRefreshOrPushLoad.vue'
            },
            {
              title: 'Horizontal Carousel',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue'
            },
            {
              title: 'Vertical Carousel',
              url:
                'https://github.com/YvesCoding/vuescrolljs/blob/master/docs/.vuepress/components/Demo/Advance/MakeACarousel.vue'
            }
          ],
          source: 'source code'
        }
      }
    };
  },
  methods: {
    pre() {
      this.$refs['carousel'].prev();
    },
    next() {
      this.$refs['carousel'].next();
    },
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
    height: 80%;
    display: flex;

    .right, .left {
      width: 10%;
      position: relative;
    }

    .to-left {
      background: url('./left.svg');
    }

    .to-right {
      background: url('./right.svg');
    }

    .to-left, .to-right {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 27px;
      height: 44px;
      cursor: pointer;
    }

    .center {
      width: 80%;
    }
  }
}
</style>
